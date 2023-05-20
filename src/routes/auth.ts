// vendors
import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import axios from 'axios';
import { prisma } from '../lib/prisma';

export async function authRoutes(app: FastifyInstance) {
  app.post('/register', async (request) => {
    const bodySchema = z.object({
      code: z.string(),
    });
    const { code } = bodySchema.parse(request.body);

    const accessTokenResponse = await axios.post(
      'https://github.com/login/oauth/access_token',
      null,
      {
        params: {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        },
        headers: {
          Accept: 'application/json',
        },
      }
    );

    const { access_token } = accessTokenResponse.data;

    const userResponse = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const userSchema = z.object({
      id: z.number(),
      login: z.string(),
      name: z.string(),
      avatar_url: z.string().url(),
    });

    const { id, login, name, avatar_url } = userSchema.parse(userResponse.data);

    let user = await prisma.user.findUnique({
      where: {
        githubId: id,
      },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          githubId: id,
          avatarUrl: avatar_url,
          login,
          name,
        },
      });
    }

    const expiresIn = '7 days'; // Expected setting - [number] days/months/years/hours/minutes/seconds

    const token = app.jwt.sign(
      {
        name,
        avatar_url,
      },
      {
        sub: `${id}`,
        expiresIn,
      }
    );

    return { token, expiresIn };
  });
}

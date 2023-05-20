// vendors
import 'dotenv/config';
import fastify from 'fastify';
import cors from '@fastify/cors';
import jwt from '@fastify/jwt';

// routes
import { memoriesRoutes } from './routes/memories';
import { authRoutes } from './routes/auth';

export const app = fastify();
const port = 3333;

app.register(cors, {
  origin: true,
});

app.register(jwt, {
  secret: '63f4d9345f8f1f8a94ab6beb46ffa5fd',
});

app.register(authRoutes);
app.register(memoriesRoutes);

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`✅ Server running on port ${process.env.PORT || port}.`);
  });

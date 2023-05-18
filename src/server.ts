// vendors
import 'dotenv/config';
import fastify from 'fastify';
import cors from '@fastify/cors';

// routes
import { memoriesRoutes } from './routes/memories';
import { authRoutes } from './routes/auth';

export const app = fastify();
const port = 3333;

app.register(cors, {
  origin: true,
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

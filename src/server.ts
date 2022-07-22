import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import './database';
import './database/models/Student';
import './schemas/Student';
import schemaFn from './schemas';
import dotenv from 'dotenv';

dotenv.config();

const app = async () => {
  const schema = await schemaFn();
  const server = new ApolloServer({ schema });
  server.listen({ port: process.env.PORT }, () => console.log(`Server is running on port ${process.env.PORT}`))
}

app();
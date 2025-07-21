import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();
export default new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'db', // importante: 'db' será el nombre del servicio en Docker
  port: parseInt(process.env.POSTGRES_PORT ?? '5432', 10),
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  database: process.env.POSTGRES_DB || 'sports_betting',
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/database/migrations/*.ts'],
});

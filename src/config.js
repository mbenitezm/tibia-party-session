import dotenv from 'dotenv';
dotenv.config();

export const OMDB_API_KEY = process.env.OMDB_API_KEY;
export const REDIS_EXPIRY = 864000;


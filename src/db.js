import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Log environment variables to debug
console.log('HOST:', process.env.HOST);
console.log('USER:', process.env.USER);
console.log('PASSWORD:', process.env.PASSWORD);
console.log('PORT:', process.env.PORT);
console.log('DATABASE:', process.env.DATABASE);

// Create a connection pool using environment variables
export const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    database: process.env.DATABASE
});
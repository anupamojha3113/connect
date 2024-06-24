import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config({ path: './env' });

const app = express();
app.use(express.json());

connectDB().then(() => {
    console.log('Database connected, server can start now');
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT || 8000}`);
    });
}).catch(error => {
    console.error('Failed to connect to the database', error);
});
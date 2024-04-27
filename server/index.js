import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRouter from './routes/posts.js';
const app = express();
app.use('/posts', postRouter);
app.use(bodyParser.json({ limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://capstone:2yjYAtbiS2udjGDR@cluster0.grwezmb.mongodb.net/';

const PORT = 3000;

mongoose.connect(CONNECTION_URL)
    .then(()=> app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`)))
    .catch((error)=> console.log(error.message));


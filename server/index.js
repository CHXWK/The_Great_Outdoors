import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js'

//initializing app
const app = express();
dotenv.config();


//setting up body parser for our request
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

//Express middle wear connecting routes to application
app.use('/posts', postRoutes);

const PORT = process.env.PORT || 5000;

//will connect to data base and listen to port 5000 if successfull, if not will output error message
mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));
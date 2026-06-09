import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import noteRoutes from './routes/note.route.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());

// database connection 
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('connected to database');
    })
    .catch((error) => {
        console.log('database error:', error);
    });



app.use('/api/v1/noteapp', noteRoutes);


app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})
const express = require('express');
const cors = require('cors');
// const cookieParser = require('cookie-parser');
const dbConnection = require('./database/dbConnection');


require('dotenv').config();

const app = express();
app.use(express.json());
// app.use(cookieParser());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    allowedHeaders: ['Content-Type, Authorization'],
}));

const PORT = process.env.PORT || 6000;


//routes



//database connection
dbConnection();


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

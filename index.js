const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const postRoutes = require('./routes/postRoutes')
const cors = require('cors')

dotenv.config();

const app = express();
connectDB()

app.use(express.json())
app.use(cors())
app.use('/api/posts', postRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
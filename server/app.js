require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cokieParser = require('cookie-parser');
const errorMiddleware = require('./Middleares/error.middleware');

const app = express();

//  Middleware
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(cokieParser());
app.use(express.urlencoded({ extended: false }));

//  Routes
app.use('/api', require('./routes/index'));

//  Error handling
app.use(errorMiddleware);

const bootstrap = async () => {
	try {
		const PORT = process.env.PORT || 5000;
		mongoose.connect(process.env.MONGO_URL).then(() => console.log('Connected to MongoDB'));
		app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
	} catch (error) {
		console.error('Error connecting to MongoDB', error);
	}
};

bootstrap();

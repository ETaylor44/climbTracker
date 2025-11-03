require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Climber = require('./models/Climber');
const Climb = require('./models/Climb');

const app = express();
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

const climberRoutes = require('./routes/climbers');
app.use('/climbers', climberRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('❌ MongoDB connection error:',err));

// Routes
app.get('/', (req, res) => {
  res.send('Hello from Node.js with MongoDB!');
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

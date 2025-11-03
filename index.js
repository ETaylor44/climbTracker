require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Climber = require('./models/Climber');
const Climb = require('./models/Climb');

const app = express();
app.use(express.json());

// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url} -- Body:`, req.body);
//   next();
// });

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

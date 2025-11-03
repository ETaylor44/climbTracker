const express = require('express');
const router = express.Router();
const Climber = require('../models/Climber');

// ➕ Create a new climber
router.post('/', async (req, res) => {
  try {
    const climber = new Climber(req.body);
    await climber.save();
    res.status(201).json(climber);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 📄 Get all climbers
router.get('/', async (req, res) => {
  const climbers = await Climber.find();
  res.json(climbers);
});

// 🔍 Get a single climber (with populated climbs)
router.get('/:id', async (req, res) => {
  try {
    const climber = await Climber.findById(req.params.id).populate('climbs');
    if (!climber) return res.status(404).send('Climber not found');
    res.json(climber);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a climber
router.delete('/:id', async (req, res) => {
    try {
      const climber = await Climber.findByIdAndDelete(req.params.id);
      if (!climber) return res.status(404).send('Climber not found');
      res.status(200).send(climber.name + " successfully deleted.")
    } catch (err){
      res.status(500).json({error: err.message });
    }
});

// Update a climber by id
router.patch('/:id', async (req, res) => {
  try {
    const updatedClimber = await Climber.findByIdAndUpdate(req.params.id,
      { $set: req.body }, // only update provided fields
      {
        new: true,          // return the updated document
        runValidators: true // validate using schema rules
      });
    if (!updatedClimber) {
      return res.status(404).send('Climber not found');
    }
    res.json(updatedClimber);
  } catch (err) {
    res.status(500).json({ error: err.message }); 
  }
});

// Search climber by any field
router.get('/', async (req, res) => {
    try {
      const query = {};
      // Add support for case-insensitive regex on string fields
      if (typeof req.query[key] === 'string') {
        query[key] = new RegExp(req.query[key], 'i'); 
      } else {
        query[key] = req.query[key];
      }
      const climbers = await Climber.find(query);
      res.json(climbers);
    } catch (err) {
      res.status(500).json({ error: err.message });

    }
});

module.exports = router;
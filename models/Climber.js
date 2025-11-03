const mongoose = require('mongoose');

const climberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  email: { type: String, required: true, unique: true },
  climbs: [{ type: mongoose.Schema.Types.ObjectId, 
    ref: 'Climb' }]
}, { timestamps: true });

module.exports = mongoose.model('Climber', climberSchema);
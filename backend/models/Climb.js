const mongoose = require('mongoose');

const climbSchema = new mongoose.Schema({
  name: { type: String, 
    required: true },
  grade: { type: String, 
    required: true }, // e.g. "V5", "7A", etc.
  setter: String,
  terrain: String, // e.g. "slab", "cave", etc. 
  sentBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Climber' }]
}, { timestamps: true });

module.exports = mongoose.model('Climb', climbSchema);
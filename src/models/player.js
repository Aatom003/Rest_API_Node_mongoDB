const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  team: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  stats: {
    type: [Number],
    required: true,
  },
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;

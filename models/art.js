const mongoose = require("mongoose");

const artSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  artImage: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Art", artSchema);

const mongoose = require("mongoose");

const LookSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  mediaUrl: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
  title: {
    type: String,
    required: false,
  },
  category: {
    type: [String],
    required: false,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
  favorite: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("Look", LookSchema);

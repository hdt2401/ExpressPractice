const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Phone = new Schema(
  {
    name: { type: String, default: "" },
    description: { type: String },
    price: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Phone", Phone);

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Phone = new Schema({
  name: { type: String, default: '' },
  description: {type: String},
  image: {type: String},
  createdDate: {type: Date, default: Date.now},
  updatedDate: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Phone', Phone)
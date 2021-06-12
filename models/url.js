const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;
const urlSchema = new mongoose.Schema({
  owned: {
    type: ObjectId,
    ref: 'User',
  },
  originalUrl: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
    required: true,
  },
  visits: {
    type: Number,
    default: 0,
  },
  visitsFB: {
    type: Number,
    default: 0,
  },
  visitsIG: {
    type: Number,
    default: 0,
  },
  visitsYT: {
    type: Number,
    default: 0,
  },
  createAt:{
    type:Date,
    default:Date.now
  },
});

module.exports = mongoose.model('Url', urlSchema);

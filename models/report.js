const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reportSchema = new Schema({
  location: { type: String },
  category: { type: String },
  phone: { type: String },
  useremail: { type: String },
  email: { type: String },
  description: { type: String },
  date: { type: Date, default: Date.now }
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;

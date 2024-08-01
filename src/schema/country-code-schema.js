const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true
  },
  label: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  phoneLength: {
    type: [Number],
    required: true
  }
});

const Country = mongoose.model('Country', countrySchema);

module.exports = Country;
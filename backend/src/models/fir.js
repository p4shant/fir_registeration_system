// src/models/FIR.js

const mongoose = require('mongoose');

// Define FIR schema
const FIRSchema = new mongoose.Schema({
  policeStation: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  occurrenceDate: {
    type: Date,
    required: true,
  },
  reportedDate: {
    type: Date,
    required: true,
  },
  informerName: {
    type: String,
    required: true,
  },
  offenceDescription: {
    type: String,
    required: true,
  },
  occurrencePlace: {
    type: String,
    required: true,
  },
  criminalName: {
    type: String,
    required: true,
  },
  aadharNumber: {
    type: String,
    required: true,
  },
});

// Create and export FIR model based on schema
module.exports = mongoose.model('FIR', FIRSchema);

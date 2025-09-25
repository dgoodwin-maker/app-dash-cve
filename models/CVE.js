const mongoose = require('mongoose');

const cveSchema = new mongoose.Schema({
  cveId: { type: String, required: true },
  description: { type: String, required: true },
  source: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('CVE', cveSchema);
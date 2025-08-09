const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  peso: { type: Number, required: true },
  altura: { type: Number, required: true }
}, {
  timestamps: true,
});

module.exports = mongoose.model('FormData', formDataSchema);

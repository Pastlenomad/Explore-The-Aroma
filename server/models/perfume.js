const mongoose = require('mongoose');

const perfumeSchema = new mongoose.Schema({
  name: String,
  perfumeName: String,
  description: String,
  url: String,
  noteUrl: String,
  heartNoteUrl: String,
  baseNoteUrl: String,
});

const Perfume = mongoose.model('Perfume', perfumeSchema);

module.exports = Perfume;

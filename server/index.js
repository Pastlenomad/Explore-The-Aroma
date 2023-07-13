const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/perfumes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema for perfumes
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


app.get('/perfumes', async (req, res) => {
  try {
    const perfumes = await Perfume.find();
    res.json(perfumes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

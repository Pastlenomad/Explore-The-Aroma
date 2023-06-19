const mongoose = require('mongoose');
const Ingredient = require('./ingredient');
const dbName = 'ingredient'

mongoose.connect(`mongodb://localhost:27017/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    
    
    const ingredientData = require('./ingredientList');

    
    Promise.all(ingredientData.map(data => Ingredient.create(data)))
      .then(() => {
        console.log('Data saved successfully');
        mongoose.disconnect();
      })
      .catch(error => {
        console.error('Error saving data:', error);
        mongoose.disconnect();
      });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

  module.exports = mongoose;
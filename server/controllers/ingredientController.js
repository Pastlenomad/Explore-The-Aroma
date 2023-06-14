const Ingredient = require('../models/ingredient');


const saveIngredientData = async (req, res) => {
  try {
    const ingredientData = req.body; 

    await Ingredient.create(ingredientData);
    res.status(200).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'An error occurred while saving data' });
  }
};

module.exports = {
  saveIngredientData,
};
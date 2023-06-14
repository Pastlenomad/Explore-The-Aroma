const express = require('express');
const mongoose = require('mongoose'); 

const app = express();
const ingredientRouter = require('./ingredientRouter');




app.use('/ingredients', ingredientRouter);


app.listen(4000, () => {
  console.log('Server listening on port 4000');
});

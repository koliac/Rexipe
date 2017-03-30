// 1ST DRAFT DATA MODEL
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name:{Type:String,required:true},
  ingredients:[ingredient],
  steps:String
});

//username and password will be provided by middleware
const userSchema = new mongoose.Schema({
  firstname:{Type:String,required:true},
  lastname:{Type:String,required:true},
  likes:[{type: Schema.Types.ObjecyId,ref:"recipe"}]
});

const ingredientSchema = new mongoose.Schema({
  name:{Type:String,required:true},
  quantity:{Type:String,required:true}
});

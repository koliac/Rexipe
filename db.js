// 1ST DRAFT DATA MODEL
const mongoose = require('mongoose');




const ingredientSchema = new mongoose.Schema({
  name:{type:String,required:true},
  quantity:{type:String,required:true}
});
const recipeSchema = new mongoose.Schema({
  name:{type:String,required:true},
  ingredients:[ingredientSchema],
  steps:{type:String,required:true}
});
//username and password will be provided by middleware
const userSchema = new mongoose.Schema({
  firstname:{type:String,required:true},
  lastname:{type:String,required:true},
  likes:[{type:mongoose.Schema.Types.ObjectId,ref:"recipeSchema"}]
});



mongoose.model("Ingredient",ingredientSchema);
mongoose.model("Recipe",recipeSchema);
mongoose.model("User",userSchema);

mongoose.connect("mongodb://heroku_7gxp28qp:o81t66eniq4sdrl3dav9lurgot@ds157040.mlab.com:57040/heroku_7gxp28qp");

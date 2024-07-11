const {Schema}= require('mongoose');
const {model}=require('mongoose');



const recipeschema=new Schema({
    core: {type: String,required: true},
    
    title: {type: String,required: true},
    
    ingredients: {type: [String ],requied:true},
    
    
    instructions: {type: String,required: true},
    
})

const recipemodel=model("recipes",recipeschema);
module.exports=recipemodel;
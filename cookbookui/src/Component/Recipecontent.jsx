import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MdOutlineStarBorder } from "react-icons/md";

const Recipecontent = () => {
  const [recipe,setRecipe]=useState('');
  const [color, setColor] = useState('grey');
  
  const {title}=useParams();

  useEffect(()=>{
    const fetch_one_recipe=async ()=>
    {
      try{
        const res=await fetch(`http://localhost:3000/uniquerecipe/${title}`);
        const data=await res.json()
        console.log(data,"inside");
        setRecipe(data);
      }
      catch(error){
        console.log("error",error)
      }
      
    }
    fetch_one_recipe()
},[])
// const result=recipe[0];


// console.log("result",recipe);

const togglecolor = () => {

  setColor(prevColor => (prevColor === 'grey' ? 'yellow' : 'grey'));
  savefav()
};


const savefav= async ()=>
{
  // const recipetitle = window.location.pathname.split("/").pop();
  const recipetitle=recipe.title;
  console.log(recipe.title);
  console.log(color);



  const res=await fetch('http://localhost:3000/addfavo',{
    method:"POST",
    headers:{"Content-Type":"application/json",},
    body: JSON.stringify({recipetitle,color})
})
  console.log('resds')
}

  return (
    <>
    <main className="flex-grow p-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
        <h2 id="recipeTitle" className="text-4xl font-bold mb-4">{recipe.title}</h2>
          <button id="favoriteButton" className="text-gray-500 text-2xl" style={{color:color}} onClick={togglecolor}>
          <MdOutlineStarBorder />
            {/* <i className="material-icons" id="star">star</i> */}
          </button>
        </div>
        <img
          id="recipeImage"
          src=""
          alt="Recipe Image"
          className="rounded w-full h-64 object-cover mb-4"
        />
        <h3 className="text-2xl font-semibold mb-2">Ingredients</h3>
        <ul id="recipeIngredients" className="list-disc list-inside mb-4">{recipe.ingredients}</ul>
        <h3 className="text-2xl font-semibold mb-2">Instruction</h3>
        <p id="recipeInstructions" className="text-lg">{recipe.instructions}</p>
      </div>
    </main>
    </>
  )
}

export default Recipecontent 
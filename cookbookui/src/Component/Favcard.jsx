import React from 'react'

const Favcard = ({recipeproperty}) => {
  return (
    <>
    <div>
        <img src="${recipe.image}" alt="${recipe.title}" className ="w-full h-64 object-cover" />
        <h3 className="text-xl">{recipeproperty.title}</h3>
        <a href={`/recipe/${recipeproperty.title}`} className="text-blue-500">View Recipe</a>
                
    </div>
    
    </>
  )
}

export default Favcard
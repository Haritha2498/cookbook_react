import React from 'react'

const Resultcard = ({recipeproperty}) => {
  return (
    <>
    
    <div className='border-2 '>
        <img src="${recipe.image}" alt="recipe.title" className="w-32 h-64 object-cover" />
        <h3 className="text-2xl">{recipeproperty.title}</h3>
        <a href={`/recipe/${recipeproperty.title}`}className="text-blue-500">View Recipe</a>
        
    </div>
    
    
    </>
  )
}

export default Resultcard
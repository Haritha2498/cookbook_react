import React from 'react'

const Homecard = () => {
  return (
    <>
    
    <div className="bg-white rounded-lg shadow p-4">
              <img
                src="cookbookui/src/assets/images/butter_chicken.jpeg"
                alt="Recipe Image"
                className="rounded w-full h-32 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">Butter Chicken</h3>
              <p className="text-gray-600">A gravy made with chicken and butter</p>
            
          </div>

    </>
  )
}

export default Homecard
import React, { useEffect, useState } from 'react'
import Favcard from './Favcard'

const Favcontent = () => {


  const [favrecipe,setFavrecipe]=useState([])

  useEffect(()=>{
    const fetchrecipe=async ()=>
      {
        try{
          console.log('yttgfg');
          const res=await fetch('http://localhost:3000/favrecipe');
          // console.log('yttgfg');
          
          const data=await res.json();
          setFavrecipe(data);
          console.log(data)

        }
        catch(error)
        {
          console.log("error",error)
        }
      }
      fetchrecipe();
  },[])




  return (
    <>
    <main className="flex-grow p-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Your Favourite Recipes
        </h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            favrecipe.map((eachrecipe)=>(
              <Favcard recipeproperty={eachrecipe} />
            ))
          }
            {/* <Favcard />
            <Favcard />
            <Favcard /> */}


        </div>
      </div>
    </main>
    
    </>
  )
}

export default Favcontent
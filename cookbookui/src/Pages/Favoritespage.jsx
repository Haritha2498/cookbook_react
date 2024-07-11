import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import Favcontent from '../Component/Favcontent'
import Favcard from '../Component/Favcard'
const Favoritespage = () => {




  const [favrecipe,setFavrecipe]=useState([])

  useEffect(()=>{
    const fetchfavrecipe= async ()=>
      {
        try{
          console.log('yttgfg')
          // const res=await fetch('http://localhost:3000/favrecipe');
          const res=await fetch('http://localhost:3000/favorite/fav');
          console.log('yttgfg') 
          
          const data=await res.json();
          setFavrecipe(data);
          console.log(data)

        }
        catch(error)
        {
          console.log("error",error)
        }
      }
      fetchfavrecipe();
  },[])

  return (
    <>
    <Navbar />


    {/* <Favcontent /> */}

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

export default Favoritespage
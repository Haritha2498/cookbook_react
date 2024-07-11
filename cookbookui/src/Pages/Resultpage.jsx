import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import Resultcontent from '../Component/Resultcontent'
import Resultcard from '../Component/Resultcard'
import { useParams } from 'react-router-dom';

const Resultpage = () => {

    const [recipe,setRecipe]=useState([]);
    const {core}=useParams();
    // console.log(core);
    useEffect(()=>{
      const fetchrecipe=async ()=>
      {
        try{
          // console.log('yttgfg');
          const res=await fetch(`http://localhost:3000/getrecipe/${core}`);
          // console.log('yttgfg');
          
          const data=await res.json();
          setRecipe(data);
          console.log(data)

        }
        catch(error)
        {
          console.log("error",error)
        }
      }
      fetchrecipe();
    },[])
    // console.log(recipe,"from result page")
  return (
    <>
    <Navbar />
    {/* <Resultcontent /> */}
    <div className='grid grid-cols-3 grid-rows-2 gap-4 mx-10 mt-24'>

      {
        recipe.map((eachrecipe)=>(
          <Resultcard recipeproperty={eachrecipe}/>
        ))
      }
    {/* <Resultcard />
    <Resultcard />
    <Resultcard />
    <Resultcard />
    <Resultcard />
    <Resultcard /> */}


    </div>
    
    
    </>
  )
}

export default Resultpage
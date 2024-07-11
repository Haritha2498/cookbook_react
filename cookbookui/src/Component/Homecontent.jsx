import React, { useState } from 'react'
import Homecard from './Homecard'

const Homecontent = () => {


  const [searchkey,setSearchkey]=useState('');

  const submitsearch=(event)=>{
    event.preventDefault();
    
    const link=`/result/${searchkey}`;
    window.location.href=link;
  }

  
  
  // console.log(recipe);
  return (
    <>
    
    <main className="flex-grow p-4">
      <div className="max-w-3xl mx-auto mb-8">
        <form onSubmit={submitsearch} className="w-full max-w-md flex">
            <input type="text" 
            name="query" 
            placeholder="Search recipes..." 
            className="flex-grow rounded-l px-4 py-2 border border-gray-300"
            value={searchkey}
            onChange={(e)=>setSearchkey(e.target.value)}
            />
            <button type="submit" className="bg-blue-500 text-white rounded-r px-4 py-2">Search</button>
        </form>
      </div>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Popular Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Homecard />
          <Homecard />
          <Homecard />
          <Homecard />
          <Homecard />
          <Homecard />
        </div>
      </section>
    </main>
    
    </>
  )
}

export default Homecontent
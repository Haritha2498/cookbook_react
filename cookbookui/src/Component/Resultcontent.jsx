import React from 'react'

const Resultcontent = () => {
  return (
    <>
    
    <main className="flex-grow p-4">
      <h2 className="text-4xl mb-4">Search Recipes</h2>
      <form action="/search" method="GET" className="w-full max-w-md flex">
        <input type="text" name="query" placeholder="Search recipes..." className="flex-grow rounded-l px-4 py-2 border border-gray-300" />
        <button type="submit" className="bg-blue-500 text-white rounded-r px-4 py-2">Search</button>
    </form>
      <div
        id="results"
        className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      ></div>
    </main>
    
    </>
  )
}

export default Resultcontent
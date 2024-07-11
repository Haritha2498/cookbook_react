import React from 'react'
import { Link } from 'react-router-dom'

const Indexheader = () => {
  return (
    <>
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl">Recipe Sharing</h1>
        <div className="flex space-x-2">
            <Link to="/signup" className="bg-white text-blue-500 rounded px-4 py-1">Signup</Link>
            <Link to="/login" className="bg-white text-blue-500 rounded px-4 py-1">Login</Link>
        </div>
    </header>
    
    </>
  )
}

export default Indexheader
import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

//   const navigate=useNavigate();


//   const logout=async (userDetails)=>{
        
//     const res=await fetch('http://localhost:3000/logout')
    
  
// if (res.ok) {
 
// return navigate('/')

// } 

// }

  return (
    <>
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <nav className="flex space-x-4">
        <a href="/home" className="text-white text-lg">Home</a>
        <a href="/favorite" className="text-white text-lg">Favourites</a>
      </nav>
      {/* <form onSubmit={logout}>
        <button type="submit" className="bg-white text-blue-500 rounded px-4 py-1">
          Logout
        </button>
      </form> */}

      <Link to='/'> <button className="bg-white text-blue-500 rounded px-4 py-1">Logout</button> </Link>
    </header>
    
    </>
  )
}

export default Navbar
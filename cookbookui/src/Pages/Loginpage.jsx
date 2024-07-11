import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Loginpage = () => {

    const [username,setUsername]=useState('');
    
    const [password,setPassword]=useState('');

    const navigate=useNavigate();

    const signupSubmit=async (userDetails)=>{
        
        const res=await fetch('http://localhost:3000/login',{
            method:"POST",
            headers:{"Content-Type":"application/json",},
            body: JSON.stringify(userDetails)
        })
        console.log(userDetails)
        console.log(res);
    if (res.ok) {
     
    return navigate('/home')

    } 
    else
     {
    
    return navigate("/signup");
    }
    }


    const submitForm = (e) => {
        e.preventDefault();
        
        const userDetails = {
          username,
          password

        };
        signupSubmit(userDetails);
    }
  return (
    <>
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">

            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
                    <form onSubmit={submitForm}>
                        <div className="mb-4">
                            <label  className="block text-gray-700 mb-2">Username</label>
                            <input type="text"
                            id="username" 
                            name="username"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                            required />
                        </div>
                        <div className="mb-6">
                            <label  className="block text-gray-700 mb-2">Password</label>
                        <input type="password" 
                        id="password"
                        name="password" 
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        required />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Login</button>
                    </form>
                <p className="mt-6 text-center text-gray-600">Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a></p>
            </div>

    </div>
    
    </>
  )
}

export default Loginpage
import React from 'react'
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from "react-router-dom"

import Indexpage from  './Pages/Indexpage'
import Signuppage from './Pages/Signuppage'
import Loginpage from './Pages/Loginpage'
import Homepage from './Pages/Homepage'
import Resultpage  from './Pages/Resultpage'
import Recipepage from './Pages/Recipepage'
import Favoritespage from './Pages/Favoritespage'

function App(){


  const router=createBrowserRouter(
    createRoutesFromElements(

<>
      <Route path="/" element={<Indexpage />}/>
      <Route path='/signup' element={<Signuppage />}/>
      <Route path='/login' element={<Loginpage />}/>
      <Route path='/home' element={<Homepage/>}/>
      <Route path='/result/:core' element={<Resultpage />}/>
      <Route path='/recipe/:title' element={<Recipepage />}/>
      <Route path='/favorite' element={<Favoritespage />}/>

</>
    )
  )


  return (
    <>
    
    <RouterProvider router={router} />
    </>
  )
}

export default App
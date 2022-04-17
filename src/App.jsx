import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { Flats } from './components/flat'
import { Homepage } from './components/homepage'
import { Login } from './components/login/login'
import { Register } from './components/login/register'
import { Residents } from './components/resident'
import './App.css'
import { FlatDetails } from './components/flatdetails'

function App() {
  const user = useSelector((state) => state.AuthReducer.loginUser)
  console.log("user",user)
  return (
    <div>
      
      <Routes>

         <Route path='/' element={ user ? <Homepage /> : <Login /> } />
         <Route path='/login' element={ <Login /> } />
         <Route path='/register' element={ <Register /> } />
         <Route path="/flat/:id" element={<FlatDetails />} />
         <Route path='/resident' element={ <Residents /> } />
         
      </Routes>
      
    </div>
  )
}

export default App

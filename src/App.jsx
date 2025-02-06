import { useState } from 'react'
import './App.css'
import CartPage from './Component/CartPage/CartPage'
import Login from './Component/Login/Login'
import Navbar from './Component/Navbar/Navbar'
import ProductDetailsPage from './Component/ProductDetailsPage/ProductDetailsPage'
import ProductPage from './Component/ProductPage/ProductPage'
import { Routes,Route } from 'react-router-dom'
import PrivateRoute from './Component/PrivateRoute/PrivateRoute'
import PageNotFound from './Component/PageNotFound/PageNotFound'

function App() {
  

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<ProductPage/>}/>
      <Route path='/product/:id' element={<ProductDetailsPage/>}/>
      <Route path='/cart' element={<PrivateRoute><CartPage/></PrivateRoute>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='*' element={<PageNotFound/>}/>
     </Routes>
    </>
  )
}

export default App

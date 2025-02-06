import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
const items = useSelector((state)=>state.cart.items)
const navigate= useNavigate()

const totalItems = items.reduce((acc,item)=>acc+item.quantity,0)

const token = localStorage.getItem('token')

const handleLogout=()=>{
  localStorage.removeItem('token')
  navigate('/')
}

  return (
    <div className="bg-gray-800 p-4">
     <nav className="max-w-7xl mx-auto flex items-center justify-between flex-wrap">
     <Link to="/" className='flex items-center justify-center'>
     <img src="https://www.reshot.com/preview-assets/icons/ZSYWV5E7NQ/online-shopping-ZSYWV5E7NQ.svg" alt="logo" className='w-7'/>
     <span className="text-2xl text-white hover:text-blue-500 font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform cursor-pointer">Shopper's Shop </span>
     </Link>
        <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-white hover:text-blue-500">Products</Link>
            </li>
            <li>
            <Link to="/cart" className="text-white hover:text-blue-500 font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
    Cart <span className="bg-blue-500 text-white rounded-full px-2 py-1 text-sm">{totalItems}</span>
  </Link>
            </li>
            {!token ? ( <li>
              <Link to="/login" className="text-white hover:text-blue-500">Login</Link>
            </li>) : (<li>
              <Link className="text-white hover:text-blue-500" onClick={handleLogout}>Log out</Link>
            </li>)}
           
            
        </ul>
       
     </nav>
    </div>
  )
}

export default Navbar

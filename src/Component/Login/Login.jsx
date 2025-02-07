import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userInfo } from '../../Redux/Action'

const Login = () => {
    const userRef = useRef(null)
    const passRef = useRef(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit=async(e)=>{
      try {
        e.preventDefault()

        const user = {
            username : userRef.current.value,
            password : passRef.current.value
        }

        setIsLoading(true)
        const response = await axios.post('https://reqres.in/api/login',user)
        
 
        if(response.status===200){
            localStorage.setItem("token",response.data.token)
            let username = JSON.parse(response.config.data).username
             dispatch(userInfo(username))
            alert("Login Successfully, navigate to home page")
            navigate("/")
        }
      } catch (error) {
        setError("Error in SignIn, please try again")
      }
    }

    if(isLoading){
        return <h1 className="text-center text-xl">Loading...</h1>
    }

    if(error){
        return <h1 className="text-center text-xl text-red-500">{error}</h1>
    }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                <input 
                    type="text" 
                    placeholder="Enter your email..." 
                    ref={userRef} 
                    required
                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input 
                    type="password" 
                    placeholder="Enter your password" 
                    ref={passRef} 
                    required
                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex justify-center">
                <button 
                    type="submit" 
                    className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Login
                </button>
            </div>
        </form>
    </div>
</div>
  )
}

export default Login

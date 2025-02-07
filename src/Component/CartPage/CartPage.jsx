import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, updateQuantity } from '../../Redux/Action'
import axios from 'axios'
import { Navigate } from 'react-router-dom'


const CartPage = () => {
    const cart = useSelector((state)=>state.cart.items)
    const username = useSelector((state)=>state.cart.username)
    const dispatch = useDispatch()
     const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const handleRemoveItem=(product)=>{
        dispatch(removeFromCart(product))
    }

    const handleQuantityChange=(item,quantity)=>{
        if(quantity<=0) return
        dispatch(updateQuantity(item.id,quantity))
    }

    const totalPrice = cart?.reduce((acc,item)=>acc+item.price*item.quantity,0);


    const handlePurchase=async()=>{
       try {
        const token = localStorage.getItem('token')
        if(!token) return <Navigate to="/login"/>
       const checkoutData = {
        username : username,
            items : cart,
        totalPrice : totalPrice
        }
        setIsLoading(true)
        const response = await axios.post('https://webhook.site/5716ed84-5195-45c2-af03-94c54afbc588',checkoutData)

        if(response.status===200){
            alert('Purchase Successful!');
        }
       } catch (error) {
            setError("Error in Purchasing")
       }
    }

    if(isLoading){
        return <h1 className="text-center text-xl">Loading...</h1>
    }

    if(error){
        return <h1 className="text-center text-xl text-red-500">{error}</h1>
    }

  return (
    <div className="max-w-screen-lg mx-auto p-4">
    <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

    {cart?.length === 0 ? (
      <h1 className="text-xl">Nothing in the Cart</h1>
    ) : (
      cart?.map((item, i) => {
        return (
          <div key={i} className="flex items-center justify-between bg-gray-100 p-4 rounded-lg mb-4 shadow-md">
            <div className="flex items-center">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md mr-4" />
              <div>
                <p className="text-xl font-semibold">{item.title}</p>
                <p className="text-lg">Rs. {item.price}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => handleRemoveItem(item)}
                className="bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600 focus:outline-none"
              >
                Remove
              </button>
              <div className="flex items-center space-x-2">
                <button
                  onClick={()=>handleQuantityChange(item, item.quantity - 1)}
                  className="bg-gray-300 text-black py-1 px-2 rounded-lg hover:bg-gray-400 focus:outline-none"
                >
                  -
                </button>
                <span className="text-lg">{item.quantity}</span>
                <button
                  onClick={()=>handleQuantityChange(item, item.quantity + 1)}
                  className="bg-gray-300 text-black py-1 px-2 rounded-lg hover:bg-gray-400 focus:outline-none"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )
      })
    )}

    {cart?.length > 0 && (
      <div className="mt-6 flex justify-between items-center text-xl font-semibold">
        <h3>Total: Rs. {totalPrice}</h3>
        <button onClick={handlePurchase} className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 focus:outline-none">
          Proceed to Checkout
        </button>
      </div>
    )}
  </div>
  )
}

export default CartPage

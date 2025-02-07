import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../../Redux/Action'


const ProductPage = () => {
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error,setError] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const fetchProductData=async()=>{
      try {
        setIsLoading(true)
        const res = await axios.get('https://fakestoreapi.com/products')

        if(res.status===200){
            setIsLoading(false)
            setProduct(res.data)
        }
      } catch (error) {
        setError("Error in fetching product data")
      }
    }

    const handleProductDetails=(id)=>{
        navigate(`/product/${id}`)
    }

    const handleAddToCart=(product)=>{
        dispatch(addToCart({...product,quantity : 1}))
    }

    useEffect(()=>{
        fetchProductData()
    },[],[dispatch],[isLoading])

    if(isLoading){
        return <h1 className="text-center text-xl">Loading...</h1>
    }

    if(error){
        return <h1 className="text-center text-xl text-red-500">{error}</h1>
    }
  return (
   <div className="p-10">
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {product.map((p,i)=>{
        return(
            <div className="flex flex-col items-center justify-between bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300" key={i}>
              
                <div className="flex justify-center w-full mb-4">
                    <img src={p.image} alt={`Image-${p.title}`} className="w-48 h-48 object-cover rounded-lg" />
                </div>
                <div className="flex flex-col items-center text-center space-y-2">
                <p className="text-xl font-semibold"><b>Name :</b> {p.title}</p>
                <p className="text-lg text-gray-500"><b>Price :</b> Rs. {p.price}</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full" onClick={() =>handleAddToCart(p)}>Add to Cart</button>
                <button  className="text-blue-500 font-semibold hover:text-blue-600 transition-colors" onClick={()=>handleProductDetails(p.id)}>View More</button>
                </div>
           
            </div>
        )
      })}
    </div>
   </div>
  )
}

export default ProductPage

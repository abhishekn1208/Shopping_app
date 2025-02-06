import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addToCart } from '../../Redux/Action'

const ProductDetailsPage = () => {
const {id} = useParams()
const [detail, setDetail] = useState([])
const [error, setError] = useState("")
const [loading, setLoading] = useState(false)
const navigate = useNavigate()
const dispatch = useDispatch()

    const fetchDetailedProduct=async()=>{
       try {
        setLoading(true)
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
       
        if(response.status===200){
            setLoading(false)
            setDetail(response.data)
        }
       } catch (error) {
        setError("Error in fetching product data")
       }
    }

    useEffect(()=>{
        fetchDetailedProduct()
    },[id])

    const handleAddToCart=(product)=>{
        dispatch(addToCart({...product,quantity : 1}))
    }

    if(loading){
        return <h1>Loading...</h1>
    }

    if(error){
        return <h1>{error}</h1>
    }
  
  return (
    
          <div className='max-w-full w-full p-10 shadow-xl'>
            <button
        onClick={() => navigate("/")}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Back to Product Page
      </button>
              <div className="flex flex-col-reverse md:flex-row md:gap-10 gap-5 mt-5">
              <div className="flex-1 p-2">
              <h1 className='text-2xl font-bold mb-4'><>Name :</> {detail.title}</h1>
              <p className='text-xl mb-2'><b>Price :</b> Rs. {detail.price}</p>
              <p className='text-xl mb-2'><b>Description :</b> {detail.description}</p>
              <p className='text-xl mb-2'><b>Category :</b> {detail.category}</p>
              <p className='text-xl mb-2'><b>Rating :</b> {detail?.rating?.rate}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300" onClick={()=>handleAddToCart(detail)}>
  Add to Cart
</button>
              </div>
              <div className='flex justify-center flex-1'>
                  <img src={detail.image} alt={`Image-${detail.title}`} className="w-full max-w-[300px] md:w-60 rounded-xl" />
              </div>
              </div>
          </div>
           
    
  )
}

export default ProductDetailsPage

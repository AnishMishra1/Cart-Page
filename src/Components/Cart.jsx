import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { decreaseItem, getCartTotal, increaseItem, removeItem } from '../Redux/Slice';

const Cart = () => {

   const {cart, totalQuantity, totalPrice} = useSelector((state) => state?.allCart)

   const dispatch = useDispatch();

   useEffect(() => {
    dispatch(getCartTotal())
   },[cart])

  return (
    <div>
     
    
   
      
      <div className="h-screen  bg-gray-100 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items-{cart.length}</h1>
        
          <div className="mx-auto max-w-5xl justify-center px-6 flex md:space-x-6 xl:px-0">
          
             
            <div className="rounded-lg md:w-2/3">
            { cart && cart.map((data) => (
              <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <img src={data.img} alt={data.img} className="w-full rounded-lg sm:w-40" />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">{data.title}</h2>
                  <button 
                   className='font-bold text-2xl'><MdDelete /></button>
                  
                </div>
                  <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                    <button onClick={()=> dispatch(increaseItem(data.id))}>
                     <span 
                    className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                     </button>
                     <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={data.quantity} min="1" />
                     <button onClick={()=> dispatch(decreaseItem(data.id))}>
                     <span 
                    className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                     </button>
                   
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm">{data.price}</p>
                    
                  </div>
                </div>
              </div>
            </div>))}
            
          </div>
          
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Total-Amount</p>
              <p className="text-gray-700">{totalPrice}</p>
              <p className="text-gray-700">Total-Quantity</p>
              <p className="text-gray-700">{totalQuantity}</p>
            </div>
            
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total-Amount {" ",totalPrice}</p>
              
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
          </div>
        </div>
        
     

      </div>
      
    
    </div>
  )
}

export default Cart
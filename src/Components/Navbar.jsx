import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getCartTotal } from '../Redux/Slice'

const Navbar = () => {

  const {cart,totalQuantity} = useSelector((state) =>  state?.allCart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartTotal())
  },[cart])

  console.log(totalQuantity)

    
  return (
    <div className='flex flex-row justify-between items-center text-white h-[20%] bg-slate-700'>
        <div className='font-bold py-2 px-2  text-2xl'>Home</div>
        <Link to='/'>
        <div 
        className='font-bold py-2 px-2  text-2xl cursor-pointer'>All Product</div>
        </Link>
       
        <Link to='/cart'>
        <div>
            <button className=' border rounded-md bg-green-500 hover:bg-green-300 transition ease-in-out duration-100 cursor-pointer py-2 px-2 font-bold text-1xl'>Cart({totalQuantity})</button>
        </div>
        </Link>
    </div>
  )
}

export default Navbar
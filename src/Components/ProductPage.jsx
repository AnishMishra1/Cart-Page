import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'
import Card from '../Helper/Card'
import Footer from './Footer'




const ProductPage = () => {

    const products = useSelector((state) => state.allCart.items)
    

    useEffect(() =>{
      console.log(products)
    },[])
  return (
    <div>
      
        
        <div className='bg-slate-800 h-[90vh] flex flex-wrap gap-20 w-full text-white items-center justify-center '>
           
            { products && products.map((e) => (
               <Card 
               key={e.id}

               title={e.title}
               item = {e}
               
               img= {e.img}
               price={e.price}
               />

            ))}

            
           
          
        </div>
        <Footer/>
    </div>
  )
}

export default ProductPage;
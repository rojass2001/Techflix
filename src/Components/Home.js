import React, { useEffect, useState } from 'react'
import './Home.css'
import { getallproducts } from './Api';
function Home() {
    const[artics,setartic]=useState([])
  
    useEffect(()=>{
  const fetchproducts=async()=>{
    const data=await getallproducts();
   setartic(data)
   
    
  }
    
    
  fetchproducts();
  
    },);
   
   
   console.log(artics)
   
   
  return (
    <div className='home '>
{
    artics.map((obj)=>(
      <div className='products'>
      <img className='img' src={obj.image}alt=""/>
      <h4 className='title'>{obj.title}</h4>
      <div className='prices'>
      <p className='price'>
      {obj.price}
      </p>
      
      </div>
     <p className='pri'> price:{obj.price}</p>
     <button>buynow</button>
      </div>

))}
    </div>
  )
}

export default Home

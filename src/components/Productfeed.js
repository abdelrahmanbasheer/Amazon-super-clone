import { useQuery } from '@tanstack/react-query'
import Link from 'next/link';
import React from 'react'
import ReactLoading from 'react-loading';
import { useSelector } from 'react-redux';
import Product from './Product';
const Productfeed = () => {
  const fill=useSelector((state)=>state.filter.filter)
    const {isLoading,error,data}=useQuery({
        queryKey:["products"],
        queryFn:()=>
        fetch("https://fakestoreapi.com/products").then(
            (res)=>res.json(),
        )
    })
    if(isLoading) return(
        <ReactLoading type="spin" color="#0D203A" className='items-center'></ReactLoading>
    )
 console.log(fill)
  return (
    <div id='feed' className='grid grid-flow-row-dense md:grid-cols-3 lg:grid-cols-4 md:-mt-52'>
    
  
    
    {data.slice(0,4).map((item)=>
    fill!="" ? (
    (item.category===fill) ?(
    
         <Product  item={item}></Product>
        
    )
         :
         ("")
    )
    :
  
    <Product  item={item}></Product>
   
    )}
 
<img className= {`md:col-span-full ${fill!=""?"hidden":"inline-block"}`} loading="lazy" src="https://links.papareact.com/dyz" alt="" />
{data.slice(4,12).map((item)=>
    fill!="" ? (
    (item.category===fill) ?(
    
      <Product  item={item}></Product>
      
    )
         :
         ("")
    )
    :

   
    <Product  item={item}></Product>
   
    )}
    <img className= {`md:col-span-full ${fill!=""?"hidden":"inline-block"}`}  loading="lazy"  src="https://links.papareact.com/dyz" alt="" />
    {data.slice(12,data.length).map((item)=>
    fill!="" ? (
    (item.category===fill) ?(
      
      <Product  item={item}></Product>
     
    )
         :
         ("")
    )
    :


    <Product  item={item}></Product>
  
    )}
    </div>
  )
}

export default Productfeed
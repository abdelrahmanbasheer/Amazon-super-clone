import React from 'react'
import { StarIcon } from '@heroicons/react/solid'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../slices/basketSlice'
import Link from 'next/link'
const Product = ({item}) => {
  const  {id,title,price,description,category,image}=item
  const dispatch=useDispatch()
  const addItemToBasket=()=>{
dispatch(addToBasket(item))
  }
  
  return (
    <div className='relative flex flex-col m-5  bg-white z-30 p-10'>
        <p className=' absolute top-2 right-2 text-xs italic text-gray-400 '>{category}</p>
        <Link href={`/products/${item.id}`} className="cursor-pointer">
        <img src={image}  className="h-60"  width={500} objectFit={"contain"}></img>
        <h4 className='my-3'>{title}</h4>
        </Link>
        <div className='flex'>
        <StarIcon className='h-5 text-yellow-400'></StarIcon>
        <StarIcon className='h-5 text-yellow-400'></StarIcon>
        <StarIcon className='h-5 text-yellow-400'></StarIcon>
        <StarIcon className='h-5 text-yellow-400'></StarIcon>
        <StarIcon className='h-5 text-gray-400'></StarIcon>
        </div>
        <p className='text-xs my-2 line-clamp-2'>{description}</p>
        <h4 className='mb-5 '>{price}$</h4>
        <button onClick={()=>addItemToBasket()} className='mt-auto button'>Add to basket</button>
    </div>
  )
}

export default Product
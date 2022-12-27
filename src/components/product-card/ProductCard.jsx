import React from 'react'

const ProductCard = ({product}) => {
    const {name,price,imageUrl} = product
  return (
    <div className='relative bg-slate-500 w-80'>
        <img src={imageUrl} alt={`${name}`} className='w-full'/>
        <div>
            <span>{name}</span>
            <span>{price}</span>
        </div>
        <button  className="absolute px-3 py-2 mt-3 ml-3 text-white transition-all duration-300 bg-black rounded-md hover:scale-105">Add to cart</button>
    </div>
  )
}

export default ProductCard
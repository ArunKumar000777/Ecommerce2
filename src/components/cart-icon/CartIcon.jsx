import React, { useContext } from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/CartContexts';
const CartIcon = () => {
    const {setIsCartOpen,isCartOpen} = useContext(CartContext);
  return (
    <div className='relative flex items-center justify-center w-11 h-11'>
        <ShoppingIcon className='h-8 w-7'/>
        <span onClick={()=>setIsCartOpen(!isCartOpen)} className='absolute font-medium cursor-pointer top-4'>0</span>
    </div>
  )
}

export default CartIcon
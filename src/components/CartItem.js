import React from 'react';
import { Link } from 'react-router-dom';
import {IoMdAdd, IoMdClose, IoMdRemove} from 'react-icons/io';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({item}) => {
  const {removecartItem , inceasedItem , decreasedItem} = React.useContext(CartContext);
  const {id,image,title,price,amount} = item;
  return <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
    <div className='w-full min-h-[150px] flex items-center gap-x-3'>
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} className='max-w-[80px]' />
      </Link >
      <div className='w-full flex  flex-col'>
        <div className='flex justify-between mb-2'>
          <Link to={`/product/${id}`}>
            <h3 className='text-sm font-medium  uppercase max-w-[240px] text-primary hover:underline'>{title}</h3>
          </Link>
          {/* <div className='text-xs text-gray-500'>${price}</div> */}
          <div className='text-xl cursor-pointer' onClick={()=> removecartItem(id)}>
            <IoMdClose className='text-gray-500 hover:text-red-500 transition'/>
          </div>
        </div>
        <div className= 'flex gap-x-2 h-[36px] text-sm'>
          <div className='flex flex-1 max-w-[100px] items-center h-full border
           text-primary font-medium'>
            <div onClick={()=>decreasedItem(id)} className='flex-1 flex justify-center items-center cursor-pointer bg-red-500 h-full'>
            <IoMdRemove/>
            </div>
            <div className='h-full flex justify-center items-center px-2'>
              {amount}
            </div>
            <div onClick={()=>inceasedItem(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer'>
              <IoMdAdd/>
            </div>
          </div>
          <div className='flex-1 flex justify-around items-center'>
            {`$${price}`}
          </div>
          <div className='flex flex-1 justify-end items-center text-primary font-medium'>
            {`$${price * amount}`}
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default CartItem;

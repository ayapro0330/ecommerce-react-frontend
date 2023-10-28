import React,{createContext,useState,useEffect,useContext} from 'react';

export const CartContext = createContext();

const CartProvider = ({children}) => {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, id) => {
    const newItem = {...product , amount:1 };
    const cartItem = cartItems.find((item) => item.id === id);
    if(cartItem){
      const newCart = [...cartItem].map((item) => {
        if(item.id === id){
          return {...item, amount:cartItem.amount + 1}
        }
        return item;
      });
      setCartItems(newCart)
    }else{
      setCartItems([...cartItems, newItem]);
    }
  };

  const removecartItem = (id) => {
    const newCart = [...cartItems].filter((item) => item.id !== id);
    setCartItems(newCart);
  };
  
  const clearCart = () => {
    setCartItems([]);

  }
  const inceasedItem = (id) => {
    const newCart = [...cartItems].map((item) => {
      if(item.id === id){
        return {...item, amount:item.amount + 1}
      }
      return item;
    });
    setCartItems(newCart);
  };
  const decreasedItem = (id) => {
    const newCart = [...cartItems].map((item) => {
      if(item.id === id){
        return {...item, amount:item.amount - 1}
      }
      return item;
    });
    setCartItems(newCart);
    if(newCart.amount === 0){
      removecartItem(id);
    }
  };

  return <CartContext.Provider value={{cartItems,addToCart , removecartItem , clearCart , inceasedItem ,decreasedItem}}>{children}</CartContext.Provider>;
};

export default CartProvider;

import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const itemExists = cartItems.find((obj) => obj.item.title === item.title);
    if (itemExists) return;
    setCartItems([...cartItems, { item: item, qty: 1 }]);
  };

  const removeQty = (index) => {
    const temp = cartItems;
    let obj = cartItems[index];
    if (obj.qty === 1) {
      temp.splice(index, 1);
    } else {
      obj.qty--;
      temp[index] = obj;
      setCartItems([...temp]);
    }
  };

  const addQty = (index) => {
    const temp = cartItems;
    temp[index].qty++;
    setCartItems([...temp]);
  };

  const calcPrice = () => {
    let sum = 0;
    for(const obj of cartItems){
      sum+=obj.item.price*obj.qty;
    }
    return sum;
  }

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, addToCart, addQty, calcPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export default useCartContext;

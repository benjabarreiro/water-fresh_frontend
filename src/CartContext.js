import { createContext, useState } from "react";

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    if (isInCart(item._id)) {
      const arr = [...cart];
      arr.forEach((x) => {
        if (x._id === item._id) {
          return (x.quantity = x.quantity + 1);
        }
      });
      setCart(arr);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const reduceQuantity = (item) => {
    if (item.quantity > 1) {
      const arr = [...cart];
      arr.forEach((x) => {
        if (x._id === item._id) {
          return (x.quantity = x.quantity - 1);
        }
      });
      setCart(arr);
    } else {
      removeFromCart(item._id)
    }
  }

  const removeFromCart = (id) => {
    const arr = [...cart];
    const remove = arr.filter((x) => id !== x._id);
    setCart(remove);
  };

  const isInCart = (id) => cart.find((x) => x._id === id);

  const cartQty = cart.reduce((acc, item) => (acc += item.quantity), 0);

  return (
    <CartContext.Provider value={{ addToCart, removeFromCart, reduceQuantity, cartQty, cart }}>
      {children}
    </CartContext.Provider>
  );
}

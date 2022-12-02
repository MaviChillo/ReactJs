import React from 'react'
import { createContext, useContext } from 'react';
import {useState} from 'react'
import FinalizarCompra from '../components/FinalizarCompra';

export const CartContext = createContext();
export const UseCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {

const [cart, setCart] = useState([]);


    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            const carritoActualizado = cart.map((prod) => {
                if (prod.id === item.id) {
                    return { ...prod, quantity: prod.quantity + cantidad }
                } else {
                    return prod
                }
            })
            setCart(carritoActualizado)
        } else {
            const purchase = { ...item, quantity: cantidad }
            setCart([...cart, purchase]);
        }
    }
    const clear = () => {
        cart.map(product => <FinalizarCompra key={product.id} product={product} />)
        setCart([])
    }
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const removeItem = (id) => {
        const deleteItem = cart.filter(prod => prod.id !== id)
        setCart([...deleteItem]);
    }


    const totalPrice = () => {
        let initialValue = 0
        return cart.reduce((prev, act) => prev + act.quantity * act.precio, initialValue);
    };


  return (
    <CartContext.Provider value={{
      cart, clear, isInCart, removeItem, addToCart, totalPrice
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider

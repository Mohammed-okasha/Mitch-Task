import React, { useReducer, useCallback, useContext } from "react";
import cartReducer from "../reducers/cart-reducer";

const initialCartState = {
  items: [],
};

const CartContext = React.createContext({
  ...initialCartState,
  totalItems: 0,
  totalAmount: 0,
  addToCart: () => {},
});

const CartProvider = ({ children }) => {
  const [{ items }, dispatch] = useReducer(cartReducer, initialCartState);

  // Calculate Cart Values
  const { totalItems, totalAmount } = items.reduce(
    (values, item) => {
      const { price, quantity } = item;

      values.totalItems += quantity;
      values.totalAmount += price * quantity;

      return values;
    },
    { totalItems: 0, totalAmount: 0 }
  );

  const addToCart = useCallback((item) => {
    dispatch({ type: "ADD_TO_CART", item });
  }, []);

  const cartCtx = {
    items,
    totalItems,
    totalAmount: parseFloat(totalAmount).toFixed(2),
    addToCart,
  };

  return (
    <CartContext.Provider value={cartCtx}>{children}</CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart hook is used outside of the CartProvider");
  }

  return context;
};

export { CartProvider, useCart };

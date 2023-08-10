import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";
const CartContext = createContext();
const getLocalCartData = () => {
  let localCartData = localStorage.getItem("happyCart");
  const parsedData = JSON.parse(localCartData);
  if (!Array.isArray(parsedData)) return [];
  return parsedData;
};

const initialState = {
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };
  const setDecrease = (id) => {
    dispatch({ type: "DECREMENT_AMOUNT", payload: id });
  };
  const setIncrease = (id) => {
    dispatch({ type: "INCREMENT_AMOUNT", payload: id });
  };
  //to add the daata in local storage
  useEffect(() => {
    dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
    dispatch({ type: "SUBTOTAL" });
    localStorage.setItem("happyCart", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };

const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    let existingProduct = state.cart.find(
      (curElem) => curElem.id === id + color
    );

    if (existingProduct) {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === id + color) {
          let newAmount = curElem.amount + amount;
          if (newAmount >= curElem.max) {
            newAmount = curElem.max;
            alert(`no more items can be added`);
          }
          return { ...curElem, amount: newAmount };
        } else {
          return curElem;
        }
      });
      return { ...state, cart: updatedProduct };
    } else {
      let cartProduct;
      cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };

      return { ...state, cart: [...state.cart, cartProduct] };
    }
  }

  // tacle increement , decrement in cart page

  if (action.type === "DECREMENT_AMOUNT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decAmount = curElem.amount - 1;
        if (decAmount <= 1) {
          decAmount = 1;
        }
        return { ...curElem, amount: decAmount };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }
  if (action.type === "INCREMENT_AMOUNT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmount = curElem.amount + 1;
        if (incAmount >= curElem.max) {
          incAmount = curElem.max;
        }
        return { ...curElem, amount: incAmount };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }
  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === "CART_ITEM_PRICE_TOTAL") {
    let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
      let { amount } = curElem;

      initialVal = initialVal + amount;
      return initialVal;
    }, 0);

    return {
      ...state,
      total_item: updatedItemVal,
    };
  }
  if ((action.type = "SUBTOTAL")) {
    let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
      let { amount, price } = curElem;
      initialVal = initialVal + amount * price;
      return initialVal;
    }, 0);
    return {
      ...state,
      total_price: updatedItemVal,
    };
  }
  return state;
};

export default cartReducer;

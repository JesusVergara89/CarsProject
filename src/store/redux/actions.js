


// En src/redux/actions.js
export const setCart = (cartItems) => {
    return {
      type: "SET_CART",
      payload: cartItems,
    };
  };
  
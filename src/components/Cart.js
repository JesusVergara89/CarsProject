import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart, clearCart } from "../store/slices/cartSlice";
import { selectCartItems } from "../store/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const [quantities, setQuantities] = useState({});

  // Cargar carrito desde localStorage al montar el componente
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCart) {
      // Si hay datos en localStorage, los cargamos en el Redux store
      dispatch({ type: "cart/setCartItems", payload: storedCart });
    }

    const initialQuantities = cartItems.reduce((acc, item) => {
      acc[item.id] = item.quantityInCart;
      return acc;
    }, {});
    setQuantities(initialQuantities);
  }, [cartItems, dispatch]);

  // Guardar carrito en localStorage cada vez que cartItems cambie
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const handleRemoveFromCart = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    localStorage.removeItem("cartItems"); // Limpiar el localStorage cuando se vacíe el carrito
  };

  const handleIncreaseQuantity = (id, stock) => {
    setQuantities((prevQuantities) => {
      const newQuantity = prevQuantities[id] + 1;
      if (newQuantity <= stock) {
        return { ...prevQuantities, [id]: newQuantity };
      } else {
        alert(`No hay más unidades disponibles en stock para ${id}`);
        return prevQuantities;
      }
    });
  };

  const handleDecreaseQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(prevQuantities[id] - 1, 1),
    }));
  };

  return (
    <div className="cart p-4 bg-white rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-4">
                <span>
                  {item.name} - ${item.price} x {quantities[item.id]}
                </span>
                <span className="text-sm text-gray-500">
                  Stock: {item.quantity}
                </span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleDecreaseQuantity(item.id)}
                    className="bg-gray-200 p-1 rounded-md"
                  >
                    -
                  </button>
                  <span>{quantities[item.id]}</span>
                  <button
                    onClick={() => handleIncreaseQuantity(item.id, item.quantity)}
                    className="bg-gray-200 p-1 rounded-md"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="bg-red-500 text-white p-1 rounded-md"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="total mt-4 flex justify-between">
            <p className="font-bold">
              Total: $
              {cartItems.reduce(
                (total, item) => total + item.price * quantities[item.id],
                0
              )}
            </p>
            <button
              onClick={handleClearCart}
              className="bg-blue-500 text-white p-2 rounded-md"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

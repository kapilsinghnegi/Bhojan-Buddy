import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import { CDN_URL, EMPTY_CART_URL } from "../utils/constants";

const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const cartItems = useSelector(store => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const total = cartItems
      .reduce((sum, item) => {
        return (
          sum + (item.card.info.price || item.card.info.defaultPrice) / 100
        );
      }, 0)
      .toFixed(2);
    setTotalAmount(total);
  }, [cartItems]);

  const handleClear = () => {
    dispatch(clearCart());
  };
  const handleRemove = itemId => {
    dispatch(removeItem(itemId));
  };

  return (
    <div className="cart m-auto w-3/5 p-5 flex flex-col items-center">
      {cartItems.length === 0 ? (
        <div className="flex flex-col justify-center items-center">
          <img src={EMPTY_CART_URL} className="w-50" />
          <h1 className="text-2xl font-semibold mb-3">Your cart is empty</h1>
          <h4 className="text-center font-semibold">
            Looks like you haven't added anything to the cart. Go ahead and
            explore
          </h4>
        </div>
      ) : (
        <div className="cartItems w-full m-auto p-4">
          <h1 className="text-3xl text-center font-semibold mb-4">Cart</h1>
          <ul className="item-list flex flex-col">
            {cartItems.map(item => (
              <li
                className="first:border-t-2 border-b-2 border-gray-200 py-5 flex items-center px-4 gap-2"
                key={item?.card?.info?.id}
                data-testid="cartItem"
              >
                <img
                  className="rounded-lg w-14 h-14"
                  src={CDN_URL + item?.card?.info?.imageId}
                />
                <div className="w-3/4 select-none flex items-center justify-between">
                  <p className="font-medium text-xl ml-8 line-clamp-1">
                    {item?.card?.info?.name}
                  </p>
                  <p className="itemPrice font-medium">
                    ₹{" "}
                    {(
                      (item?.card?.info.price ||
                        item?.card?.info.defaultPrice) / 100
                    ).toFixed(2)}
                  </p>
                </div>
                <button
                  className="p-1 w-5 rounded-3xl bg-black hover:bg-red-600 ml-5"
                  onClick={() => handleRemove(item?.card?.info?.id)}
                  data-testid="removeBtn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(255,255,255,1)"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
                  </svg>
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between font-semibold px-28 py-2 border-2 border-gray-300 mt-2 text-xl">
            <span>Total Amount:</span>
            <span data-testid="totalAmount">₹ {totalAmount}</span>
          </div>
        </div>
      )}
      {cartItems.length > 0 && (
        <button
          className="px-2 py-1 border border-black font-semibold rounded-sm bg-transparent hover:bg-red-500 hover:text-white hover:border-white"
          onClick={handleClear}
        >
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default Cart;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "./cartSlice";
import { CDN_URL, EMPTY_CART_URL } from "../../utils/constants";

const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const cartItems = useSelector((store) => store.cart.items);
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
  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <div className="cart mx-auto flex w-full max-w-3xl flex-col items-center p-2 sm:p-5">
      {/* Empty Cart  */}
      {cartItems.length === 0 ? (
        <div className="flex w-full flex-col items-center justify-center">
          <img src={EMPTY_CART_URL} className="mb-4 w-40 sm:w-52" />
          <h1 className="mb-3 text-center text-xl font-semibold sm:text-2xl">
            Your cart is empty
          </h1>
          <h4 className="text-center text-sm font-semibold sm:text-base">
            Looks like you haven't added anything to the cart. Go ahead and
            explore
          </h4>
        </div>
      ) : (
        <div className="cartItems m-auto w-full p-2 sm:p-4">
          <h1 className="mb-4 text-center text-2xl font-semibold sm:text-3xl">
            Cart
          </h1>
          <ul className="item-list flex flex-col gap-2">
            {cartItems.map((item) => (
              <li
                className="flex flex-row items-center gap-2 border-b-2 border-gray-200 px-2 py-3 first:border-t-2 sm:px-4 sm:py-5"
                key={item?.card?.info?.id}
                data-testid="cartItem"
              >
                {/* Item image */}
                <img
                  className="h-14 w-14 rounded-lg sm:h-16 sm:w-16"
                  src={CDN_URL + item?.card?.info?.imageId}
                  alt={item?.card?.info?.name}
                />
                <div className="flex w-full flex-row items-center justify-between select-none sm:w-3/4">
                  {/* Item Name */}
                  <p className="ml-2 line-clamp-1 text-left text-base font-medium sm:text-xl">
                    {item?.card?.info?.name}
                  </p>
                  {/* Item Price */}
                  <p className="itemPrice ml-4 text-sm font-medium sm:text-base">
                    ₹{" "}
                    {(
                      (item?.card?.info.price ||
                        item?.card?.info.defaultPrice) / 100
                    ).toFixed(2)}
                  </p>
                </div>
                {/* Remove Item */}
                <button
                  className="ml-2 w-7 rounded-3xl bg-black p-1 hover:bg-red-700 sm:w-8"
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
          <div className="mt-2 flex flex-row items-center justify-between gap-2 border-2 border-gray-300 px-4 py-2 text-base font-semibold sm:px-28 sm:text-xl">
            <span>Total Amount:</span>
            <span data-testid="totalAmount">₹ {totalAmount}</span>
          </div>
        </div>
      )}
      {cartItems.length > 0 && (
        <button
          className="mt-4 rounded-sm border border-black bg-transparent px-3 py-2 text-sm font-semibold hover:border-white hover:bg-red-700 hover:text-white sm:text-base"
          onClick={handleClear}
        >
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default Cart;

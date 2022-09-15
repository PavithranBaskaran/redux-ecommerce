import React from "react";
import { useSelector } from "react-redux";

function CheckOut() {
  const carts = useSelector((state) => state.cart.carts);
  let sum = 0;
  return (
    <>
      <ul class="list-group">
        <li class="list-group-item bg-secondary text-white" aria-current="true">
          Checkout
        </li>
        {carts.map((cart) => {
          {
            sum += cart.quantity * cart.price;
          }
          return (
            <li className="list-group-item">
              <div className="w-50 ">{cart.product}</div>
              <div className="d-inline">-</div>
              <div>
                {cart.quantity} * {cart.price}
              </div>
              <div className="d-inline">-</div>
              <div>${cart.quantity * cart.price}</div>
            </li>
          );
        })}

        <li class="list-group-item bg-secondary text-white" aria-current="true">
          ${Math.round(sum)}
        </li>
      </ul>
    </>
  );
}

export default CheckOut;

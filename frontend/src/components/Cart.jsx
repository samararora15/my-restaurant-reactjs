import React, { useRef } from "react";
import useCartContext from "../CartContext";
// import Swal from "sweetalert2";

const Cart = () => {
  const { cartItems, removeQty, addQty, calcPrice } = useCartContext();
  // console.log(cartItems);

  const nameRef = useRef(null);
  const addressRef = useRef(null);

  const submitOrder = async () => {
    const res = await fetch('http://localhost:5000/order/add',{

      method: 'POST',
      body: JSON.stringify({
        items : cartItems,
        name : nameRef.current.value,
        address: addressRef.current.value,
        createdAt: new Date()
      }),
      headers:{
        'Content-Type' : 'application/json'
      }
    })
  }

  return (
    <div className="container cart-table">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Item</th>
            <th scope="col">Price</th>
            <th scope="col">Qty</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cart, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{cart.item.title}</td>
              <td>{cart.item.price * cart.qty}</td>
              {/* <td>{calcPrice()}</td> */}
              <td>{cart.qty}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => addQty(index)}
                >
                  Add
                </button>
              </td>
            </tr>
          ))}
          {/* <tr>
            <td>Total</td>
            <td>{calcPrice()}</td>
          </tr> */}
        </tbody>
      </table>
      {/* <input type="text" ref={nameRef} /> */}
      {/* <input type="text" ref={addressRef} /> */}
      {/* <button className="btn btn-warning cart-button" onClick={() => {submitOrder()}}>Confirm Order</button> */}
      <div className='cart-section-order-summary'>
        <form>

          <label className='my-home-label'>Billing Name</label>
          <input className='my-home-input' type="text" placeholder='Enter Billing Name'/>

          <label className='my-home-label'>Billing Address</label>
          <input className='my-home-input' type="text" placeholder='Enter Billing Address'/>

          <label className='my-home-label'>Order Total(₹)</label>
          <input className='my-home-input' type="number" value={calcPrice()}/>

          <button className='my-home-sign-up'>Confirm Order</button>

        </form>
      </div>
    </div>
  );
};

export default Cart;

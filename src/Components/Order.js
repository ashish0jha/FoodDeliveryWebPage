import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { baseUrl } from '../utils/constants';
import { clearCart } from '../utils/CartSlice';
import { useDispatch } from 'react-redux';

const Order = ({ amount, setCartItems }) => {

  const navigate = useNavigate();
  const [orderDone, setOrderDone] = useState(false);
  const [orderMessage, setOrderMessage] = useState("");
  const [themeColor, setThemeColor] = useState("")
  const dispatch = useDispatch();

  const paymentHandler = async () => {
    if (amount === 0) return;
    try {
      const order = await axios.post(baseUrl + "/payment/order", { amount }, { withCredentials: true });
      console.log(order);
      const { keyId, currency, orderId, notes } = order.data;
      const options = {
        key: keyId,
        amount: order.amount,
        currency,
        name: "AKO's FOOD DELIVERY WEBAPP",
        description: "Taste your meal with AKO's Delivery App",
        order_id: orderId,
        prefill: {
          name: notes.fullName,
          email: notes.email,
          contact: '9999999999'
        },
        theme: {
          color: '#27D673'
        },
        handler: verifyPayment
      };

      const rzp = new Razorpay(options);
      rzp.open();
    }
    catch (err) {
      if (err.status) {
        navigate("/login")
      }
      console.error(err?.response?.data?.message || err.message);
    }
  }

  const verifyPayment = async () => {
    try {
      const res = await axios.get(baseUrl + "/payment/verify", { withCredentials: true });

      if (res.data.isPaymentDone) {
        setOrderDone(true);
        setOrderMessage("Your Order is placed SuccessFully");
        setThemeColor("green")
        clearCartHandler();
      } else {
        setOrderMessage("Payment failed");
        setThemeColor("red")
      }
      setTimeout(() => {
        setOrderDone(false)
      }, 3000)
    }
    catch (err) {
      console.log(err.status);
    }
  }
  const clearCartHandler = async () => {
    try {
      const res = await axios.delete(baseUrl + "/cart/clear", { withCredentials: true });
      dispatch(clearCart());
      () => setCartItems([]);
    }
    catch (err) {
      console.error(err.message)
    }
  }
  useEffect(() => {
    verifyPayment()
  }, [])

  return (
    <>
      {orderDone && <div className={`fixed top-25 bg-${themeColor}-500 p-6 text-white z-50 rounded-2xl font-bold text-2xl`}>{orderMessage}</div>}
      <button
        className="border border-[#1B5230] p-2 m-2 md:m-5 bg-[#27D673] text-[#06250F] rounded-lg font-bold cursor-pointer hover:bg-[#c3e3d1]"
        onClick={paymentHandler}>
        Order
      </button>
    </>

  )
}

export default Order
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { baseUrl } from '../utils/constants';
import { clearCart } from '../utils/CartSlice';
import { useDispatch } from 'react-redux';

const Order = ({ amount, setCartItems }) => {

  const navigate = useNavigate();
  const [orderDone, setOrderDone] = useState(false);
  const [orderMessage, setOrderMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const dispatch = useDispatch();
  const orderIdRef = useRef("");

  const paymentHandler = async () => {
    if (amount === 0) return;
    try {
      const order = await axios.post(baseUrl + "/payment/order", { amount }, { withCredentials: true });

      const { keyId, currency, orderId, notes } = order.data;

      orderIdRef.current = orderId;

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
      const res = await axios.post(baseUrl + "/payment/verify",{orderId:orderIdRef.current}, { withCredentials: true });

      if (res.data.isPaymentDone) {
        setOrderMessage("Your Order is placed SuccessFully");
        setIsSuccess(true)
        clearCartHandler();
      } else {
        setOrderMessage("Payment failed");
        setIsSuccess(false)
      }
      setOrderDone(true);
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

  return (
    <>
      {orderDone && <div className={`fixed top-25 p-6 text-white z-50 rounded-2xl font-bold text-2xl ${
          isSuccess ? "bg-green-500" : "bg-red-500"
      }`}>
        {orderMessage}
      </div>}
      <button
        className="border border-[#1B5230] p-2 m-2 md:m-5 bg-[#27D673] text-[#06250F] rounded-lg font-bold cursor-pointer hover:bg-[#c3e3d1]"
        onClick={paymentHandler}>
        Order
      </button>
    </>

  )
}

export default Order
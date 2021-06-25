import React, { useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";

const PaymentForm = (formData) => {
  console.log(formData);
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null);
      console.log(paymentMethod);
      alert("Ticket confirmed, Happy Journey!");
    }
  };

  return (
    <div className="payment-form-section m-5">
      <form onSubmit={handleSubmit}>
        <div className="py-3">
          <label className="h6">Card Number</label>
          <CardNumberElement />
        </div>
        <div className="py-3">
          <label className="h6">Expiration Date</label>
          <CardExpiryElement />
        </div>
        <div className="py-3">
          <label className="h6">CVC</label>
          <CardCvcElement />
        </div>
        <div className="py-1">
          {paymentError && <p className="text-danger">{paymentError}</p>}
          {paymentSuccess && (
            <p className="text-success">Your Payment Completed Successfully</p>
          )}
        </div>

        <div className="text-start py-4">
          <button className="btn btn-primary" type="submit" disabled={!stripe}>
            Pay
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;

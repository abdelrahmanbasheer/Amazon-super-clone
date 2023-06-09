import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";
const stripePromise = loadStripe(process.env.stripe_public_key);
const Checkout = () => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  async function createCheckoutSession() {
    const stripe = await stripePromise;
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: items,
      email: "7amada@gmail.com",
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
  }
  return (
    <div className="bg-gray-100">
      <Header></Header>
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left */}

        <div className="flex-grow m-5 shadow-sm">
          <Image
            src={"https://links.papareact.com/ikj"}
            width={1020}
            height={250}
            className="object-contain mx-auto"
          ></Image>
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4 capitalize">
              {items?.length === 0
                ? "your amazon basket is empty"
                : "shopping basket"}
            </h1>
            {items?.map((item, index) => (
              <CheckoutProduct key={item.id} item={item}></CheckoutProduct>
            ))}
          </div>
        </div>

        <div className="flex flex-col bg-white p-10 shadow-md">
          {items?.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length}) :{" "}
                <span className="font-bold">{total}$</span>
              </h2>
              <button
                className="button "
                role="link"
                onClick={() => createCheckoutSession()}
              >
                Proceed to Checkout
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;

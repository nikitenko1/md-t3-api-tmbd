import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { CartItem } from "../../../lib/zustand";

const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`, {
  apiVersion: "2022-11-15",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    console.log(req);
    try {
      // Customize Checkout
      // https://stripe.com/docs/api/checkout/sessions/create
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        cancel_url: `${req.headers.origin}`,
        success_url: `${req.headers.origin}/payment/success?&session_id={CHECKOUT_SESSION_ID}`,
        shipping_address_collection: {
          allowed_countries: ["US", "UA"],
        },

        allow_promotion_codes: true,
        line_items: req.body.map((item: CartItem) => {
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item?.name,
                images: [item?.image],
              },

              unit_amount: item?.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: 1,
          };
        }),
      });

      res.status(200).json(session);
    } catch (err: any) {
      res.status(err?.statusCode || 500).json(err.message);
    }
  }
}

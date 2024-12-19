import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "@/lib/stripe";

interface ItemsTypes {
  priceId: string
  quantity: number
};

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { items } = req.body
 
  if(req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  };

  if(!Array.isArray(items)) {
    return res.status(400).json({ error: 'Price not Found' })
  };

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: items.map((item: ItemsTypes) => ({
        price: item.priceId,
        quantity: item.quantity,
    }))
  });

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  });
};
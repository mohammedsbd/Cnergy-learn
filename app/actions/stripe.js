"use server"
import { headers } from "next/headers";
const CURRENCY = "USD";
import { formatAmountForStripe } from "@/lib/stripe-helpers";
import { stripe } from "@/lib/stripe"; 

export async function createCheckoutSession(data){
    const ui_mode = "hosted";
    const origin = (await headers()).get("origin");

    const checkoutSession = await stripe.checkout.sessions.create({
        mode: "payment",
        submit_type: "auto",
        line_items: [
            {
                quantity: 1,
                price_data: {
                    currency: CURRENCY,

                    product_data: {
                        name: "How to become good programmer",
                    },
                    unit_amount: formatAmountForStripe(19,CURRENCY)
                },
            },
        ],

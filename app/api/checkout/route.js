import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
//const host = process.env.URL;

export async function POST(req) {
    console.log(req)
    const j = await req.json();
    //const body = j.body
    //console.log("j:", j)
    //const body = JSON.parse(j.body);
    try{
        const response = await checkoutSessionHandler();
        console.log("sucess");
        return response
    }catch (error){
        console.error(error)
        return NextResponse.json(
            { message: "something went wrong", ok: false },
            { status: 500 }
          );
    }

}

async function checkoutSessionHandler(body) {
    const date = new Date().toISOString;
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              recurring:{
                interval: 'year',
                interval_count: 1
              },
              currency: "cad",
              product_data: {
                name:"membership plan test",
              },
              
              unit_amount: 3000,
            },
            quantity: 1,
          },
        ],
        subscription_data: {
          trial_settings: {
            end_behavior: {
              missing_payment_method: 'cancel',
            },
          },
          trial_period_days: 15,
        },
        payment_method_collection: 'if_required',
        mode: 'subscription',
        cancel_url: `http://localhost:3000`,
        success_url: `http://localhost:3000/sign-in`,
      });
      return NextResponse.json({sessionURL: session.url}, {status: 200});
}
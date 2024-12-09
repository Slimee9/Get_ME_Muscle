import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import User from "@/models/User";
import Razorpay from "razorpay";
import connectDB from "@/db/connectDb";

export const POST = async (req) => {
    await connectDB()
    let body = await req.formData() //obj will br created
    body = Object.fromEntries(body)

    // check if razor pay id is present on server
    
    let p = await Payment.findOne({oid: body.razorpay_order_id}) 
    if (!p){
        return NextResponse.json({success: false, message:"Order Id not found"})
    }
    //fetching the secret of user who is getting the payment
    let user = await User.findOne({username: p.to_user})
    const secret = user.razorpaysecret

    //Verify the payment
    let xx = validatePaymentVerification({"order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id},
         body.razorpay_signature, secret)

    if(xx){
        //update th Payment Status
        const updatedPayment = await Payment.findOneAndUpdate({oid: body.razorpay_order_id},{done: "true"}, {new: true})
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`)
    }
    else{
        return NextResponse.json({success: false, message:"Payment Verification Failed"})
    }

}
"use client";
import React, { useEffect, useState } from "react";
import Script from "next/script";
import { useSession } from "next-auth/react";
import { fetchuser,fetchpayments, initiate } from "@/actions/useractions";
import { useSearchParams, useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from "react-toastify";

const PaymentPage = ({ username }) => {
  // const {data:session} = useSession()

  const [paymentform, setpaymentform] = useState({name: ""})
  const [currentUser, setcurrentUser] = useState({})
  const [payments, setPayments] = useState([])
  const searchParams = useSearchParams()
  const router = useRouter();

// useEffect(() => {
//     getData()
//   },[])

useEffect(() => {
  const getData = async () => {
    const user = await fetchuser(username);
    setcurrentUser(user);

    const dbpayments = await fetchpayments(username);
    setPayments(dbpayments);
  };

  getData();
}, []);

useEffect(() => {
  const paymentDone = searchParams.get("paymentdone") === "true";
  if (paymentDone) {
    toast("Thanks for your donation!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      // theme: "light",
      className:"bg-green-500 text-white rounded-md text-sm ",
      transition: Bounce,
    });

    router.push(`/${username}`); // Move after the toast logic
  }
})
  
// useEffect(() => {
//     if(searchParams.get("paymentdone") == "true"){
//     toast('Thanks for your donation!', {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//         transition: Bounce,
//         });
//     }
//     router.push(`/${username}`)
 
// }, [])

  const handleChange = (e) => {
    setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
    console.log(paymentform)
  }

  const getData = async () =>{
    let u = await fetchuser(username);
    console.log("Fetched user data: ", u);
    setcurrentUser(u) // 

    let dbpayments = await fetchpayments(username)
    setPayments(dbpayments)

    console.log("Fetched payments: ",dbpayments)

  }


    const pay = async (amount) => {
      

      // Get the order id
      let a = await initiate(amount, username, paymentform)
      let orderID = a.id 
        var options = {
            // "key": process.env.NEXT_PUBLIC_KEY_ID, // Enter the Key ID generated from the Dashboard
            "key": currentUser.razorpayid,
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Get_Me_Muscle", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderID, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
                rzp1.open();
    }

  return (
    <>
    <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
            {/* Same as */}
            <ToastContainer />
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
     

      <div className="cover w-full bg-red-50 relative">
        {/* <Image src={'/bg.jpg'} alt='' width={600} height={100}/> */}
        <img
          className="w-full object-cover h-48 md:h-[350px]"
          src={currentUser.coverpic}
          // src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3Ijo5NjAsIndlIjoxfQ%3D%3D/16.gif?token-time=1733270400&token-hash=0p5wyXYhEDNHLaYvt4DNZILZ6bI6WqKgCkimzBAjCBE%3D"
          alt=""
        />
        <div className="absolute r  -bottom-12 right-[35%] md:right-[45.9%]  border-2 rounded-full overflow-hidden border-black size-36">
          <img
            className="rounded-full object-cover size-36" 
            width={128}
            height={128}
            src={currentUser.profilepic}
            // src="https://www.petssatisfaction.com/cdn/shop/articles/Black-Persian-cat-relaxing-on-stool_1024x.jpg?v=1710201115"
            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkqGMYX7ZgeGI0J37Mi6fwkXZkMd9qpIySUA&s"
            alt=""
          />
        </div> 
      </div>

      <div className="info flex flex-col  justify-center items-center my-12 mr-10 gap-2  ">
        <div className="font-bold text-lg underline mt-2">
          @{username}
        </div>

        <div className="text-slate-400">Lets help {username} get muscles</div>

        <div className="text-slate-400">
        {payments.length}  Payments .  ₹{payments.reduce((a,b) => a + b.amount, 0)} raised
        </div>

        <div className="payment flex gap-3 w-[80%] mt-11 flex-col md:flex-row ">
          <div className="supporters w-full  md:w-1/2 text-sm bg-slate-900 rounded-lg py-5 px-10">
            {/* show List of all the supporters as a leader board */}
            <h2 className="text-2xl font-bold my-5 ">Supporters</h2>
            <ul className="mx-5 text-slate-400 text-sm">
            {payments.length == 0 && <li>No Payment yet</li>}
            {payments.map((p, i)=> {
               return <li key={i} className="my-4 flex gap-2  items-center">
                <img width={33} src="/avatar.gif" alt="" />
                <span>
                  {p.name} donated
                  <span className="font-bold text-green-400"> ₹{p.amount}</span> with a
                  message &quot;{p.message}&quot;
                </span>
              </li>
            })}
            </ul>
          </div>
          <div className="makePayment w-full  md:w-1/2 bg-slate-900 rounded-lg p-10">
            <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
            <div className="flex flex-col gap-2">
              <div>
                <input onChange={handleChange}
                  name = "name"
                  value={paymentform.name}
                  type="text"
                  className="w-full p-3 rounded-lg bg-slate-800 placeholder:"
                  placeholder="Enter Name"
                />
              </div>
              <input onChange={handleChange}
                name = "message"
                value={paymentform.message}
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800 placeholder:"
                placeholder="Enter message"
              />
              <input onChange={handleChange}
                name="amount"
                value={paymentform.amount}
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800 placeholder:"
                placeholder="Enter Amount"
              />

              {/* <button 
                onClick={()=> pay(Number.parseInt(paymentform.amount) * 100)}
                type="button"
                className=" text-white bg-gradient-to-br from-purple-900 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
                 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 
                disabled:bg-slate-600 disabled:from-purple-100"
                  disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4 || paymentform.amount?.length<1}
              >
                Pay
              </button> */}
              
              <button 
              onClick={() => pay(Number.parseInt(paymentform.amount) * 100)} 
              type="button" className="text-white bg-gradient-to-br from-purple-900 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 
              focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 
              disabled:bg-slate-600 disabled:from-purple-100" 
               disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4 || paymentform.amount?.length<1}>
                Pay
              </button> 



              {/* <button className='bg-slate-800 rounded-lg p-3 hover:bg-slate-500 active:scale-95 '> Pay</button> */}
            </div>
            <div className="flex  gap-2 mt-5 text-slate-400">
              <button onClick={()=>{pay(1000)}} className="bg-slate-800 p-3 rounded-lg hover:bg-slate-500  active:scale-95 ">
                Pay ₹10
              </button>
              <button onClick={()=>{pay(2000)}} className="bg-slate-800 p-3 rounded-lg hover:bg-slate-500 active:scale-95 ">
                {" "}
                Pay ₹20
              </button>
              <button onClick={()=>{pay(3000)}} className="bg-slate-800 p-3 rounded-lg hover:bg-slate-500 active:scale-95 ">
                {" "}
                Pay ₹30
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;

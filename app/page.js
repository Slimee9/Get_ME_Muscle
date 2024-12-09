import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col gap-3 justify-center items-center h-[44vh] text-[#f0f8ff] px-5 md:px-0 text-xs md:text-base">
        <div className="font-bold md:text-5xl md:gap-20 flex justify-center gap-5 items-center text-3xl">
          GetMeMuscles: Exclusive Fitness Hub
          <span>
            <Image
              className="invertImg rounded-full"
              height={200}
              width={100}
              src="/i2.jpg"
              alt="Fitness Hub Logo"
            />
          </span>
        </div>
        <p className="p-3 text-center md:text-left">
          Unlock your full fitness potential with exclusive workout plans,
          nutrition guides, and behind-the-scenes fitness tips. Start now and
          get multiple offers 💪.
        </p>
        <div>
          <Link href={"/login"}>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 mt-2 text-center me-2 mb-2"
            >
              Start Here
            </button>
          </Link>
          <Link href={"/about"}>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 mt-2 text-center me-2 mb-2"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>

      {/* Separator */}
      <div className="bg-white h-1 opacity-10"></div>

      {/* Features Section */}
      <div className="text-white container mx-auto pb-32 pt-14 px-10">
        <h2 className="text-3xl font-bold text-center mb-10">
          Your Fans Can Pay for Your Fitness
        </h2>
        <div className="flex gap-5 justify-around">
          {/* Feature 1 */}
          <div className="space-y-1 flex flex-col items-center justify-center">
            <Image
              className="rounded-full bg-slate-700 mt-2"
              height={70}
              width={70}
              src="/man.gif"
              alt="Feature 1"
            />
            <p className="text-white text-center font-semibold text-sm p-1 underline border-2 rounded-md border-black">
              Your Team Wants to Help
            </p>
            <p className="w-1/2 text-center">Your fans are ready to support you.</p>
          </div>
          {/* Feature 2 */}
          <div className="space-y-1 flex flex-col items-center justify-center">
            <Image
              className="rounded-full mt-2"
              height={70}
              width={70}
              src="/coin.gif"
              alt="Feature 2"
            />
            <p className="text-white text-center font-semibold text-sm p-1 underline border-2 rounded-md border-black">
              Direct Support
            </p>
            <p className="w-1/2 text-center">
              Receive contributions to fund your fitness journey.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="space-y-1 flex flex-col items-center justify-center">
            <Image
              className="rounded-full bg-slate-700 mt-2"
              height={70}
              width={70}
              src="/group.gif"
              alt="Feature 3"
            />
            <p className="text-white text-center font-semibold text-sm p-1 underline border-2 rounded-md border-black">
              Build a Community
            </p>
            <p className="w-1/2 text-center">
              Collaborate and grow with like-minded fitness enthusiasts.
            </p>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="bg-white h-1 opacity-10"></div>

      {/* Video Section */}
      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-10">
          Learn More About Us
        </h2>
        <div className="w-[90%] md:w-[50%] h-[40vh]">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Uqn4iSV1jDU?si=4JxBdSakjlXGrnCY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

// import Image from "next/image";
// import Link from "next/link";
// export default function Home() {
//   return (
//     <>
//       <div className="flex flex-col gap-3 justify-center items-center h-[44vh] text-[#f0f8ff] px-5 md:px-0 text-xs md:text-base">
//         <div className="font-bold md:text-5xl md:gap-20 flex justify-center gap-5 items-center text-xl">
//           {" "}
//           GetMEMuscles: Exclusive Fitness Hub
//           <span>
//             <Image
//               className="invertImg rounded-full "
//               height={200}
//               width={100}
//               src="/i2.jpg"   
//               alt=""
//             />
//           </span>
//         </div>
//         <p className="p-3 text-center md:text-left">
//           Unlock your full fitness potential with exclusive workout plans,
//           nutrition guides, and behind-the-scenes fitness tips. Start now! and
//           get multiple offers💪
//         </p>
//         <div className="">
//           <Link href={"/login"}>
//               <button
//                 type="button"
//                 className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2  mt-2 text-center me-2 mb-2"
//                 >
//                 Start Here
//               </button>
//           </Link>
//           <Link href={"/about"}>
//               <button
//                 type="button"
//                 className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2  mt-2 text-center me-2 mb-2"
//                 >
//                 Read more
//               </button>
//          </Link>
//         </div>
//       </div>

//       <div className="bg-white h-1 opacity-10"></div>


//       <div className="text-white container mx-auto pb-32 pt-14 px-10">
//         <h2 className="text-3xl font-bold text-center mb-10 ">
//           Your Fans can pay for your Fitness{" "}
//         </h2>
//         <div className=" flex gap-5 justify-around ">
//           <div className="space-y-1 flex flex-col items-center justify-center ">
//             <Image
//               className=" ml-6 item bg-slate-700 rounded-full  mt-2 "
//               height={70}
//               width={70}
//               src="/man.gif"
//               alt=""
//             />
//             <p className="text-white text-center  font-semibold text-sm ml-2 p-1 underline border-2 rounded-md border-black ">
//               Yours Team wants to help
//             </p>
//             <p className="w-1/2 text-center">Your Fans are available for you</p>
//           </div>
//           <div className="space-y-1 flex flex-col items-center justify-center ">
//             <Image
//               className=" ml-6 item   rounded-full  mt-2 "
//               height={70}
//               width={70}
//               src="/coin.gif"
//               alt=""
//             />
//             <p className="text-white text-center  font-semibold text-sm ml-2 p-1 underline border-2 rounded-md border-black ">
//               Yours Team wants to help
//             </p>
//             <p className="w-1/2 text-center">Your Fans are available for you</p>
//           </div>
//           <div className="space-y-1 flex flex-col items-center justify-center ">
//             <Image
//               className=" ml-6 item bg-slate-700 rounded-full  mt-2 "
//               height={70}
//               width={70}
//               src="/group.gif"
//               alt=""
//             />
//             <p className="text-white text-center  font-semibold text-sm ml-2 p-1 underline border-2 rounded-md border-black ">
//               Yours Team wants to help
//             </p>
//             <p className="w-1/2 text-center">Your Fans are available for you</p>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white h-1 opacity-10"></div>

//       <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
//         <h2 className="text-3xl font-bold text-center mb-10 ">
//           Learn More about us{" "}
//         </h2>
        
//         <div className="w-[90%] h-[40vh] md:w-[50%] md:h-[40vh] lg:w-[50%] lg:h-[40vh] xl:w-[50%] xl:h-[40vh]>

//         <iframe className="w-full h-fit  src="https://www.youtube.com/embed/Uqn4iSV1jDU?si=4JxBdSakjlXGrnCY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

//         </div>

        
//       </div>
//     </>
//   );
// }

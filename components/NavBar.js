"use client";

import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const { data: session } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleBlur = () => {
    setTimeout(() => setShowDropdown(false), 100);
  };

  return (
    <nav className="bg-gray-900 text-[#f0f8ff] flex justify-between items-center px-4 md:h-16 flex-col md:flex-row">
      {/* Logo */}
      <Link href="/" className="logo font-semibold text-lg flex items-center">
        <Image
          className="invertImg rounded-full p-1 mr-2"
          height={60}
          width={65}
          src="/i2.jpg"
          alt="GetMeMuscles Logo"
        />
        <span className="text-xl md:text-base my-3 md:my-0 ">GetMeMuscles!</span>
      </Link>

      {/* Navigation */}
  
       <div className="relative flex flex-col md:block gap-4 "> 
        {session ? (
          <>
            {/* Dropdown Button */}
            <button
              onClick={toggleDropdown}
              onBlur={handleBlur}
              className="mx-4 text-white bg-blue-700 hover:bg-blue-800 
              focus:ring-4 focus:outline-none focus:ring-blue-300 
              font-medium rounded-lg text-sm px-5 py-2.5 flex items-center"
            >
              Welcome {session.user.email}
              <svg
                className="w-2.5 h-2.5 ml-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
                aria-hidden="true"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button> 
            {/* Dropdown Menu */}
            {showDropdown && (
              <div
                className={` z-10 absolute left-[125px] bg-white divide-y divide-gray-100 
                rounded-lg shadow w-44 dark:bg-gray-700 ${showDropdown ? "block" : "hidden"}`}  onMouseDown={(e) => e.preventDefault()} // Prevent dropdown closing
                 
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${session.user.name}`}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Your Page
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => signOut()}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left"
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <Link href="/login">
            <button
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 
              hover:bg-gradient-to-bl focus:ring-4 focus:outline-none 
              focus:ring-blue-300 dark:focus:ring-blue-800 font-medium 
              rounded-lg text-sm px-5 py-2 mt-2"
            >
              Login
            </button>
          </Link>
        )}
       </div>  
    </nav>
  );
};

export default NavBar;


// "use client";
// import React, { useState } from "react";
// import { useSession, signIn, signOut } from "next-auth/react";
// import Image from "next/image";
// import Link from "next/link";


// const NavBar = () => {
//   const { data: session  } = useSession();
  
//   const [showdropdown, setShowdropdown] = useState(false);
//   // if(session){
//   //   return
//   //   <>
//   //   Signed in as {session.user.email} <br />
//   //   <button onClick={() => signOut}>Sign Out</button>
//   //   </>
//   // }
  

//   return (
//     <nav className="bg-gray-900 text-[#f0f8ff] flex justify-between items-center px-4 md:h-16 flex-col md:flex-row  ">
//       <Link href={"/"} className="logo font-semibold text-lg flex justify-center items-center">
//         <Image
//           className="invertImg rounded-full p-1 mr-2"
//           height={60}
//           width={65}
//           src="/i2.jpg"
//           alt=""
//         />
//         <span className="text-4xl md:text-base">GetMeMuscles!</span>
//       </Link>

//       {/* <ul className='flex justify-between gap-4'>
//         <li>Home</li>
//         <li>About</li>
//         <li>Projects</li>
//         <li>Sign Up</li>
//         <li>Login</li>
//       </ul> */}

//       <div className="relative flex flex-col md:block gap-4 ">
//         {session && (
//           <>
            
//             {/* <Link href={"/dashboard"}>
//             <button className="text-sm text-center hover:underline p-2"> Dashboard</button>
//             </Link>
            
//             <Link className="text-sm text-center hover:underline p-2" href= {`/${session.user.name}`}>
//                     Your page
//             </Link>    */}
            
//             <button
//               onClick={() => {
//                 setShowdropdown(!showdropdown);
//               }}
//               id="dropdownDefaultButton"
//               data-dropdown-toggle="dropdown"
//               onBlur={()=>{setTimeout(()=> {
//                 setShowdropdown(false)
//               }, 100)
//              }}
//               className=" mx-4  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               type="button"
//             >
//               Welcome {session.user.email}
//               <svg
//                 className="w-2.5 h-2.5 ms-3"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 10 6"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="m1 1 4 4 4-4"
//                 />
//               </svg>
//               <div
//               id="dropdown"
//               className={`z-10 ${showdropdown ? "" : "hidden"
//                 } absolute left-[125px] bg-white divide-y 
// divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
//             >
//               <ul
//                 className="py-2 text-sm text-gray-700 dark:text-gray-200"
//                 aria-labelledby="dropdownDefaultButton"
//               >
//                 <li>
//                   <Link href={"/dashboard"}
//                     className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                   >
//                     Dashboard
//                   </Link>
//                 </li>
//                 <Link href={"/dashboard"}>
//                      <button className="text-sm text-center hover:underline p-2"> Dashboard</button>
//                 </Link>
                
//                 <Link className="text-sm text-center hover:underline p-2" href= {`/${session.user.name}`}>
//                         Your page
//                 </Link>
                
//                 <li>
//                   <button onClick={()=>signOut()}
//                     href="#"
//                     className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                   >
//                     Sign out
//                   </button>
//                 </li>
//               </ul>
//             </div>
//             </button>
            
//           </>
//         )}
        

//         {session && (
//           <button
//             onClick={() => {
//               signOut();
//             }}
//             className="text-white bg-gradient-to-br from-purple-600 to-blue-500 
//         hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
//          focus:ring-blue-300 dark:focus:ring-blue-800 font-medium
//           rounded-lg text-sm px-5 py-2  mt-2 text-center me-2 mb-2"
//           >
//             Log out{" "}
//           </button>
//         )}

//         {!session && (
//           <Link href={"/login"}>
//             <button
//               className="text-white bg-gradient-to-br from-purple-600 to-blue-500 
//         hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
//          focus:ring-blue-300 dark:focus:ring-blue-800 font-medium
//           rounded-lg text-sm px-5 py-2  mt-2 text-center me-2 mb-2"
//             >
//               Login{" "}
//             </button>
//           </Link>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

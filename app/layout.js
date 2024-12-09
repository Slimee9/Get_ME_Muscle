import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "GetMEMuscles: Exclusive Fitness Hub",
  description: "Unlock your full fitness potential with exclusive workout plans, nutrition guides, and behind-the-scenes fitness tips. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
         className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]  text-[#f0f8ff]" >
          <SessionWrapper>
          <NavBar />
          <div className="min-h-screen  bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]  text-[#f0f8ff]">
          {children}
          </div>
          <Footer />
          </SessionWrapper>
      </body>
    </html>
  );
}

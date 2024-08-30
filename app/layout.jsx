import { Rajdhani } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartProvider from "@/components/CartProvider";
import { Toaster } from "@/components/ui/toaster";

const rajdhnai = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhnai",
});

export const metadata = {
  title : "WelCome",
  description: "Welcome To Shopping",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/crosses.png" />
      </head>
      <body className={rajdhnai.variable}>
        <CartProvider>
          <Header />
          {children}
          <Toaster />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ScrollToTopButton from "@/components/ScrollToTop";
import { ToastContainer } from "react-toastify";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata = {
  title: "Ruhul Amin",
  description: "Founder, Developer, and Entrepreneur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${inter.variable} ${bebasNeue.variable}`}>
        <Header />
        {children}
        <ToastContainer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}

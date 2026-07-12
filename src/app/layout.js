import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Qiftly Auto",
  description: "Car Accessories Qatar",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>

        <Navbar />

        {children}

        <WhatsAppButton />
        <Footer/>
      </body>
    </html>
  );
}
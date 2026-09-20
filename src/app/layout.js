import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Gari Qatar",
  description: "Premium & affordable car accessories in Qatar. Order easily via WhatsApp with delivery across Qatar.",
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
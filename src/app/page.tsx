import Image from "next/image";
import BookingTable from "./components/BookTable";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Get-in-touch";
import MenuSection from "./components/Menu";
import OrderReserveSection from "./components/OrderOnline";
import { BakeryMarqueeDemo } from "./components/ui/AdjMarq";
export default function Home() {
  return (
    <div className="bg-[#f1e9da] min-h-screen">
      <Navbar></Navbar>
      <div className="h-50"></div>
      {/* <CareerSection></CareerSection>
      <MenuSection></MenuSection>       */}
      <OrderReserveSection></OrderReserveSection>
      <BookingTable></BookingTable>
      <Contact></Contact>
      <BakeryMarqueeDemo></BakeryMarqueeDemo>
      <Footer></Footer>
    </div>
  );
}

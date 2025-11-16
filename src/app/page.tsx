import Image from "next/image";
import BookingTable from "./components/BookTable";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Get-in-touch";
import CareerSection from "./components/Career";

export default function Home() {
  return (
    <div className="bg-[#f1e9da] min-h-screen">
      <Navbar></Navbar>
      <div className="h-50"></div>
      <CareerSection></CareerSection>
      
      <BookingTable></BookingTable>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

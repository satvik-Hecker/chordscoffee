import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className="bg-[#f1e9da] min-h-screen">
      <Navbar></Navbar>
      <div className="h-50"></div>
      <Footer></Footer>
    </div>
  );
}

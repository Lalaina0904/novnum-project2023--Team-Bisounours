import Image from "next/image";
import Navbar from "@/components/NavBar";
import Heading from "@/components/home/Heading";
import Categories from "@/components/home/Categories";
import Contact from "@/components/home/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Heading />
      <Categories />
      <Contact />
      <Footer />
    </div>
  );
}

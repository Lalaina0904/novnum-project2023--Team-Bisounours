import Heading from "@/components/home/Heading";
import Categories from "@/components/home/Categories";
import Content from "@/components/home/Content";
import Contact from "@/components/home/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
      <div>
        <Heading />
        <Categories />
        <Content />
        <Contact />
        <Footer />
      </div>
    );
}

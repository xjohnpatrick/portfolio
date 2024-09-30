import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-black-100">
        <Hero/>
        <Footer/>
    </div>
  );
}

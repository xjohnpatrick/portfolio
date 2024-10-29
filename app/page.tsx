import Capabilities from "@/components/Capabilities";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-black-100 relative">
      <Hero />
      <Capabilities />
      <Footer />
    </main>
  );
}

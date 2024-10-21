import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { BodyTabs } from "@/components/BodyTabs";
import ProjectList from "@/components/ProjectList";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-black-100">
      <Hero />
      <BodyTabs />
      <ProjectList/>
      <Footer />
    </div>
  );
}

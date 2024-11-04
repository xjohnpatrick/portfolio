import Capabilities from "@/components/Capabilities";
import Hero from "@/components/Hero";
import ProjectList from "@/components/ProjectList";

export default function Home() {
  
  return (
    <main className="flex flex-col w-full bg-black-100 relative">
      <Hero />
      <Capabilities />
      <ProjectList />
    </main>
  );
}

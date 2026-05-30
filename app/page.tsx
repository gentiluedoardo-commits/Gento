import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Sections to follow: Features · Community · Pricing · FAQ · Footer */}
      </main>
    </>
  );
}

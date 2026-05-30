import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { SocialProof } from "@/components/sections/social-proof";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <SocialProof />
        {/* Sections to follow: Pricing · FAQ · Footer */}
      </main>
    </>
  );
}

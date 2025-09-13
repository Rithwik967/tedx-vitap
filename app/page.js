import Navbar from "@/components/Navbar";
import InfiniteHero from "@/components/ui/infinite-hero";
import { ShaderBackground } from "@/components/ui/shader-background";
import About from "@/components/About";
import ReasonsToAttend from "@/components/ReasonsToAttend";
import Events from "@/components/Events";
import Team from "@/components/Team";
//import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";
import PreviousSpeakers from "@/components/PreviousSpeakers";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Navbar and Hero with unified shader background */}
      <div className="relative min-h-[70vh] md:h-[70vh]">
        {/* Shader background covering entire header area */}
        <div className="absolute inset-0">
          <ShaderBackground className="h-full w-full" />
        </div>
        
        {/* Navbar positioned above the shader */}
        <div className="relative z-20">
          <Navbar />
        </div>
        
        {/* Hero content positioned above the shader */}
        <div className="relative z-10">
          <InfiniteHero />
        </div>
      </div>
      
      <About />
      <ReasonsToAttend />
      <Events />
      <PreviousSpeakers />
      <Team />
      <Footer />
    </main>
  );
}
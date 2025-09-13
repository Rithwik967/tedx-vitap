import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ReasonsToAttend from "@/components/ReasonsToAttend";
import Events from "@/components/Events";
import Team from "@/components/Team";
//import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";
import PreviousSpeakers from "@/components/PreviousSpeakers";
import { Waves } from "@/components/ui/waves-background";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Unified waves background for navbar and hero */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0 pointer-events-none z-0">
          <Waves 
            lineColor="rgba(244, 67, 54, 0.20)"
            backgroundColor="transparent"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
          />
        </div>
        
        {/* Navbar and Hero with relative positioning */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
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
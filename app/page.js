import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
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
      <Navbar />
      <Hero />
      <About />
      <ReasonsToAttend />
      <Events />
      <PreviousSpeakers />
      <Team />
      <Footer />
    </main>
  );
}
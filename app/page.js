import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Team from "@/components/Team";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";
import PreviousSpeakers from "@/components/PreviousSpeakers";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <PreviousSpeakers />
      <Team />
      <Sponsors />
      <Footer />
    </main>
  );
}
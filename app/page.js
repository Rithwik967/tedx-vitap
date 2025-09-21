import Hero from "@/components/Hero";
import { RedShaderBackground } from "@/components/ui/red-shader-background";
import About from "@/components/About";
import Events from "@/components/Events";
import Team from "@/components/Team";
import CallToAction from "@/components/ui/call-to-action-1";
import ContactUs from "@/components/ui/contact-us";
import Footer from "@/components/Footer";
import PreviousSpeakers from "@/components/PreviousSpeakers";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Navbar and Hero with unified red shader background */}
      <div className="relative min-h-screen h-screen">
        {/* Red shader background covering entire header area */}
        <div className="absolute inset-0">
          <RedShaderBackground className="h-full w-full" />
        </div>
        
        
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20 z-5"></div>
        
        {/* Hero content positioned above the shader */}
        <div className="relative z-10">
          <Hero />
        </div>
      </div>
      
      <About />
      <Events />
      <PreviousSpeakers />
      <Team />
      
      {/* Call to Action Section */}
      <section className="py-20 px-6 bg-black">
        <CallToAction />
      </section>
      
      {/* Contact Us Section */}
      <section id="contact" className="py-20 bg-black">
        <ContactUs />
      </section>
      
      <Footer />
    </main>
  );
}
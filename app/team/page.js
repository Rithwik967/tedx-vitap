import TeamPage from '@/components/ui/team-page';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/Footer';

export default function Team() {
  return (
    <main className="min-h-screen bg-black">
      {/* Navbar */}
      <div className="relative bg-black">
        <Navbar />
      </div>
      
      {/* Team Page Content */}
      <TeamPage />
      <Footer />
    </main>
  );
}

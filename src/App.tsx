import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Composition from '@/components/Composition';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import Application from '@/components/Application';
import SavingsCalculator from '@/components/SavingsCalculator';
import Comparison from '@/components/Comparison';
import FAQ from '@/components/FAQ';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Hero />
        <Composition />
        <HowItWorks />
        <Benefits />
        <Application />
        <SavingsCalculator />
        <Comparison />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;

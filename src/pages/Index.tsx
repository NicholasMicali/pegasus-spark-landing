
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Programs from '@/components/Programs';
import Portfolio from '@/components/Portfolio';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Portfolio />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;

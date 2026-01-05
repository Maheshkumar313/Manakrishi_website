
import React, { useEffect, useRef } from 'react';
import { Hero } from './sections/Hero';
import { StorySection } from './sections/StorySection';
import { HowItWorks } from './sections/HowItWorks';
import { FarmlandInteractive } from './sections/FarmlandInteractive';
import { Impact } from './sections/Impact';
import { Leadership } from './sections/Leadership';
import { TechSection } from './sections/TechSection';
import { Footer } from './sections/Footer';
import { Drone } from './components/Drone';
import { Navbar } from './components/Navbar';

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative min-h-screen">
      <Navbar />
      
      {/* Global Drone Character that follows through specific sections */}
      <Drone />

      <main>
        <Hero />
        <StorySection />
        <HowItWorks />
        <FarmlandInteractive />
        <Impact />
        <Leadership />
        <TechSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;

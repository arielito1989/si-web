import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import ProjectsGallery from './components/ProjectsGallery';
import ContactFooter from './components/ContactFooter';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollControls from './components/ScrollControls';

function App() {
  return (
    <div className="font-sans antialiased bg-si-bg text-si-text selection:bg-si-red selection:text-si-bg">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsGallery />
      <ContactFooter />
      <FloatingWhatsApp />
      <ScrollControls />
    </div>
  )
}

export default App;

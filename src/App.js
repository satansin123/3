import React, { useRef} from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';

import PromoSection from './components/PromoSection';
import SubContent from './components/SubContent';
import MyCarousel from './components/Carousel';
import Contact from './components/Contact';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';
import HealthPartnerSection from './components/head';
import CalendlyComponent from './components/CalendlyComponent';

const App = () => {
  const calRef = useRef(null);

  const handleButtonClick = (sectionRef) => {
    switch (sectionRef) {
      
      case 'cal':
        window.scrollTo({ top: calRef.current.offsetTop, behavior: 'smooth' });
        break;
      
      default:
        break;
    }
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HealthPartnerSection handleButtonClick={handleButtonClick}/>
      <PromoSection />
      <SubContent />
      <MyCarousel />
      <Contact />
      <CalendlyComponent sectionRef={calRef}/>
      <MapSection />
      <Footer />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
export default App;
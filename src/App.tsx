import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DevicePreview from './components/DevicePreview';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <DevicePreview />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
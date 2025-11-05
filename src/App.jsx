import React from 'react';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Characters from './components/Characters';
import Footer from './components/Footer';

function App() {
  return (
    <div id="top" className="min-h-screen w-full bg-[#0b0705] font-sans">
      <Hero />
      <Collections />
      <Characters />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveCounter from './components/LiveCounter';
import Features from './components/Features';
import Community from './components/Community';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B2134] overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <LiveCounter />
        <Features />
        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default App;
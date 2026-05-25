import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Showcase from './components/Showcase';
import Competitors from './components/Competitors';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-900">
      <Header />
      <Hero />
      <Benefits />
      <Showcase />
      <Competitors />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

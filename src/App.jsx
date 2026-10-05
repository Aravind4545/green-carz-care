import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HighlightedServices } from './components/HighlightedServices';
import { SpecialOffers } from './components/SpecialOffers';
import { RealGallery } from './components/RealGallery';
import { LocationAndContact } from './components/LocationAndContact';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FlyerModal } from './components/FlyerModal';
import { FloatingActions } from './components/FloatingActions';
import { MobileBottomNav } from './components/MobileBottomNav';

export function App() {
  const [theme, setTheme] = useState('light');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');
  const [isFlyerOpen, setIsFlyerOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenBooking = (serviceName = '') => {
    setPreselectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleOpenFlyer = () => {
    setIsFlyerOpen(true);
  };

  return (
    <div className="app-root">
      {/* Top Fixed Header & Navigation */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenBooking={handleOpenBooking}
        onOpenFlyer={handleOpenFlyer}
      />

      {/* Hero Showcase with Real Building Exterior */}
      <Hero
        onOpenBooking={handleOpenBooking}
        onOpenFlyer={handleOpenFlyer}
        theme={theme}
      />

      {/* Core Highlighted Services with Real Car & Studio Photos */}
      <HighlightedServices
        onOpenBooking={handleOpenBooking}
        onOpenFlyer={handleOpenFlyer}
      />

      {/* 2nd Anniversary Celebration Packages (From ₹1,999) */}
      <SpecialOffers
        onOpenBooking={handleOpenBooking}
        onOpenFlyer={handleOpenFlyer}
      />

      {/* Real Workshop & Detailing Studio Gallery */}
      <RealGallery />

      {/* Workshop Location, Phones, Working Hours & Maps */}
      <LocationAndContact
        onOpenBooking={handleOpenBooking}
        theme={theme}
      />

      {/* Global Footer */}
      <Footer
        onOpenBooking={handleOpenBooking}
        onOpenFlyer={handleOpenFlyer}
      />

      {/* Modals & Floating CTAs */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedService={preselectedService}
      />

      <FlyerModal
        isOpen={isFlyerOpen}
        onClose={() => setIsFlyerOpen(false)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Quick Floating WhatsApp & Call Buttons */}
      <FloatingActions onOpenBooking={handleOpenBooking} />

      {/* Mobile Sticky Bottom Navigation */}
      <MobileBottomNav onOpenBooking={handleOpenBooking} />
    </div>
  );
}

export default App;

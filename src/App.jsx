import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SpecialOffers } from './components/SpecialOffers';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { ServicesCatalog } from './components/ServicesCatalog';
import { InteractiveEstimator } from './components/InteractiveEstimator';
import { HealthCheckup37Point } from './components/HealthCheckup37Point';
import { BrandPartners } from './components/BrandPartners';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { LocationAndContact } from './components/LocationAndContact';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FlyerModal } from './components/FlyerModal';
import { FloatingActions } from './components/FloatingActions';

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

      {/* Hero Showcase */}
      <Hero
        onOpenBooking={handleOpenBooking}
        onOpenFlyer={handleOpenFlyer}
        theme={theme}
      />

      {/* Special 2nd Anniversary Vehicle Packages */}
      <SpecialOffers
        onOpenBooking={handleOpenBooking}
        onOpenFlyer={handleOpenFlyer}
      />

      {/* Interactive Before & After Transformation Slider */}
      <BeforeAfterSection
        onOpenBooking={handleOpenBooking}
      />

      {/* Full 37+ Services Catalog with Filter Tabs */}
      <ServicesCatalog
        onOpenBooking={handleOpenBooking}
      />

      {/* Live Interactive Cost Calculator & Quote Builder */}
      <InteractiveEstimator
        onOpenBooking={handleOpenBooking}
      />

      {/* The 37-Point Health Inspection Grid */}
      <HealthCheckup37Point
        onOpenBooking={handleOpenBooking}
      />

      {/* Authorized Brands, Studio Tour & Amenities */}
      <BrandPartners />

      {/* Customer Testimonials from Jangareddygudem */}
      <Testimonials />

      {/* Frequently Asked Questions */}
      <FaqSection />

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
      />

      <FloatingActions
        onOpenBooking={handleOpenBooking}
      />
    </div>
  );
}

export default App;

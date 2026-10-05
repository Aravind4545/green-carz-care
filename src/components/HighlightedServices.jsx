import React, { useState } from 'react';
import { 
  Sparkles, ShieldCheck, Flame, CircleDot, Award, ArrowRight, 
  CheckCircle2, Phone, Calendar, Clock, Star, Zap, ChevronRight
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

export function HighlightedServices({ onOpenBooking, onOpenFlyer }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const highlightedServices = [
    {
      id: 'ceramic',
      category: 'detailing',
      title: '9H Nano Ceramic Coating',
      subtitle: 'Showroom Mirror Shine & Multi-Year Protection',
      badge: 'Most Popular Detailing',
      image: '/assets/mirror-shine-polo.jpg',
      alt: 'Black Volkswagen Polo with 9H Nano Ceramic Mirror Finish at Green Carz Care',
      tagline: 'Deep gloss reflection, scratch resistance & hydrophobic armor',
      warranty: '3 - 5 Years Warranty',
      features: [
        '9H Diamond Hardness Ceramic Layer',
        'Deep Liquid Mirror Reflection & Color Depth',
        'Hydrophobic Water & Dirt Beading Technology',
        'Protection from Harsh UV Sun, Bird Droppings & Swirls',
        'Includes Multi-Stage Paint Correction & Rubbing Buff'
      ],
      ctaText: 'Book Ceramic Coating'
    },
    {
      id: 'interior-spa',
      category: 'detailing',
      title: 'Intensive Interior Steam Spa',
      subtitle: 'Hospital-Grade Deep Beautification & Disinfection',
      badge: 'Deep Sanitization',
      image: '/assets/ceramic-jeep.jpg',
      alt: 'Red Jeep Compass interior detailing and exterior shine at Green Carz Care studio',
      tagline: 'Complete fabric extraction, leather care & anti-bacterial fumigation',
      warranty: '100% Odor & Stain Removal',
      features: [
        'High-Pressure Steam Cleaning & Germ Disinfection',
        'Deep Upholstery & Seat Fabric Stain Extraction',
        'Roof Liner, Dashboard & Door Trim Restoration',
        'AC Vent Bacterial Disinfection & Odor Neutralization',
        'Anti-Bacterial Cabin Fumigation'
      ],
      ctaText: 'Book Interior Spa'
    },
    {
      id: 'tyres-alignment',
      category: 'tyres',
      title: 'Tyres & 3D Laser Alignment Hub',
      subtitle: 'Official Yokohama, Michelin, Apollo & Bridgestone Dealer',
      badge: 'Authorized Hub',
      image: '/assets/tyres-showroom.jpg',
      alt: 'Tyres showroom and reception at Green Carz Care on Eluru Road',
      tagline: 'Computerized laser alignment, dynamic balancing & pure nitrogen air',
      warranty: 'Original Manufacturer Warranty',
      features: [
        '100% Genuine Tyres: Yokohama, Michelin, Apollo, Bridgestone, MRF',
        'Computerized 3D Laser Four-Wheel Alignment',
        'High-Speed Dynamic Wheel Balancing & Weights',
        'N2 Nitrogen Tyre Inflator for Extended Tyre Life',
        'Exide & Amaron Branded Automotive Batteries'
      ],
      ctaText: 'Enquire Tyres & Alignment'
    },
    {
      id: 'water-wash',
      category: 'wash',
      title: 'Water Wash & Wax Rubbing Buffing',
      subtitle: 'High Pressure Underbody & Snow Foam Body Spa',
      badge: 'Fast & Thorough',
      image: '/assets/exterior-building.jpg',
      alt: 'Modern Green Carz Care car wash and detailing facility exterior',
      tagline: 'Pressure wash, snow foam lather, underbody lift & machine buffing',
      warranty: 'Scratch-Free Microfiber Finish',
      features: [
        'High-Pressure Underbody Chassis Wash on Hydraulic Lift',
        'pH-Neutral Snow Foam Hand Wash & Cleanse',
        'Machine Wax Rubbing & High-Gloss Buffing',
        'Alloy Wheel De-Greasing & Tyre Dressing Polish',
        'Interior Vacuum & Glass Crystal Cleaning'
      ],
      ctaText: 'Book Car Wash'
    },
    {
      id: 'anniv-packages',
      category: 'packages',
      title: '2nd Anniv Special 5-in-1 Combo',
      subtitle: 'Wash + Interior + Wax + Fumigation + AC Sanitization',
      badge: 'Save Up To 60%',
      image: '/assets/anniversary-flyer.jpg',
      alt: 'Official 2nd Anniversary celebration discount packages flyer',
      tagline: 'Complete full car rejuvenation starting at only ₹1,999/-',
      warranty: 'Includes 37-Point Health Checkup Free',
      features: [
        'Hatchback Combo: Normal ₹5,400 -> Special ₹1,999/-',
        'Sedan Combo: Normal ₹6,300 -> Special ₹2,999/-',
        'SUV Combo: Normal ₹7,200 -> Special ₹3,999/-',
        'Premium / Luxury: Normal ₹8,200 -> Special ₹4,999/-',
        'FREE Wiper, Battery, Oil & Coolant Inspection'
      ],
      ctaText: 'View Packages & Book'
    }
  ];

  const filtered = selectedCategory === 'all' 
    ? highlightedServices 
    : highlightedServices.filter(s => s.category === selectedCategory);

  return (
    <section id="services" className="section" style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      borderBottom: '1px solid var(--border-color)',
      padding: '70px 0'
    }}>
      <div className="container">
        
        {/* Header - Punchy & Focused */}
        <div className="section-header" style={{ marginBottom: '36px' }}>
          <div className="section-tag">
            <Sparkles size={14} /> Core Specialties
          </div>
          <h2 className="section-title">
            Highlighted <span className="text-gradient-green">Services & Solutions</span>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '640px' }}>
            Real work from our Jangareddygudem detailing studio. Genuine equipment, certified technicians, and manufacturer-grade care for every vehicle.
          </p>

          {/* Quick Filter Pills */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '8px',
            marginTop: '22px'
          }}>
            {[
              { id: 'all', label: 'All Core Services' },
              { id: 'detailing', label: 'Ceramic & Interior Spa' },
              { id: 'tyres', label: 'Tyres & 3D Alignment' },
              { id: 'wash', label: 'Water Wash & Buffing' },
              { id: 'packages', label: '2nd Anniv Combos (₹1,999)' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '999px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: selectedCategory === tab.id 
                    ? '1.5px solid var(--brand-green)' 
                    : '1px solid var(--border-color)',
                  background: selectedCategory === tab.id 
                    ? 'var(--brand-green)' 
                    : 'var(--bg-primary)',
                  color: selectedCategory === tab.id 
                    ? '#ffffff' 
                    : 'var(--text-primary)',
                  transition: 'all 0.2s ease',
                  boxShadow: selectedCategory === tab.id 
                    ? '0 4px 14px rgba(86, 152, 20, 0.25)' 
                    : 'none'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid - High Visual Impact with Real Photos */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }} className="highlighted-services-grid">
          {filtered.map(service => (
            <div
              key={service.id}
              className="service-card"
              style={{
                background: 'var(--bg-primary)',
                borderRadius: '20px',
                border: '1.5px solid var(--border-color)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'var(--shadow-md)',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
            >
              {/* Image Container with Real Photo */}
              <div style={{
                position: 'relative',
                height: '220px',
                width: '100%',
                overflow: 'hidden',
                background: '#0e1610'
              }}>
                <img
                  src={service.image}
                  alt={service.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  className="service-card-image"
                />
                
                {/* Badge Overlay */}
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  background: 'var(--brand-green)',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '0.72rem',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.35)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <Sparkles size={11} />
                  <span>{service.badge}</span>
                </div>

                {/* Warranty/Guarantee Pill */}
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  background: 'rgba(10, 16, 11, 0.88)',
                  backdropFilter: 'blur(8px)',
                  color: '#bbf76d',
                  fontWeight: 700,
                  fontSize: '0.72rem',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  border: '1px solid rgba(142, 224, 36, 0.35)'
                }}>
                  {service.warranty}
                </div>
              </div>

              {/* Card Body */}
              <div style={{
                padding: '22px',
                display: 'flex',
                flexDirection: 'column',
                flex: 1
              }}>
                <h3 style={{
                  fontSize: '1.28rem',
                  fontWeight: 800,
                  marginBottom: '4px',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.01em'
                }}>
                  {service.title}
                </h3>

                <p style={{
                  fontSize: '0.84rem',
                  color: 'var(--brand-green-text)',
                  fontWeight: 700,
                  marginBottom: '12px'
                }}>
                  {service.subtitle}
                </p>

                <p style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.45,
                  marginBottom: '16px'
                }}>
                  {service.tagline}
                </p>

                {/* Features List */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  marginBottom: '22px',
                  marginTop: 'auto'
                }}>
                  {service.features.map((feat, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      fontSize: '0.83rem',
                      color: 'var(--text-primary)',
                      lineHeight: 1.35
                    }}>
                      <CheckCircle2 size={15} color="var(--brand-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div style={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border-color)'
                }}>
                  <button
                    onClick={() => {
                      if (service.id === 'anniv-packages') {
                        onOpenFlyer();
                      } else {
                        onOpenBooking(service.title);
                      }
                    }}
                    className="btn-primary"
                    style={{
                      flex: 1,
                      padding: '12px 16px',
                      fontSize: '0.88rem',
                      borderRadius: '10px',
                      justifyContent: 'center'
                    }}
                  >
                    <Calendar size={15} />
                    <span>{service.ctaText}</span>
                  </button>

                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20Green%20Carz%20Care,%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-whatsapp"
                    style={{
                      padding: '12px 14px',
                      borderRadius: '10px',
                      textDecoration: 'none'
                    }}
                    title="Chat on WhatsApp"
                  >
                    <Phone size={15} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Real Facility Callout Banner */}
        <div style={{
          marginTop: '40px',
          background: 'var(--bg-primary)',
          border: '1.5px solid var(--brand-green-border)',
          borderRadius: '18px',
          padding: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: 'var(--badge-bg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--brand-green)',
              flexShrink: 0
            }}>
              <Award size={26} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '3px' }}>
                Looking for Other Mechanical or Electrical Repairs?
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                AC gas charging, brake servicing, engine oil change & computerized diagnostics also available at our Eluru Road facility.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <a
              href={`tel:${BUSINESS_INFO.phones[0].clean}`}
              className="btn-secondary"
              style={{
                padding: '10px 18px',
                fontSize: '0.86rem',
                borderRadius: '10px',
                textDecoration: 'none',
                whiteSpace: 'nowrap'
              }}
            >
              <Phone size={15} />
              <span>Call Helpdesk</span>
            </a>
            <button
              onClick={() => onOpenBooking('General Auto Consultation')}
              className="btn-primary"
              style={{
                padding: '10px 18px',
                fontSize: '0.86rem',
                borderRadius: '10px',
                whiteSpace: 'nowrap'
              }}
            >
              <span>Book Inspection</span>
            </button>
          </div>
        </div>

      </div>

      <style>{`
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--brand-green-border);
        }
        .service-card:hover .service-card-image {
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          .highlighted-services-grid {
            grid-template-columns: 1fr !important;
            gap: 18px !important;
          }
        }
      `}</style>
    </section>
  );
}

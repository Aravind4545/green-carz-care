import React from 'react';
import { Sparkles, Calendar, Phone, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

export function HighlightedServices({ onOpenBooking }) {
  const services = [
    {
      title: '9H Nano Ceramic Coating',
      desc: 'Showroom mirror gloss with 9H diamond hardness and long-lasting paint protection.',
      badge: '3 - 5 Years Warranty',
      image: '/assets/mirror-shine-polo.jpg',
      alt: 'Black Volkswagen Polo with 9H Nano Ceramic Mirror Finish'
    },
    {
      title: 'Interior Steam Spa & Beautification',
      desc: 'Deep upholstery foam extraction, leather conditioning, AC disinfection & cabin fumigation.',
      badge: 'Deep Sanitization',
      image: '/assets/ceramic-jeep.jpg',
      alt: 'Red Jeep Compass interior detailing at Green Carz Care'
    },
    {
      title: 'Hunter 3D Laser Wheel Alignment',
      desc: 'State-of-the-art computerized 3D laser alignment and dynamic high-speed wheel balancing.',
      badge: 'Hunter Hawkeye 3D',
      image: '/assets/hunter-alignment-bay.jpg',
      alt: 'Hunter 3D computerized laser wheel alignment bay at Green Carz Care'
    },
    {
      title: 'Authorized Tyres & Battery Hub',
      desc: 'Official dealers for Yokohama, Michelin, Apollo, Bridgestone tyres & Exide batteries with N2 air.',
      badge: 'Authorized Hub',
      image: '/assets/tyres-showroom.jpg',
      alt: 'Branded tyres showroom and customer reception at Green Carz Care'
    }
  ];

  return (
    <section id="services" className="section" style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      borderBottom: '1px solid var(--border-color)',
      padding: '60px 0'
    }}>
      <div className="container">
        
        {/* Simple Section Header */}
        <div className="section-header" style={{ marginBottom: '32px' }}>
          <div className="section-tag">
            <Sparkles size={14} /> Our Services
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient-green">Services</span>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '560px' }}>
            Professional car care treatments performed with state-of-the-art equipment on Eluru Road, Jangareddygudem.
          </p>
        </div>

        {/* Clean, Simple 4-Card Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px'
        }} className="simple-services-grid">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="simple-service-card"
              style={{
                background: 'var(--bg-primary)',
                borderRadius: '16px',
                border: '1.5px solid var(--border-color)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Photo */}
              <div style={{
                position: 'relative',
                height: '190px',
                width: '100%',
                overflow: 'hidden',
                background: '#0a0f0b'
              }}>
                <img
                  src={service.image}
                  alt={service.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.35s ease'
                  }}
                  className="service-img"
                />

                <span style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'var(--brand-green)',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '0.7rem',
                  padding: '3px 10px',
                  borderRadius: '999px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                }}>
                  {service.badge}
                </span>
              </div>

              {/* Simple Details */}
              <div style={{
                padding: '18px',
                display: 'flex',
                flexDirection: 'column',
                flex: 1
              }}>
                <h3 style={{
                  fontSize: '1.15rem',
                  fontWeight: 800,
                  marginBottom: '8px',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.01em'
                }}>
                  {service.title}
                </h3>

                <p style={{
                  fontSize: '0.86rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.45,
                  margin: 0,
                  marginBottom: '18px'
                }}>
                  {service.desc}
                </p>

                {/* Actions */}
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  marginTop: 'auto'
                }}>
                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="btn-primary"
                    style={{
                      flex: 1,
                      padding: '10px 14px',
                      fontSize: '0.86rem',
                      borderRadius: '8px',
                      justifyContent: 'center'
                    }}
                  >
                    <Calendar size={14} />
                    <span>Book Now</span>
                  </button>

                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20Green%20Carz%20Care,%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-whatsapp"
                    style={{
                      padding: '10px 12px',
                      borderRadius: '8px',
                      textDecoration: 'none'
                    }}
                    title="WhatsApp"
                  >
                    <Phone size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .simple-service-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--brand-green-border);
        }
        .simple-service-card:hover .service-img {
          transform: scale(1.05);
        }
        @media (max-width: 600px) {
          .simple-services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

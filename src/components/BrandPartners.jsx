import React from 'react';
import { BRAND_PARTNERS } from '../data/servicesData';
import { ShieldCheck, Award, CheckCircle, Wifi, Coffee, Droplets } from 'lucide-react';

export function BrandPartners() {
  const facilityHighlights = [
    {
      icon: Droplets,
      title: '100% RO Purified Water',
      desc: 'Mineral-free reverse osmosis water prevents ugly water spots, salt etching and paint dullness.'
    },
    {
      icon: Award,
      title: 'Authorized Tyre Dealership',
      desc: 'Direct factory partnership with Yokohama & Michelin for 100% genuine tyres and national warranty.'
    },
    {
      icon: Coffee,
      title: 'AC Customer Lounge',
      desc: 'Relax in comfort with high-speed Wi-Fi, refreshments, and live CCTV view of your car bay.'
    },
    {
      icon: ShieldCheck,
      title: 'Certified ig coatings Studio',
      desc: 'Dust-free, temperature-controlled bay with infrared heat lamps for flawless ceramic curing.'
    }
  ];

  return (
    <section className="section" style={{
      background: 'var(--bg-primary)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} /> Official Authorized Partnerships
          </div>
          <h2 className="section-title">
            World-Class Brands, <span className="text-gradient-green">Local Excellence</span>
          </h2>
          <p className="section-subtitle">
            We partner with industry-leading global automotive manufacturers to bring the highest grade of tyres, ceramic coatings, and lubricants to Jangareddygudem.
          </p>
        </div>

        {/* Brand Logos & Cards Strip */}
        <div className="grid-3" style={{ marginBottom: '64px' }}>
          {BRAND_PARTNERS.map((brand, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '32px 28px',
                textAlign: 'center',
                border: '1px solid var(--border-highlight)'
              }}
            >
              <div style={{
                background: 'rgba(14, 20, 15, 0.8)',
                padding: '16px 24px',
                borderRadius: '14px',
                border: '1px solid var(--border-color)',
                display: 'inline-block',
                marginBottom: '20px'
              }}>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.6rem',
                  fontWeight: 900,
                  letterSpacing: '0.12em',
                  color: brand.name === 'MICHELIN' ? '#4da6ff' : (brand.name === 'YOKOHAMA' ? '#ff4d4f' : 'var(--brand-green)'),
                  textTransform: 'uppercase'
                }}>
                  {brand.logoText}
                </span>
              </div>

              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
                {brand.name} Authorized
              </h3>
              <p style={{
                fontSize: '0.88rem',
                color: 'var(--brand-green)',
                fontWeight: 700,
                marginBottom: '10px'
              }}>
                {brand.speciality}
              </p>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {brand.description}
              </p>
            </div>
          ))}
        </div>

        {/* Workshop Gallery Showcase */}
        <div style={{ marginBottom: '64px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800 }}>
              Tour Our <span className="text-gradient-green">State-of-the-Art Studio</span>
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
              Equipped with precision 3D alignment, infrared curing, and clinical detailing bays.
            </p>
          </div>

          <div className="grid-3">
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              position: 'relative',
              aspectRatio: '16/10',
              border: '1px solid var(--border-highlight)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <img
                src="/assets/ceramic-coating.jpg"
                alt="Paint Buffing & Ceramic Coating"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '20px',
                background: 'linear-gradient(to top, rgba(10, 15, 11, 0.95), transparent)'
              }}>
                <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '4px' }}>Ceramic & Paint Correction Bay</h4>
                <p style={{ color: '#b9c7bb', fontSize: '0.82rem', margin: 0 }}>Rupes dual-action polishers & infrared curing lamps</p>
              </div>
            </div>

            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              position: 'relative',
              aspectRatio: '16/10',
              border: '1px solid var(--border-highlight)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <img
                src="/assets/wheel-alignment.jpg"
                alt="3D Wheel Alignment"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '20px',
                background: 'linear-gradient(to top, rgba(10, 15, 11, 0.95), transparent)'
              }}>
                <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '4px' }}>3D Laser Alignment & Balancing</h4>
                <p style={{ color: '#b9c7bb', fontSize: '0.82rem', margin: 0 }}>High-precision optical sensors & computer balancing</p>
              </div>
            </div>

            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              position: 'relative',
              aspectRatio: '16/10',
              border: '1px solid var(--border-highlight)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <img
                src="/assets/interior-detailing.jpg"
                alt="Intensive Interior Beautification"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '20px',
                background: 'linear-gradient(to top, rgba(10, 15, 11, 0.95), transparent)'
              }}>
                <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '4px' }}>Steam Spa & Interior Studio</h4>
                <p style={{ color: '#b9c7bb', fontSize: '0.82rem', margin: 0 }}>120°C high-temp steam injection & leather rejuvenation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Amenities Grid */}
        <div className="grid-4">
          {facilityHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{ padding: '24px' }}
              >
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(144, 192, 67, 0.15)',
                  color: 'var(--brand-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '14px'
                }}>
                  <Icon size={22} />
                </div>
                <h4 style={{ fontSize: '1.05rem', marginBottom: '6px' }}>{item.title}</h4>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

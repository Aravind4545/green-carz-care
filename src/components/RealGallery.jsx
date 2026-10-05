import React from 'react';
import { Camera, MapPin, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

export function RealGallery() {
  const galleryItems = [
    {
      title: 'Our Detailing Facility & Wash Studio',
      caption: 'Eluru Road, Opp. Kids E.M. School, Jangareddygudem',
      image: '/assets/exterior-building.jpg',
      tag: 'Main Facility'
    },
    {
      title: '9H Ceramic Coating on Black Polo',
      caption: 'Mirror-finish reflection with multi-year paint protection',
      image: '/assets/mirror-shine-polo.jpg',
      tag: 'Ceramic Studio'
    },
    {
      title: 'Red Jeep Compass Studio Detailing',
      caption: 'Intensive interior sanitization & exterior gloss buffing',
      image: '/assets/ceramic-jeep.jpg',
      tag: 'Car Spa'
    },
    {
      title: 'Authorized Branded Tyres Showroom',
      caption: 'Yokohama, Michelin, Bridgestone, Apollo & Exide batteries',
      image: '/assets/tyres-showroom.jpg',
      tag: 'Tyre Hub'
    }
  ];

  return (
    <section id="gallery" className="section" style={{
      background: 'var(--bg-primary)',
      padding: '70px 0'
    }}>
      <div className="container">
        
        <div className="section-header" style={{ marginBottom: '36px' }}>
          <div className="section-tag">
            <Camera size={14} /> Real Studio Photos
          </div>
          <h2 className="section-title">
            Inside Our <span className="text-gradient-green">Jangareddygudem Studio</span>
          </h2>
          <p className="section-subtitle">
            See the actual workshop, detailing bays, customer reception, and finished cars on Eluru Road.
          </p>
        </div>

        {/* 4-Photo Clean Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }} className="real-gallery-grid">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="gallery-item-card"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-secondary)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
            >
              <div style={{
                height: '240px',
                width: '100%',
                overflow: 'hidden',
                position: 'relative',
                background: '#090e0a'
              }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  className="gallery-img"
                />

                <span style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(10, 16, 11, 0.85)',
                  backdropFilter: 'blur(6px)',
                  color: '#ffffff',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '3px 10px',
                  borderRadius: '999px',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  {item.tag}
                </span>
              </div>

              <div style={{ padding: '16px' }}>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: 800,
                  marginBottom: '4px',
                  color: 'var(--text-primary)'
                }}>
                  {item.title}
                </h4>
                <p style={{
                  fontSize: '0.82rem',
                  color: 'var(--text-secondary)',
                  margin: 0,
                  lineHeight: 1.4
                }}>
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .gallery-item-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--brand-green-border);
        }
        .gallery-item-card:hover .gallery-img {
          transform: scale(1.06);
        }
      `}</style>
    </section>
  );
}

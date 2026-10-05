import React from 'react';
import { Camera, MapPin, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

export function RealGallery() {
  const galleryItems = [
    {
      title: 'BMW X6 igl Ceramic Detailing',
      caption: 'Metallic red BMW X6 with igl coatings™ body & rim protection package',
      image: '/assets/bmw-x6-ceramic-wheel.jpg',
      tag: 'Luxury Detailing'
    },
    {
      title: 'igl Ceramic Wheel Under Curing Heat',
      caption: 'Precision alloy wheel ceramic coating under infrared heat curing lamps',
      image: '/assets/bmw-wheel-ceramic.jpg',
      tag: 'Certified igl'
    },
    {
      title: 'Hunter 3D Alignment & Wheel Bay',
      caption: 'Full workshop bay with computerized Hunter console & hydraulic alignment pit',
      image: '/assets/hunter-alignment-wide.jpg',
      tag: '3D Alignment Bay'
    },
    {
      title: 'Our Daytime Studio & Facility',
      caption: 'State-of-the-art detailing studio on Eluru Road, Jangareddygudem',
      image: '/assets/exterior-building.jpg',
      tag: 'Facility Exterior'
    },
    {
      title: 'Fresh Tyre Stock Inventory',
      caption: 'Wide stock of Yokohama, Michelin, Apollo, Bridgestone & MRF tyres',
      image: '/assets/tyres-stock.jpg',
      tag: 'Tyres Inventory'
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

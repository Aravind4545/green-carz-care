import React from 'react';
import { BUSINESS_INFO, BRAND_PARTNERS } from '../data/servicesData';
import { Phone, MapPin, Clock, Heart, Shield, Sparkles, Navigation, ArrowUp, CheckCircle2 } from 'lucide-react';

export function Footer({ onOpenBooking, onOpenFlyer }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#090d0a',
      borderTop: '2px solid rgba(144, 192, 67, 0.45)',
      boxShadow: '0 -10px 40px rgba(0, 0, 0, 0.5)',
      paddingTop: '80px',
      paddingBottom: '36px',
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      maxWidth: '100vw',
      color: '#c5d1c7'
    }}>
      {/* Top Ambient Glow Flare */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        maxWidth: '100vw',
        height: '150px',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(144, 192, 67, 0.22) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Main 4-Column Footer Grid */}
        <div 
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '48px',
            marginBottom: '64px'
          }}
        >
          {/* Column 1: Brand Identity & Certified Partners */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '18px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #1c261e 0%, #121813 100%)',
                border: '1.5px solid rgba(144, 192, 67, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(144, 192, 67, 0.25)'
              }}>
                <img
                  src="/assets/logo-icon.png"
                  alt="Green Carz Care Logo"
                  style={{ width: '85%', height: '85%', objectFit: 'contain' }}
                />
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', fontWeight: 900, color: '#ffffff', letterSpacing: '0.02em' }}>
                    GREEN
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', fontWeight: 800, color: '#9fe245', letterSpacing: '0.08em' }}>
                    CARZ CARE
                  </span>
                </div>
                <div style={{ fontSize: '0.74rem', color: '#88988b', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>
                  Jangareddygudem • West Godavari
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#a6b5a8', lineHeight: 1.6, marginBottom: '22px' }}>
              Your full-service automotive studio: High-pressure foam wash, steam spa, 9H nano ceramic coating, 3D laser alignment, and authorized tyre center.
            </p>

            {/* Official Authorized Badges */}
            <div style={{
              background: 'rgba(18, 26, 20, 0.9)',
              border: '1px solid rgba(144, 192, 67, 0.3)',
              borderRadius: '14px',
              padding: '14px 18px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
            }}>
              <div style={{
                fontSize: '0.72rem',
                color: '#8fa092',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontWeight: 700,
                marginBottom: '8px'
              }}>
                Official Authorized Partners
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{
                  background: 'rgba(255, 77, 79, 0.15)',
                  border: '1px solid rgba(255, 77, 79, 0.35)',
                  color: '#ff7875',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  padding: '3px 10px',
                  borderRadius: '6px'
                }}>
                  YOKOHAMA
                </span>
                <span style={{
                  background: 'rgba(77, 166, 255, 0.15)',
                  border: '1px solid rgba(77, 166, 255, 0.35)',
                  color: '#69c0ff',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  padding: '3px 10px',
                  borderRadius: '6px'
                }}>
                  MICHELIN
                </span>
                <span style={{
                  background: 'rgba(144, 192, 67, 0.15)',
                  border: '1px solid rgba(144, 192, 67, 0.4)',
                  color: '#b8f25b',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  padding: '3px 10px',
                  borderRadius: '6px'
                }}>
                  ig coatings
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Anniversary Offer Packages */}
          <div>
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--brand-green)' }} />
              Special Packages
            </h4>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0 }}>
              <li>
                <a
                  href="#packages"
                  onClick={() => onOpenBooking('HATCH BACK Package (₹1,999/-)')}
                  style={{
                    color: '#c2cec4',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#b8f25b')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#c2cec4')}
                >
                  <span>Hatchback Full Package</span>
                  <strong style={{ color: '#b8f25b', fontFamily: 'var(--font-mono)' }}>₹1,999/-</strong>
                </a>
              </li>

              <li>
                <a
                  href="#packages"
                  onClick={() => onOpenBooking('SEDAN Package (₹2,999/-)')}
                  style={{
                    color: '#c2cec4',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#b8f25b')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#c2cec4')}
                >
                  <span>Sedan Full Package</span>
                  <strong style={{ color: '#b8f25b', fontFamily: 'var(--font-mono)' }}>₹2,999/-</strong>
                </a>
              </li>

              <li>
                <a
                  href="#packages"
                  onClick={() => onOpenBooking('SUV Package (₹3,999/-)')}
                  style={{
                    color: '#c2cec4',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#b8f25b')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#c2cec4')}
                >
                  <span>SUV Full Package</span>
                  <strong style={{ color: '#b8f25b', fontFamily: 'var(--font-mono)' }}>₹3,999/-</strong>
                </a>
              </li>

              <li>
                <a
                  href="#packages"
                  onClick={() => onOpenBooking('PREMIUM Package (₹4,999/-)')}
                  style={{
                    color: '#c2cec4',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#b8f25b')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#c2cec4')}
                >
                  <span>Premium Luxury Package</span>
                  <strong style={{ color: '#b8f25b', fontFamily: 'var(--font-mono)' }}>₹4,999/-</strong>
                </a>
              </li>

              <li style={{ paddingTop: '8px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <button
                  onClick={onOpenFlyer}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#a6e348',
                    fontSize: '0.86rem',
                    cursor: 'pointer',
                    padding: 0,
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Sparkles size={14} /> View Original Printed Flyer
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Workshop Address */}
          <div>
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--brand-green)' }} />
              Workshop Location
            </h4>

            <div style={{
              background: 'rgba(18, 26, 20, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '14px',
              padding: '16px',
              marginBottom: '16px'
            }}>
              <p style={{ fontSize: '0.88rem', color: '#c2cec4', lineHeight: 1.6, margin: 0 }}>
                <strong style={{ color: '#ffffff' }}>RS No. 463/2</strong>, Beside Sri Allam Sivaram Krishna House,<br />
                Opposite Kids E.M. School, Eluru Road,<br />
                Jangareddigudem Bazar,<br />
                <strong>Jangareddygudem - 534447</strong>,<br />
                West Godavari District, Andhra Pradesh.
              </p>
            </div>

            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#b8f25b',
                fontSize: '0.88rem',
                fontWeight: 700,
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              <Navigation size={14} /> Open in Google Maps Directions →
            </a>
          </div>

          {/* Column 4: Hotline Numbers & Workshop Hours */}
          <div>
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--brand-green)' }} />
              Direct Hotlines
            </h4>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px', marginBottom: '18px' }}>
              {BUSINESS_INFO.phones.map((p, idx) => (
                <a
                  key={idx}
                  href={`tel:${p.clean}`}
                  style={{
                    padding: '8px 12px',
                    background: 'rgba(20, 28, 22, 0.9)',
                    borderRadius: '10px',
                    border: '1px solid rgba(144, 192, 67, 0.25)',
                    textDecoration: 'none',
                    display: 'block',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--brand-green)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(144, 192, 67, 0.25)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ fontSize: '0.68rem', color: '#88988a' }}>{p.label}</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#c2f285' }}>
                    {p.number}
                  </div>
                </a>
              ))}
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
              fontSize: '0.84rem',
              color: '#a0b2a3'
            }}>
              <Clock size={16} color="var(--brand-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ color: '#ffffff' }}>Working Hours:</strong><br />
                Mon - Sun: 8:00 AM – 8:30 PM (7 Days a week)
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
          paddingTop: '28px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          fontSize: '0.85rem',
          color: '#849688'
        }}>
          <div>
            © {new Date().getFullYear()} <strong style={{ color: '#ffffff' }}>GREEN CARZ CARE</strong>. All Rights Reserved. Jangareddygudem, West Godavari.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span>Serving West Godavari with Excellence</span>
            <button
              onClick={scrollToTop}
              title="Back to Top"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(25, 36, 27, 0.9)',
                border: '1.5px solid rgba(144, 192, 67, 0.4)',
                color: '#b8f25b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--brand-green)';
                e.currentTarget.style.color = '#0c120d';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(25, 36, 27, 0.9)';
                e.currentTarget.style.color = '#b8f25b';
              }}
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

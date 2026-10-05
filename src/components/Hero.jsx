import React from 'react';
import { Sparkles, Calendar, Phone, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

export function Hero({ onOpenBooking, onOpenFlyer, theme }) {
  const isLight = theme === 'light';

  const tickerItems = [
    'NANO CERAMIC COATING', 'STEAM SPA', '3D WHEEL ALIGNMENT', 'COMPUTERIZED BALANCING',
    'INTENSIVE INTERIOR BEAUTIFICATION', 'WAX RUBBING BUFFING', 'YOKOHAMA & MICHELIN TYRES',
    'EXIDE BATTERIES', 'AC TOP UP', 'N2 NITROGEN AIR', '37-POINT HEALTH CHECK'
  ];

  return (
    <section 
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 'clamp(120px, 16vw, 150px)',
        paddingBottom: '40px',
        width: '100%',
        maxWidth: '100vw',
        overflow: 'hidden',
        transition: 'all 0.3s ease'
      }}
    >
      {/* Real Green Carz Care Building & Studio Exterior */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/assets/exterior-building.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 35%',
        zIndex: 0,
        filter: isLight ? 'brightness(0.92) contrast(1.05)' : 'brightness(0.6) contrast(1.15)',
        transition: 'filter 0.3s ease'
      }} />

      {/* Modern Gradient Backdrop for High Text Contrast */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: isLight
          ? `
            linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(246, 250, 246, 0.88) 45%, var(--bg-primary) 100%),
            radial-gradient(circle at 20% 50%, rgba(86, 152, 20, 0.15) 0%, transparent 60%)
          `
          : `
            linear-gradient(180deg, rgba(11, 15, 12, 0.92) 0%, rgba(11, 15, 12, 0.78) 50%, var(--bg-primary) 100%),
            radial-gradient(circle at 20% 50%, rgba(142, 224, 36, 0.25) 0%, transparent 60%)
          `,
        zIndex: 1,
        transition: 'background 0.3s ease'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '820px' }}>
          
          {/* Top Pill Badge */}
          <div 
            className="hero-anniversary-badge"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: isLight ? '#ffffff' : 'rgba(18, 26, 20, 0.9)',
              border: isLight ? '1.5px solid rgba(86, 152, 20, 0.4)' : '1.5px solid rgba(142, 224, 36, 0.5)',
              backdropFilter: 'blur(10px)',
              borderRadius: '999px',
              padding: '6px 16px',
              marginBottom: '18px',
              boxShadow: isLight ? '0 4px 16px rgba(0, 0, 0, 0.06)' : '0 4px 20px rgba(0, 0, 0, 0.4)'
            }}
          >
            <span style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              background: 'var(--brand-green)',
              color: isLight ? '#ffffff' : '#081009',
              flexShrink: 0
            }}>
              <Sparkles size={11} />
            </span>
            <span className="hero-anniversary-text" style={{
              fontSize: '0.82rem',
              fontWeight: 800,
              color: isLight ? '#2f5509' : '#c9f58e',
              letterSpacing: '0.03em'
            }}>
              <span className="desktop-anniv-text">2nd Anniversary Celebration Offers Live • Jangareddygudem</span>
              <span className="mobile-anniv-text">2nd Anniv Special • Jangareddygudem</span>
            </span>
          </div>

          {/* Main Hero Headline */}
          <h1 style={{
            fontSize: 'clamp(1.9rem, 4.8vw, 3.8rem)',
            fontWeight: 900,
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            color: isLight ? '#101611' : '#ffffff',
            marginBottom: '16px'
          }}>
            Give Your Car The Royal Care It Deserves at <br />
            <span style={{ color: isLight ? '#101611' : '#ffffff', fontWeight: 900 }}>
              GREEN{' '}
            </span>
            <span style={{
              color: isLight ? '#4f8c14' : '#8ee024',
              fontWeight: 900,
              display: 'inline-block'
            }}>
              CARZ CARE
            </span>
          </h1>

          {/* Reduced, Punchy Subtitle */}
          <p style={{
            fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
            color: isLight ? '#384d3b' : 'var(--text-secondary)',
            lineHeight: 1.55,
            marginBottom: '22px',
            maxWidth: '680px',
            fontWeight: 500
          }}>
            Showroom mirror gloss with <strong>9H Nano Ceramic Coating</strong>, <strong>Intensive Steam Spa</strong>, <strong>3D Laser Wheel Alignment</strong>, and authorized <strong>Yokohama & Michelin</strong> tyre hub on Eluru Road.
          </p>

          {/* 3 Quick Value Badges */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '26px'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '999px',
              background: isLight ? '#edf5ec' : 'rgba(142, 224, 36, 0.12)',
              border: isLight ? '1px solid rgba(86, 152, 20, 0.3)' : '1px solid rgba(142, 224, 36, 0.3)',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: isLight ? '#284710' : '#dcf5cb'
            }}>
              <Award size={14} color="var(--brand-green)" />
              <span>Full Packages from ₹1,999/-</span>
            </div>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '999px',
              background: isLight ? '#edf5ec' : 'rgba(142, 224, 36, 0.12)',
              border: isLight ? '1px solid rgba(86, 152, 20, 0.3)' : '1px solid rgba(142, 224, 36, 0.3)',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: isLight ? '#284710' : '#dcf5cb'
            }}>
              <ShieldCheck size={14} color="var(--brand-green)" />
              <span>9H Nano Ceramic Coating</span>
            </div>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '999px',
              background: isLight ? '#edf5ec' : 'rgba(142, 224, 36, 0.12)',
              border: isLight ? '1px solid rgba(86, 152, 20, 0.3)' : '1px solid rgba(142, 224, 36, 0.3)',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: isLight ? '#284710' : '#dcf5cb'
            }}>
              <Sparkles size={14} color="var(--brand-green)" />
              <span>Authorized Tyres & Alignment</span>
            </div>
          </div>

          {/* Action CTA Buttons */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '12px'
          }}>
            <button
              onClick={() => onOpenBooking()}
              className="btn-primary"
              style={{
                padding: '14px 28px',
                fontSize: '0.98rem',
                borderRadius: '12px'
              }}
            >
              <Calendar size={18} />
              <span>Book Appointment Now</span>
              <ArrowRight size={16} />
            </button>

            <a
              href="#services"
              className="btn-secondary"
              style={{
                padding: '14px 22px',
                fontSize: '0.94rem',
                borderRadius: '12px',
                textDecoration: 'none'
              }}
            >
              <Sparkles size={16} />
              <span>Explore Services</span>
            </a>

            <button
              onClick={onOpenFlyer}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'transparent',
                border: isLight ? '1.5px solid rgba(86, 152, 20, 0.4)' : '1.5px solid rgba(142, 224, 36, 0.4)',
                color: isLight ? '#284710' : '#dcf5cb',
                padding: '13px 20px',
                borderRadius: '12px',
                fontSize: '0.9rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              <Award size={16} color="var(--brand-green)" />
              <span>View 2nd Anniv Flyer</span>
            </button>
          </div>

        </div>
      </div>

      {/* Compact Services Marquee Ticker */}
      <div style={{
        marginTop: '36px',
        borderTop: isLight ? '1px solid rgba(86, 152, 20, 0.2)' : '1px solid rgba(142, 224, 36, 0.2)',
        borderBottom: isLight ? '1px solid rgba(86, 152, 20, 0.2)' : '1px solid rgba(142, 224, 36, 0.2)',
        background: isLight ? 'rgba(237, 245, 236, 0.9)' : 'rgba(9, 13, 10, 0.85)',
        padding: '10px 0',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          display: 'inline-flex',
          animation: 'marquee 28s linear infinite',
          gap: '32px'
        }}>
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              color: isLight ? '#284710' : '#dcf5cb'
            }}>
              <span style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                background: 'var(--brand-green)'
              }} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .mobile-anniv-text {
          display: none;
        }
        @media (max-width: 768px) {
          .hero-section {
            padding-top: 130px !important;
            min-height: auto !important;
            padding-bottom: 24px !important;
          }
          .hero-anniversary-badge {
            padding: 5px 12px !important;
            margin-bottom: 14px !important;
            max-width: 100% !important;
          }
          .desktop-anniv-text {
            display: none !important;
          }
          .mobile-anniv-text {
            display: inline !important;
            font-size: 0.76rem !important;
          }
        }
      `}</style>
    </section>
  );
}

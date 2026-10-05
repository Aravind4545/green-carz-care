import React from 'react';
import { Sparkles, Calendar, ShieldCheck, ArrowRight, Star, Clock, CheckCircle2, Award, Zap } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

export function Hero({ onOpenBooking, onOpenFlyer, theme }) {
  const isLight = theme === 'light';

  const tickerItems = [
    'TYRE CHANGING', 'ALLOY WHEELS', '3D ALIGNMENT', 'COMPUTERIZED BALANCING',
    'AC TOP UP', 'N2 NITROGEN AIR', 'ENGINE OIL CHECK', 'BRANDED BATTERIES',
    'NANO CERAMIC COATING', 'STEAM SPA', 'TEFLON COATING', '37-POINT CHECKUP'
  ];

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingTop: '135px',
      paddingBottom: '40px',
      overflow: 'hidden',
      transition: 'all 0.3s ease'
    }}>
      {/* Background Car Wash & Detailing Image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/assets/hero-detailing.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        zIndex: 0,
        filter: isLight ? 'brightness(0.95) contrast(1.05)' : 'brightness(0.7) contrast(1.15)',
        transition: 'filter 0.3s ease'
      }} />

      {/* Lighting & Vignette Overlay - Perfectly matched to Theme */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: isLight
          ? `
            linear-gradient(180deg, rgba(246, 250, 246, 0.94) 0%, rgba(246, 250, 246, 0.82) 45%, var(--bg-primary) 100%),
            radial-gradient(circle at 20% 45%, rgba(86, 152, 20, 0.12) 0%, transparent 60%)
          `
          : `
            linear-gradient(180deg, rgba(11, 15, 12, 0.88) 0%, rgba(11, 15, 12, 0.65) 50%, var(--bg-primary) 100%),
            radial-gradient(circle at 20% 45%, rgba(142, 224, 36, 0.28) 0%, transparent 60%),
            radial-gradient(circle at 80% 30%, rgba(142, 224, 36, 0.15) 0%, transparent 50%)
          `,
        zIndex: 1,
        transition: 'background 0.3s ease'
      }} />

      {/* Floating Precision Grid Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: isLight
          ? 'linear-gradient(rgba(86, 152, 20, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(86, 152, 20, 0.05) 1px, transparent 1px)'
          : 'linear-gradient(rgba(142, 224, 36, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(142, 224, 36, 0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        zIndex: 1,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '860px' }}>
          
          {/* Top Pill Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: isLight ? '#ffffff' : 'rgba(18, 26, 20, 0.88)',
            border: isLight ? '1.5px solid rgba(86, 152, 20, 0.4)' : '1.5px solid rgba(142, 224, 36, 0.5)',
            backdropFilter: 'blur(10px)',
            borderRadius: '999px',
            padding: '7px 20px',
            marginBottom: '22px',
            boxShadow: isLight ? '0 4px 16px rgba(0, 0, 0, 0.06)' : '0 4px 20px rgba(0, 0, 0, 0.4)'
          }}>
            <span style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: 'var(--brand-green)',
              color: isLight ? '#ffffff' : '#081009'
            }}>
              <Sparkles size={12} />
            </span>
            <span style={{
              fontSize: '0.86rem',
              fontWeight: 800,
              color: isLight ? '#2f5509' : '#c9f58e',
              letterSpacing: '0.03em'
            }}>
              2nd Anniversary Celebration Offer • Jangareddygudem
            </span>
          </div>

          {/* Main Hero Headline - Attractive, Crisp, Logo-Synced */}
          <h1 style={{
            fontSize: 'clamp(2.4rem, 5.4vw, 4.3rem)',
            fontWeight: 900,
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            color: isLight ? '#101611' : '#ffffff',
            marginBottom: '22px',
            textShadow: isLight ? 'none' : '0 4px 30px rgba(0, 0, 0, 0.9)'
          }}>
            Give Your Car The Royal Care It Deserves at <br />
            <span style={{
              color: isLight ? '#101611' : '#ffffff',
              fontWeight: 900
            }}>
              GREEN{' '}
            </span>
            <span style={{
              color: isLight ? '#4f8c14' : '#8ee024',
              fontWeight: 900,
              textShadow: isLight 
                ? '0 2px 10px rgba(79, 140, 20, 0.2)' 
                : '0 0 35px rgba(142, 224, 36, 0.6), 0 0 10px rgba(142, 224, 36, 0.35)',
              display: 'inline-block'
            }}>
              CARZ CARE
            </span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.22rem)',
            color: isLight ? '#38483a' : '#d6dfd7',
            lineHeight: 1.6,
            maxWidth: '720px',
            marginBottom: '36px',
            fontWeight: 500,
            textShadow: isLight ? 'none' : '0 2px 10px rgba(0, 0, 0, 0.8)'
          }}>
            Experience showroom mirror gloss with our <strong>Intensive Interior Beautification</strong>, 
            <strong> 9H Nano Ceramic Coating</strong>, <strong>3D Laser Wheel Alignment</strong>, and authorized 
            <strong> Yokohama & Michelin</strong> tyre hub on Eluru Road.
          </p>

          {/* Action CTAs: High Visibility Buttons */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '44px'
          }}>
            {/* Primary Action Button */}
            <button
              onClick={() => onOpenBooking()}
              className="btn-primary"
              style={{
                fontSize: '1.02rem',
                padding: '16px 32px',
                borderRadius: '999px'
              }}
            >
              <Calendar size={18} />
              <span>Book Appointment Now</span>
              <ArrowRight size={18} />
            </button>

            {/* VIEW PACKAGES BUTTON - ULTRA HIGH VISIBILITY */}
            <a
              href="#packages"
              className="btn-hero-packages"
              style={{
                textDecoration: 'none',
                background: isLight ? '#ffffff' : '#ffffff',
                color: '#081009',
                border: '2.5px solid var(--brand-green)',
                boxShadow: isLight 
                  ? '0 8px 24px rgba(0, 0, 0, 0.08), 0 0 20px rgba(86, 152, 20, 0.2)' 
                  : '0 8px 30px rgba(0, 0, 0, 0.5), 0 0 30px rgba(142, 224, 36, 0.45)'
              }}
            >
              <Award size={20} color={isLight ? '#447b0e' : '#6ecc14'} />
              <span>View Packages from ₹1,999/-</span>
            </a>

            {/* View Original Flyer Button */}
            <button
              onClick={onOpenFlyer}
              style={{
                background: isLight ? 'rgba(255, 255, 255, 0.9)' : 'rgba(16, 24, 18, 0.85)',
                border: isLight ? '1.5px dashed rgba(86, 152, 20, 0.6)' : '1.5px dashed rgba(142, 224, 36, 0.6)',
                color: isLight ? '#2f5509' : '#d2fa98',
                padding: '14px 22px',
                borderRadius: '999px',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '0.92rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease',
                backdropFilter: 'blur(8px)',
                boxShadow: isLight ? '0 2px 10px rgba(0, 0, 0, 0.04)' : 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--brand-green)';
                e.currentTarget.style.background = isLight ? '#ffffff' : 'rgba(142, 224, 36, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = isLight ? 'rgba(86, 152, 20, 0.6)' : 'rgba(142, 224, 36, 0.6)';
                e.currentTarget.style.background = isLight ? 'rgba(255, 255, 255, 0.9)' : 'rgba(16, 24, 18, 0.85)';
              }}
            >
              <Sparkles size={16} />
              <span>View Original Flyer</span>
            </button>
          </div>

          {/* Key Value Stats Strip */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '14px',
            maxWidth: '820px'
          }}>
            <div style={{
              background: isLight ? '#ffffff' : 'rgba(16, 22, 17, 0.85)',
              border: isLight ? '1px solid rgba(20, 36, 22, 0.12)' : '1px solid rgba(142, 224, 36, 0.3)',
              borderRadius: '14px',
              padding: '16px 20px',
              boxShadow: isLight ? '0 4px 16px rgba(0, 0, 0, 0.05)' : 'none',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <Clock size={16} color="var(--brand-green)" />
                <span style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                  2+ YEARS
                </span>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>
                Trusted car care hub in Jangareddygudem
              </p>
            </div>

            <div style={{
              background: isLight ? '#ffffff' : 'rgba(16, 22, 17, 0.85)',
              border: isLight ? '1px solid rgba(20, 36, 22, 0.12)' : '1px solid rgba(142, 224, 36, 0.3)',
              borderRadius: '14px',
              padding: '16px 20px',
              boxShadow: isLight ? '0 4px 16px rgba(0, 0, 0, 0.05)' : 'none',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <ShieldCheck size={16} color="var(--brand-green)" />
                <span style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                  37-POINT
                </span>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>
                Free safety inspection with every service
              </p>
            </div>

            <div style={{
              background: isLight ? '#ffffff' : 'rgba(16, 22, 17, 0.85)',
              border: isLight ? '1px solid rgba(20, 36, 22, 0.12)' : '1px solid rgba(142, 224, 36, 0.3)',
              borderRadius: '14px',
              padding: '16px 20px',
              boxShadow: isLight ? '0 4px 16px rgba(0, 0, 0, 0.05)' : 'none',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <Zap size={16} color="var(--brand-green)" />
                <span style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                  SAVE 63%
                </span>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>
                Packages from ₹1,999 (was ₹5,400)
              </p>
            </div>

            <div style={{
              background: isLight ? '#ffffff' : 'rgba(16, 22, 17, 0.85)',
              border: isLight ? '1px solid rgba(20, 36, 22, 0.12)' : '1px solid rgba(142, 224, 36, 0.3)',
              borderRadius: '14px',
              padding: '16px 20px',
              boxShadow: isLight ? '0 4px 16px rgba(0, 0, 0, 0.05)' : 'none',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <Star size={16} color="#ffd13b" fill="#ffd13b" />
                <span style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                  4.9 / 5.0
                </span>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>
                1,200+ Satisfied vehicle owners
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Infinite Automotive Services Marquee Ticker */}
      <div style={{
        marginTop: '56px',
        position: 'relative',
        zIndex: 2,
        background: isLight ? '#ffffff' : '#0c110d',
        borderTop: isLight ? '1px solid rgba(20, 36, 22, 0.1)' : '1px solid rgba(142, 224, 36, 0.3)',
        borderBottom: isLight ? '1px solid rgba(20, 36, 22, 0.1)' : '1px solid rgba(142, 224, 36, 0.3)',
        padding: '13px 0',
        overflow: 'hidden',
        boxShadow: isLight ? '0 2px 8px rgba(0, 0, 0, 0.03)' : 'none'
      }}>
        <div style={{
          display: 'flex',
          width: 'max-content',
          animation: 'marquee 30s linear infinite',
          gap: '40px'
        }}>
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.92rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              color: isLight ? '#284710' : '#dcf5cb'
            }}>
              <span style={{
                width: '6px',
                height: '6px',
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
      `}</style>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Moon, Sun, Menu, X, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

export function Navbar({ theme, toggleTheme, onOpenBooking, onOpenFlyer }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTelugu, setShowTelugu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Packages', href: '#packages' },
    { label: 'Services', href: '#services' },
    { label: 'Before & After', href: '#transformation' },
    { label: 'Estimator', href: '#calculator' },
    { label: 'Inspection', href: '#health-check' },
    { label: 'Contact', href: '#contact' },
  ];

  const isLight = theme === 'light';

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease'
    }}>
      {/* Top Announcement Bar - Seamless with theme */}
      <div style={{
        background: isLight 
          ? '#edf5ec' 
          : 'rgba(9, 13, 10, 0.95)',
        borderBottom: isLight 
          ? '1px solid rgba(86, 152, 20, 0.2)' 
          : '1px solid rgba(142, 224, 36, 0.25)',
        padding: '5px 24px',
        fontSize: '0.8rem',
        color: isLight ? '#284710' : '#dcf5cb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '8px',
        transition: 'background-color 0.3s ease'
      }}>
        {/* Left: Anniversary Tag & Community Message */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{
            background: isLight ? 'var(--brand-green)' : 'var(--brand-green-gradient)',
            color: isLight ? '#ffffff' : '#081009',
            fontWeight: 800,
            fontSize: '0.68rem',
            padding: '2px 8px',
            borderRadius: '4px',
            textTransform: 'uppercase',
            letterSpacing: '0.06em'
          }}>
            2nd Anniversary Special
          </span>

          <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>
            {showTelugu ? (
              <span>2 సంవత్సరాల విశ్వాసానికి ధన్యవాదాలు! ప్యాకేజీలు ₹1,999/- నుండి ప్రారంభం.</span>
            ) : (
              <span>Celebrating 2+ years of trust in Jangareddygudem! Detailing packages from ₹1,999/-</span>
            )}
          </span>

          <button
            onClick={() => setShowTelugu(!showTelugu)}
            style={{
              background: 'transparent',
              border: 'none',
              color: isLight ? '#447b0e' : '#a8f547',
              fontSize: '0.75rem',
              cursor: 'pointer',
              textDecoration: 'underline',
              fontWeight: 700,
              padding: '0 2px'
            }}
          >
            [{showTelugu ? 'English' : 'తెలుగు'}]
          </button>
        </div>

        {/* Right: Quick Flyer & Call Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <button
            onClick={onOpenFlyer}
            style={{
              background: isLight ? 'rgba(86, 152, 20, 0.15)' : 'rgba(142, 224, 36, 0.18)',
              border: isLight ? '1px solid rgba(86, 152, 20, 0.35)' : '1px solid rgba(142, 224, 36, 0.4)',
              color: isLight ? '#2f5509' : '#b8fa4f',
              padding: '2px 10px',
              borderRadius: '999px',
              fontSize: '0.72rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <Sparkles size={11} /> View Official Flyer
          </button>

          <a
            href={`tel:${BUSINESS_INFO.phones[0].clean}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              color: isLight ? '#38660a' : '#b8fa4f',
              fontWeight: 800,
              fontSize: '0.8rem',
              textDecoration: 'none'
            }}
          >
            <Phone size={12} /> {BUSINESS_INFO.phones[0].number}
          </a>
        </div>
      </div>

      {/* Main Spacious, Integrated Glass Navbar */}
      <nav style={{
        background: isLight
          ? (isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.92)')
          : (isScrolled ? 'rgba(11, 15, 12, 0.96)' : 'rgba(11, 15, 12, 0.78)'),
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: isLight
          ? '1px solid rgba(20, 36, 22, 0.12)'
          : (isScrolled ? '1px solid var(--border-highlight)' : '1px solid rgba(255, 255, 255, 0.08)'),
        boxShadow: isScrolled
          ? (isLight ? '0 4px 20px rgba(0, 0, 0, 0.06)' : '0 10px 35px rgba(0, 0, 0, 0.5)')
          : 'none',
        transition: 'all 0.3s ease',
        padding: isScrolled ? '10px 0' : '14px 0'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px'
        }}>
          {/* Brand Logo & Title */}
          <a href="#" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            flexShrink: 0
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: isLight ? '#ffffff' : 'linear-gradient(135deg, #182219 0%, #0f1610 100%)',
              border: isLight ? '1.5px solid rgba(86, 152, 20, 0.35)' : '1.5px solid var(--border-highlight)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: isLight ? '0 2px 10px rgba(0, 0, 0, 0.06)' : '0 4px 15px rgba(142, 224, 36, 0.25)',
              overflow: 'hidden'
            }}>
              <img
                src={isLight ? '/assets/logo-light-clean.png' : '/assets/logo-icon.png'}
                alt="Green Carz Care Logo"
                style={{
                  width: '88%',
                  height: '88%',
                  objectFit: 'contain'
                }}
              />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.4rem',
                  fontWeight: 900,
                  letterSpacing: '0.02em',
                  color: isLight ? '#101611' : '#ffffff',
                  lineHeight: 1
                }}>
                  GREEN
                </span>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  color: isLight ? '#4f8c14' : 'var(--brand-green)',
                  letterSpacing: '0.08em',
                  lineHeight: 1
                }}>
                  CARZ CARE
                </span>
              </div>
              <p style={{
                fontSize: '0.7rem',
                color: isLight ? '#556957' : 'var(--text-muted)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                margin: 0,
                marginTop: '3px',
                fontWeight: 600
              }}>
                Detailing • Tyres • Jangareddygudem
              </p>
            </div>
          </a>

          {/* Desktop Nav Links - Single Line, Never Wraps */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px'
          }} className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  color: isLight ? '#243326' : 'var(--text-secondary)',
                  transition: 'color 0.2s ease',
                  padding: '6px 0',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = isLight ? '#447b0e' : 'var(--brand-green)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isLight ? '#243326' : 'var(--text-secondary)';
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action Controls */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            flexShrink: 0
          }}>
            {/* Divider */}
            <div style={{
              width: '1px',
              height: '24px',
              background: isLight ? 'rgba(20, 36, 22, 0.15)' : 'rgba(255, 255, 255, 0.12)'
            }} className="desktop-divider" />

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              title={`Switch to ${isLight ? 'Dark Detailing Studio' : 'Light Showroom'} Mode`}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: isLight ? '#edf5ec' : 'var(--bg-tertiary)',
                border: isLight ? '1.5px solid rgba(86, 152, 20, 0.35)' : '1px solid var(--border-color)',
                color: isLight ? '#36640a' : 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--brand-green)';
                e.currentTarget.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = isLight ? 'rgba(86, 152, 20, 0.35)' : 'var(--border-color)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {isLight ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Book Appointment CTA */}
            <button
              onClick={() => onOpenBooking()}
              className="btn-primary"
              style={{
                padding: '10px 22px',
                fontSize: '0.9rem',
                borderRadius: '999px',
                whiteSpace: 'nowrap'
              }}
            >
              <Calendar size={15} />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              style={{
                display: 'none',
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: isLight ? '#edf5ec' : 'var(--bg-tertiary)',
                border: '1px solid var(--border-color)',
                color: isLight ? '#101611' : 'var(--text-primary)',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div style={{
            background: isLight ? '#ffffff' : 'var(--bg-secondary)',
            borderTop: isLight ? '1px solid #e2eee0' : '1px solid var(--border-color)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            boxShadow: 'var(--shadow-lg)'
          }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: isLight ? '#101611' : 'var(--text-primary)',
                  padding: '8px 0',
                  borderBottom: isLight ? '1px solid #edf5ec' : '1px solid var(--border-subtle)'
                }}
              >
                {link.label}
              </a>
            ))}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '8px' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="btn-primary"
                style={{ width: '100%' }}
              >
                <Calendar size={16} /> Book Appointment
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFlyer();
                }}
                className="btn-secondary"
                style={{ width: '100%' }}
              >
                <Sparkles size={16} /> View Official Flyer
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phones[0].clean}`}
                className="btn-whatsapp"
                style={{ width: '100%', textDecoration: 'none' }}
              >
                <Phone size={16} /> Call {BUSINESS_INFO.phones[0].number}
              </a>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 992px) {
          .desktop-nav, .desktop-divider {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}

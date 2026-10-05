import React from 'react';
import { Home, Tag, Sparkles, Calculator, Calendar, Phone } from 'lucide-react';

export function MobileBottomNav({ onOpenBooking, theme }) {
  const isLight = theme === 'light';

  return (
    <nav 
      className="mobile-bottom-nav"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: isLight 
          ? 'rgba(255, 255, 255, 0.96)' 
          : 'rgba(11, 15, 12, 0.96)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: isLight 
          ? '1.5px solid rgba(86, 152, 20, 0.25)' 
          : '1.5px solid var(--border-highlight)',
        boxShadow: isLight 
          ? '0 -4px 20px rgba(0, 0, 0, 0.08)' 
          : '0 -10px 30px rgba(0, 0, 0, 0.6)',
        padding: '6px 10px calc(6px + env(safe-area-inset-bottom, 0px)) 10px',
        display: 'none',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        maxWidth: '100vw',
        boxSizing: 'border-box'
      }}
    >
      {/* Tab 1: Home */}
      <a
        href="#"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3px',
          color: isLight ? '#2f4532' : '#c3d1c5',
          textDecoration: 'none',
          padding: '4px 8px',
          borderRadius: '8px',
          fontSize: '0.68rem',
          fontWeight: 700,
          transition: 'color 0.2s ease'
        }}
      >
        <Home size={19} color="var(--brand-green)" />
        <span>Home</span>
      </a>

      {/* Tab 2: Packages */}
      <a
        href="#packages"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3px',
          color: isLight ? '#2f4532' : '#c3d1c5',
          textDecoration: 'none',
          padding: '4px 8px',
          borderRadius: '8px',
          fontSize: '0.68rem',
          fontWeight: 700,
          transition: 'color 0.2s ease'
        }}
      >
        <Tag size={19} color="var(--brand-green)" />
        <span>Packages</span>
      </a>

      {/* Tab 3: Services */}
      <a
        href="#services"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3px',
          color: isLight ? '#2f4532' : '#c3d1c5',
          textDecoration: 'none',
          padding: '4px 8px',
          borderRadius: '8px',
          fontSize: '0.68rem',
          fontWeight: 700,
          transition: 'color 0.2s ease'
        }}
      >
        <Sparkles size={19} color="var(--brand-green)" />
        <span>Services</span>
      </a>

      {/* Tab 4: Studio Gallery */}
      <a
        href="#gallery"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3px',
          color: isLight ? '#2f4532' : '#c3d1c5',
          textDecoration: 'none',
          padding: '4px 8px',
          borderRadius: '8px',
          fontSize: '0.68rem',
          fontWeight: 700,
          transition: 'color 0.2s ease'
        }}
      >
        <span style={{ fontSize: '18px', lineHeight: 1 }}>📸</span>
        <span>Studio</span>
      </a>

      {/* Tab 5: Book Appointment - Highlighted Pill */}
      <button
        onClick={() => onOpenBooking()}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          background: isLight ? 'var(--brand-green)' : 'var(--brand-green-gradient)',
          color: isLight ? '#ffffff' : '#081009',
          border: 'none',
          padding: '6px 14px',
          borderRadius: '12px',
          fontSize: '0.7rem',
          fontWeight: 900,
          cursor: 'pointer',
          boxShadow: isLight 
            ? '0 2px 10px rgba(86, 152, 20, 0.35)' 
            : '0 4px 15px rgba(142, 224, 36, 0.4)'
        }}
      >
        <Calendar size={18} strokeWidth={2.5} />
        <span>BOOK</span>
      </button>
    </nav>
  );
}

import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

export function FloatingActions({ onOpenBooking }) {
  return (
    <div 
      className="floating-actions-container"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        alignItems: 'flex-end'
      }}
    >
      {/* Quick Booking FAB - desktop/tablet only */}
      <button
        onClick={() => onOpenBooking()}
        className="btn-primary floating-book-btn"
        style={{
          borderRadius: '999px',
          padding: '12px 20px',
          fontSize: '0.88rem',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4), 0 0 20px rgba(144, 192, 67, 0.4)'
        }}
        title="Book Appointment"
      >
        <Calendar size={18} />
        <span>Book Slot</span>
      </button>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
          'Hello Green Carz Care! I would like to inquire about car detailing / wash services in Jangareddygudem.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: '#25D366',
          color: '#ffffff',
          borderRadius: '999px',
          padding: '12px 18px',
          fontWeight: 700,
          fontSize: '0.88rem',
          boxShadow: '0 8px 25px rgba(37, 211, 102, 0.45)',
          textDecoration: 'none',
          transition: 'all 0.25s ease'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        title="Chat on WhatsApp"
      >
        <MessageSquare size={18} fill="#ffffff" />
        <span>WhatsApp</span>
      </a>

      {/* Direct Call Button */}
      <a
        href={`tel:${BUSINESS_INFO.phones[0].clean}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          background: 'var(--brand-green)',
          color: '#0e130f',
          boxShadow: '0 6px 20px rgba(144, 192, 67, 0.4)',
          textDecoration: 'none',
          transition: 'all 0.25s ease'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        title="Call Green Carz Care"
      >
        <Phone size={20} />
      </a>
    </div>
  );
}

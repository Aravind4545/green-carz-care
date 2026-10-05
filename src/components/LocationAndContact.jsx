import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/servicesData';
import { MapPin, Phone, Clock, MessageSquare, Navigation, CheckCircle2, Send, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';

export function LocationAndContact({ onOpenBooking, theme }) {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    carModel: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) return;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Send formatted WhatsApp
    const text = `Hello Green Carz Care!\n*New Inquiry from Website*\n*Name:* ${formState.name}\n*Phone:* ${formState.phone}\n*Vehicle:* ${formState.carModel || 'Not specified'}\n*Message:* ${formState.message || 'Looking for service details'}`;
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');

    setSubmitted(true);
  };

  return (
    <section id="contact" className="section" style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)'
    }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <MapPin size={14} /> Visit Our Workshop
          </div>
          <h2 className="section-title">
            Prime Location on <span className="text-gradient-green">Eluru Road, Jangareddygudem</span>
          </h2>
          <p className="section-subtitle">
            Conveniently situated opposite Kids E.M. School with dedicated drive-in wash ramps, hydraulic scissor lifts, and secure premises.
          </p>
        </div>

        {/* Content Grid: Contact Details & Quick Form */}
        <div className="grid-2" style={{ maxWidth: '1150px', margin: '0 auto 48px auto' }}>
          {/* Left Column: Workshop Details & Phone Directory */}
          <div className="glass-card" style={{ padding: '36px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--text-primary)' }}>
              Contact & Workshop Directory
            </h3>

            {/* Address Block */}
            <div style={{
              display: 'flex',
              gap: '16px',
              marginBottom: '24px',
              paddingBottom: '20px',
              borderBottom: '1px solid var(--border-color)'
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(144, 192, 67, 0.15)',
                color: 'var(--brand-green)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <MapPin size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', marginBottom: '4px' }}>Workshop Address</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  <strong>RS No. 463/2</strong>, Beside Sri Allam Sivaram Krishna House,<br />
                  Opposite Kids E.M. School, Eluru Road,<br />
                  Jangareddigudem Bazar, <strong>Jangareddygudem - 534447</strong>,<br />
                  West Godavari District, Andhra Pradesh.
                </p>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--brand-green)',
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    marginTop: '8px'
                  }}
                >
                  <Navigation size={14} /> Open in Google Maps Directions →
                </a>
              </div>
            </div>

            {/* Phone Hotlines */}
            <div style={{
              display: 'flex',
              gap: '16px',
              marginBottom: '24px',
              paddingBottom: '20px',
              borderBottom: '1px solid var(--border-color)'
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(144, 192, 67, 0.15)',
                color: 'var(--brand-green)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Phone size={22} />
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '1.05rem', marginBottom: '8px' }}>Phone Numbers & Support</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '10px' }}>
                  {BUSINESS_INFO.phones.map((p, idx) => (
                    <a
                      key={idx}
                      href={`tel:${p.clean}`}
                      style={{
                        padding: '8px 12px',
                        background: 'var(--bg-tertiary)',
                        borderRadius: '10px',
                        border: '1px solid var(--border-color)',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--brand-green)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-color)';
                      }}
                    >
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{p.label}</div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--brand-green-light)' }}>
                        {p.number}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(144, 192, 67, 0.15)',
                color: 'var(--brand-green)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Clock size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', marginBottom: '4px' }}>Working Hours</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                  <strong>Monday to Sunday:</strong> 8:00 AM – 8:30 PM<br />
                  <span style={{ color: 'var(--brand-green-light)', fontWeight: 600 }}>
                    ★ Open 7 Days a week to serve you better!
                  </span>
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Callback Request Form */}
          <div className="glass-card" style={{ padding: '36px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: 'var(--text-primary)' }}>
              Request Instant Callback
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Leave your contact details and our service manager will call you within 15 minutes with time slots & answers.
            </p>

            {submitted ? (
              <div style={{
                background: 'rgba(144, 192, 67, 0.15)',
                border: '1px solid var(--brand-green)',
                borderRadius: '16px',
                padding: '30px',
                textAlign: 'center'
              }}>
                <CheckCircle2 size={48} color="var(--brand-green)" style={{ margin: '0 auto 12px auto' }} />
                <h4 style={{ fontSize: '1.3rem', marginBottom: '6px' }}>Inquiry Sent Successfully!</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                  Our team is connecting with you right now. You can also chat directly on WhatsApp.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                  style={{ fontSize: '0.88rem' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Varma"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98480 12345"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Car Model & Year</label>
                  <input
                    type="text"
                    placeholder="e.g. Hyundai Creta 2023"
                    value={formState.carModel}
                    onChange={(e) => setFormState({ ...formState, carModel: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Required Service / Note</label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Looking for SUV full package, AC gas refill and wheel alignment"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
                >
                  <Send size={18} />
                  <span>Submit Inquiry & Connect on WhatsApp</span>
                </button>
              </form>
            )}

          </div>
        </div>

        {/* Live Interactive Map Box */}
        <div style={{
          maxWidth: '1150px',
          margin: '0 auto',
          borderRadius: '24px',
          overflow: 'hidden',
          border: '1px solid var(--border-highlight)',
          boxShadow: 'var(--shadow-md)',
          height: '380px',
          position: 'relative'
        }}>
          <iframe
            title="Green Carz Care Jangareddygudem Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15239.544131599557!2d81.28581781619864!3d17.12933454792686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a365f573efb27d1%3A0xb36f2f0a82740bc4!2sJangareddygudem%2C%20Andhra%20Pradesh%20534447!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ 
              border: 0, 
              filter: theme === 'dark' ? 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' : 'none' 
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            background: theme === 'light' ? 'rgba(255, 255, 255, 0.95)' : 'rgba(14, 18, 15, 0.92)',
            backdropFilter: 'blur(10px)',
            border: '1px solid var(--border-highlight)',
            borderRadius: '16px',
            padding: '16px 20px',
            maxWidth: '380px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--brand-green)' }} />
              <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>Green Carz Care Studio</strong>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0, marginBottom: '8px' }}>
              Beside Sri Allam Sivaram Krishna House, Opp. Kids E.M. School, Eluru Road, Jangareddygudem
            </p>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-green"
              style={{ padding: '6px 14px', fontSize: '0.8rem', width: '100%' }}
            >
              <Navigation size={12} /> Get GPS Directions
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

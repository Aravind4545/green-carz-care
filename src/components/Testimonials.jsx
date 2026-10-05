import React from 'react';
import { TESTIMONIALS } from '../data/servicesData';
import { Star, MessageSquareQuote, CheckCircle2, UserCheck } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="section" style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      borderBottom: '1px solid var(--border-color)'
    }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <UserCheck size={14} /> Verified Client Stories
          </div>
          <h2 className="section-title">
            Trusted by Car Owners Across <br />
            <span className="text-gradient-green">Jangareddygudem & West Godavari</span>
          </h2>
          <p className="section-subtitle">
            Read genuine experiences from our community who rely on Green Carz Care for routine servicing, paint protection, and tyre replacements.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid-3" style={{ maxWidth: '1150px', margin: '0 auto' }}>
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                {/* Star Rating */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  marginBottom: '16px'
                }}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#ffd13b" color="#ffd13b" />
                  ))}
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '8px' }}>
                    {item.date}
                  </span>
                </div>

                {/* Review Text */}
                <p style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-primary)',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  marginBottom: '24px'
                }}>
                  "{item.review}"
                </p>
              </div>

              {/* Author & Vehicle Info */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                paddingTop: '16px',
                borderTop: '1px solid var(--border-color)'
              }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'var(--brand-green-gradient)',
                  color: '#0e130f',
                  fontWeight: 800,
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {item.name.charAt(0)}
                </div>

                <div>
                  <div style={{
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <span>{item.name}</span>
                    <CheckCircle2 size={14} color="var(--brand-green)" />
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--brand-green-light)', fontWeight: 600 }}>
                    {item.vehicle} • {item.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { HEALTH_CHECKUP_37_POINTS } from '../data/servicesData';
import { CheckCircle2, ShieldCheck, FileText, Check, Award } from 'lucide-react';

export function HealthCheckup37Point({ onOpenBooking }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Engine & Powertrain',
    'Fluids & Filters',
    'Electrical & AC',
    'Lighting & Safety',
    'Brakes & Tyres',
    'Underbody & Suspension'
  ];

  const filteredPoints = selectedCategory === 'All'
    ? HEALTH_CHECKUP_37_POINTS
    : HEALTH_CHECKUP_37_POINTS.filter(p => p.category === selectedCategory);

  return (
    <section id="health-check" className="section" style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      borderBottom: '1px solid var(--border-color)'
    }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <ShieldCheck size={14} /> Comprehensive Multi-Point Inspection
          </div>
          <h2 className="section-title">
            The <span className="text-gradient-green">37-Point Vehicle Health Check</span>
          </h2>
          <p className="section-subtitle">
            Every vehicle entrusted to Green Carz Care undergoes our rigorous digital health inspection. We verify fluids, mechanical components, electricals, and safety items to prevent expensive breakdowns.
          </p>

          {/* Category Tabs */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '8px',
            marginTop: '24px'
          }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '7px 16px',
                  borderRadius: '999px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  border: selectedCategory === cat ? '1px solid var(--brand-green)' : '1px solid var(--border-color)',
                  background: selectedCategory === cat ? 'var(--brand-green)' : 'var(--bg-tertiary)',
                  color: selectedCategory === cat ? '#0e130f' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 37-Point Checklist Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '12px',
          maxWidth: '1150px',
          margin: '0 auto 40px auto'
        }}>
          {filteredPoints.map((point) => (
            <div
              key={point.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                background: 'var(--bg-card)',
                borderRadius: '12px',
                border: '1px solid var(--border-color)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--brand-green)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 800,
                color: 'var(--brand-green)',
                background: 'rgba(144, 192, 67, 0.12)',
                padding: '2px 8px',
                borderRadius: '6px',
                flexShrink: 0
              }}>
                #{point.id.toString().padStart(2, '0')}
              </span>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  {point.name}
                </div>
                <div style={{
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)'
                }}>
                  {point.category}
                </div>
              </div>

              <CheckCircle2 size={16} color="var(--brand-green)" style={{ flexShrink: 0 }} />
            </div>
          ))}
        </div>

        {/* Inspection Guarantee Banner */}
        <div style={{
          maxWidth: '850px',
          margin: '0 auto',
          background: 'linear-gradient(135deg, rgba(144, 192, 67, 0.15) 0%, rgba(144, 192, 67, 0.05) 100%)',
          border: '1.5px dashed var(--brand-green)',
          borderRadius: '18px',
          padding: '24px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'var(--brand-green)',
              color: '#0e130f',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Award size={26} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>
                Included FREE With All Special Offer Packages!
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                Receive a clear report from our senior technician with prioritized recommendations.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenBooking('37-Point Health Checkup')}
            className="btn-primary"
            style={{ padding: '10px 22px', fontSize: '0.88rem' }}
          >
            Schedule Free Inspection
          </button>
        </div>

      </div>
    </section>
  );
}

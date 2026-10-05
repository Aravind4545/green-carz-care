import React, { useState } from 'react';
import { VEHICLE_PACKAGES, BUSINESS_INFO } from '../data/servicesData';
import { Check, Sparkles, Calendar, Tag, ArrowRight, ShieldCheck, Award, Phone } from 'lucide-react';

export function SpecialOffers({ onOpenBooking, onOpenFlyer }) {
  const [selectedPackageId, setSelectedPackageId] = useState('suv');

  const activePackage = VEHICLE_PACKAGES.find(p => p.id === selectedPackageId) || VEHICLE_PACKAGES[0];

  return (
    <section id="packages" className="section" style={{
      background: 'var(--bg-primary)',
      padding: '70px 0'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '32px' }}>
          <div className="section-tag">
            <Tag size={14} /> Official 2nd Anniversary Pricing
          </div>
          <h2 className="section-title">
            All-Inclusive <span className="text-gradient-green">Celebration Packages</span>
          </h2>
          <p className="section-subtitle">
            Choose your vehicle type below. Includes Water Wash, Interior Beautification, Wax Buffing, Fumigation, A/C Sanitization & Free General Inspection!
          </p>
        </div>

        {/* Vehicle Segment Tabs */}
        <div 
          className="vehicle-segment-tabs"
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '32px'
          }}
        >
          {VEHICLE_PACKAGES.map((pkg) => {
            const isSelected = pkg.id === selectedPackageId;
            return (
              <button
                key={pkg.id}
                onClick={() => setSelectedPackageId(pkg.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: '12px',
                  background: isSelected ? 'var(--brand-green)' : 'var(--bg-secondary)',
                  border: isSelected ? '1.5px solid var(--brand-green)' : '1px solid var(--border-color)',
                  color: isSelected ? '#ffffff' : 'var(--text-primary)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? '0 4px 16px rgba(86, 152, 20, 0.3)' : 'none'
                }}
              >
                <div style={{ textAlign: 'left' }}>
                  <div style={{
                    fontSize: '0.94rem',
                    fontWeight: 800,
                    letterSpacing: '0.02em'
                  }}>
                    {pkg.title}
                  </div>
                  <div style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    opacity: isSelected ? 0.95 : 0.75
                  }}>
                    ₹{pkg.offerPrice.toLocaleString()}/-
                  </div>
                </div>
                {pkg.popular && (
                  <span style={{
                    background: isSelected ? '#ffffff' : 'var(--brand-green)',
                    color: isSelected ? '#284710' : '#ffffff',
                    fontSize: '0.65rem',
                    fontWeight: 800,
                    padding: '2px 6px',
                    borderRadius: '999px',
                    textTransform: 'uppercase',
                    marginLeft: '4px'
                  }}>
                    Popular
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Single Package View */}
        <div 
          className="special-offers-card"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            background: 'var(--bg-secondary)',
            border: '1.5px solid var(--border-color)',
            borderRadius: '20px',
            padding: 'clamp(20px, 3.5vw, 36px)',
            boxShadow: 'var(--shadow-md)',
            overflow: 'hidden'
          }}
        >
          <div 
            className="special-offers-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: 'clamp(20px, 3vw, 36px)',
              alignItems: 'center'
            }}
          >
            {/* Left Column: Breakdown */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{
                  background: 'var(--badge-bg)',
                  color: 'var(--brand-green-text)',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  padding: '3px 10px',
                  borderRadius: '999px',
                  textTransform: 'uppercase',
                  border: '1px solid var(--brand-green-border)'
                }}>
                  {activePackage.badge}
                </span>
              </div>

              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: 900,
                marginBottom: '4px',
                color: 'var(--text-primary)'
              }}>
                {activePackage.title} COMBO PACKAGE
              </h3>

              <p style={{
                fontSize: '0.84rem',
                color: 'var(--text-secondary)',
                marginBottom: '18px'
              }}>
                Fits: {activePackage.suitableFor}
              </p>

              {/* Service Itemized Breakdown List from Flyer */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                marginBottom: '18px'
              }}>
                {activePackage.services.map((svc, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 14px',
                      background: 'var(--bg-primary)',
                      borderRadius: '10px',
                      border: '1px solid var(--border-color)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Check size={14} color="var(--brand-green)" strokeWidth={3} />
                      <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {svc.name}
                      </span>
                    </div>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      color: 'var(--text-secondary)'
                    }}>
                      ₹{svc.originalPrice}
                    </span>
                  </div>
                ))}
              </div>

              {/* Free General Checkups Badge */}
              <div style={{
                background: 'var(--badge-bg)',
                border: '1px dashed var(--brand-green)',
                borderRadius: '12px',
                padding: '12px 14px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontWeight: 800,
                  color: 'var(--brand-green-text)',
                  fontSize: '0.82rem',
                  marginBottom: '6px'
                }}>
                  <Sparkles size={14} /> FREE 37-POINT HEALTH CHECK INCLUDED:
                </div>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  fontSize: '0.78rem',
                  color: 'var(--text-secondary)'
                }}>
                  {activePackage.bonusCheckups.map((chk, i) => (
                    <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ color: 'var(--brand-green)' }}>•</span> {chk}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Pricing Box & Instant Booking */}
            <div 
              className="pricing-box"
              style={{
                background: 'linear-gradient(145deg, #18221a 0%, #111713 100%)',
                border: '1.5px solid var(--border-highlight)',
                borderRadius: '18px',
                padding: '28px 24px',
                textAlign: 'center',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.4)'
              }}
            >
              <span style={{
                display: 'inline-block',
                background: '#e02424',
                color: '#ffffff',
                fontSize: '0.75rem',
                fontWeight: 800,
                padding: '3px 12px',
                borderRadius: '999px',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '12px'
              }}>
                Limited Celebration Offer
              </span>

              <div style={{ color: '#88988a', fontSize: '0.9rem', marginBottom: '4px' }}>
                Total Normal Value: <span style={{ textDecoration: 'line-through' }}>₹{activePackage.normalPrice.toLocaleString()}</span>
              </div>

              <div style={{
                display: 'inline-block',
                background: 'rgba(142, 224, 36, 0.18)',
                color: '#b8fa4f',
                fontSize: '0.82rem',
                fontWeight: 800,
                padding: '3px 10px',
                borderRadius: '6px',
                marginBottom: '12px'
              }}>
                YOU SAVE ₹{activePackage.savings.toLocaleString()}!
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'center',
                gap: '4px',
                margin: '12px 0 18px 0'
              }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--brand-green)' }}>₹</span>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '3.6rem',
                  fontWeight: 900,
                  color: '#ffffff',
                  lineHeight: 1
                }}>
                  {activePackage.offerPrice.toLocaleString()}
                </span>
                <span style={{ fontSize: '1rem', color: '#88988a', fontWeight: 600 }}>/-</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button
                  onClick={() => onOpenBooking(`${activePackage.title} 2nd Anniv Package`)}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '14px',
                    fontSize: '0.96rem',
                    borderRadius: '10px',
                    justifyContent: 'center'
                  }}
                >
                  <Calendar size={16} />
                  <span>Book {activePackage.title} Package</span>
                </button>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                    `Hello Green Carz Care! I want to book the ${activePackage.title} 2nd Anniversary Package (₹${activePackage.offerPrice}/-). Please reserve my slot.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{ width: '100%', padding: '12px', borderRadius: '10px', textDecoration: 'none' }}
                >
                  <Phone size={15} />
                  <span>Book via WhatsApp</span>
                </a>

                <button
                  onClick={onOpenFlyer}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--brand-green)',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    marginTop: '4px',
                    textDecoration: 'underline'
                  }}
                >
                  View Original Printed Flyer
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

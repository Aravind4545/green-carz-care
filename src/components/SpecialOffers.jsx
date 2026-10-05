import React, { useState } from 'react';
import { VEHICLE_PACKAGES, BUSINESS_INFO } from '../data/servicesData';
import { Check, Sparkles, Calendar, Tag, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export function SpecialOffers({ onOpenBooking, onOpenFlyer }) {
  const [selectedPackageId, setSelectedPackageId] = useState('suv');
  const [viewMode, setViewMode] = useState('cards'); // 'cards' or 'compare'

  const activePackage = VEHICLE_PACKAGES.find(p => p.id === selectedPackageId) || VEHICLE_PACKAGES[0];

  return (
    <section id="packages" className="section" style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      borderBottom: '1px solid var(--border-color)'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Tag size={14} /> Official Anniversary Offer Pricing
          </div>
          <h2 className="section-title">
            All-Inclusive <span className="text-gradient-green">Full Detailing Packages</span>
          </h2>
          <p className="section-subtitle">
            Choose your vehicle segment below. Each comprehensive package includes Water Wash, Intensive Interior Beautification, High-Gloss Waxing, Anti-bacterial Fumigation, A/C Cleaning, and <strong>Free General Checkups</strong>!
          </p>

          {/* Toggle between Card View & Comparison Table */}
          <div style={{
            display: 'inline-flex',
            background: 'var(--bg-tertiary)',
            padding: '4px',
            borderRadius: '999px',
            border: '1px solid var(--border-color)',
            marginTop: '20px'
          }}>
            <button
              onClick={() => setViewMode('cards')}
              style={{
                padding: '8px 20px',
                borderRadius: '999px',
                border: 'none',
                background: viewMode === 'cards' ? 'var(--brand-green)' : 'transparent',
                color: viewMode === 'cards' ? '#0e130f' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              Interactive Package Cards
            </button>
            <button
              onClick={() => setViewMode('compare')}
              style={{
                padding: '8px 20px',
                borderRadius: '999px',
                border: 'none',
                background: viewMode === 'compare' ? 'var(--brand-green)' : 'transparent',
                color: viewMode === 'compare' ? '#0e130f' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              Side-by-Side Comparison
            </button>
          </div>
        </div>

        {/* Vehicle Segment Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '40px'
        }}>
          {VEHICLE_PACKAGES.map((pkg) => {
            const isSelected = pkg.id === selectedPackageId;
            return (
              <button
                key={pkg.id}
                onClick={() => setSelectedPackageId(pkg.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 24px',
                  borderRadius: '16px',
                  background: isSelected
                    ? 'linear-gradient(135deg, rgba(144, 192, 67, 0.22) 0%, rgba(144, 192, 67, 0.08) 100%)'
                    : 'var(--bg-tertiary)',
                  border: isSelected
                    ? '2px solid var(--brand-green)'
                    : '1px solid var(--border-color)',
                  color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: isSelected ? '0 8px 25px rgba(144, 192, 67, 0.25)' : 'none'
                }}
              >
                <div style={{ textAlign: 'left' }}>
                  <div style={{
                    fontSize: '1rem',
                    fontWeight: 800,
                    color: isSelected ? 'var(--brand-green-text)' : 'var(--text-primary)',
                    letterSpacing: '0.04em'
                  }}>
                    {pkg.title}
                  </div>
                  <div style={{
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: isSelected ? 'var(--text-primary)' : 'var(--text-muted)'
                  }}>
                    Offer: ₹{pkg.offerPrice.toLocaleString()}
                  </div>
                </div>
                {pkg.popular && (
                  <span style={{
                    background: 'var(--brand-green)',
                    color: '#0e130f',
                    fontSize: '0.68rem',
                    fontWeight: 800,
                    padding: '2px 7px',
                    borderRadius: '999px',
                    textTransform: 'uppercase'
                  }}>
                    Popular
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {viewMode === 'cards' ? (
          /* Detailed Single Package View */
          <div style={{
            maxWidth: '1050px',
            margin: '0 auto',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-highlight)',
            borderRadius: '24px',
            padding: '36px',
            boxShadow: 'var(--shadow-lg), 0 0 35px rgba(144, 192, 67, 0.12)',
            backdropFilter: 'blur(16px)'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}>
              {/* Left Column: Breakdown */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{
                    background: 'rgba(144, 192, 67, 0.2)',
                    color: 'var(--brand-green-light)',
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    padding: '4px 12px',
                    borderRadius: '999px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {activePackage.badge}
                  </span>
                </div>

                <h3 style={{
                  fontSize: '2.4rem',
                  fontWeight: 900,
                  marginBottom: '6px',
                  color: 'var(--text-primary)'
                }}>
                  {activePackage.title} PACKAGE
                </h3>

                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-muted)',
                  marginBottom: '24px'
                }}>
                  Common Models: {activePackage.suitableFor}
                </p>

                {/* Service Itemized Breakdown List from Flyer */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  marginBottom: '28px'
                }}>
                  {activePackage.services.map((svc, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 16px',
                        background: 'var(--bg-tertiary)',
                        borderRadius: '12px',
                        border: '1px solid var(--border-color)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          background: 'rgba(144, 192, 67, 0.15)',
                          color: 'var(--brand-green)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <Check size={14} strokeWidth={3} />
                        </span>
                        <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                          {svc.name}
                        </span>
                      </div>
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.95rem',
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
                  background: 'linear-gradient(135deg, rgba(144, 192, 67, 0.12) 0%, rgba(144, 192, 67, 0.04) 100%)',
                  border: '1px dashed var(--brand-green)',
                  borderRadius: '14px',
                  padding: '16px',
                  marginTop: '10px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontWeight: 800,
                    color: 'var(--brand-green-light)',
                    fontSize: '0.9rem',
                    marginBottom: '8px'
                  }}>
                    <Sparkles size={16} /> FREE BONUS CHECKUPS INCLUDED:
                  </div>
                  <ul style={{
                    listStyle: 'none',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '6px',
                    margin: 0,
                    padding: 0
                  }}>
                    {activePackage.bonusCheckups.map((chk, i) => (
                      <li key={i} style={{
                        fontSize: '0.82rem',
                        color: 'var(--text-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}>
                        <span style={{ color: 'var(--brand-green)' }}>•</span> {chk}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Pricing Box & Instant Booking */}
              <div style={{
                background: 'linear-gradient(145deg, #18221a 0%, #111713 100%)',
                border: '1.5px solid var(--border-highlight)',
                borderRadius: '20px',
                padding: '36px 30px',
                textAlign: 'center',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(144, 192, 67, 0.2)'
              }}>
                <span style={{
                  display: 'inline-block',
                  background: '#ff4d4f',
                  color: '#ffffff',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  padding: '4px 14px',
                  borderRadius: '999px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '16px',
                  boxShadow: '0 4px 12px rgba(255, 77, 79, 0.35)'
                }}>
                  Limited Anniversary Offer
                </span>

                <div style={{ marginBottom: '8px' }}>
                  <span style={{
                    fontSize: '1rem',
                    color: 'var(--text-muted)',
                    textDecoration: 'line-through',
                    fontWeight: 600,
                    marginRight: '12px'
                  }}>
                    Total Value: ₹{activePackage.normalPrice.toLocaleString()}
                  </span>
                  <span style={{
                    background: 'rgba(144, 192, 67, 0.2)',
                    color: 'var(--brand-green-bright)',
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    padding: '3px 10px',
                    borderRadius: '8px'
                  }}>
                    YOU SAVE ₹{activePackage.savings.toLocaleString()}!
                  </span>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'center',
                  gap: '6px',
                  margin: '18px 0'
                }}>
                  <span style={{
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    color: 'var(--brand-green)'
                  }}>
                    ₹
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '4.2rem',
                    fontWeight: 900,
                    color: '#ffffff',
                    lineHeight: 1
                  }}>
                    {activePackage.offerPrice.toLocaleString()}
                  </span>
                  <span style={{
                    fontSize: '1.1rem',
                    color: 'var(--text-muted)',
                    fontWeight: 600
                  }}>
                    /-
                  </span>
                </div>

                <p style={{
                  fontSize: '0.84rem',
                  color: '#b0bcb2',
                  marginBottom: '28px',
                  lineHeight: 1.5
                }}>
                  *All prices inclusive of labor and taxes. Prior appointment recommended to ensure prioritized service bay.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <button
                    onClick={() => onOpenBooking(activePackage.title)}
                    className="btn-primary"
                    style={{
                      width: '100%',
                      padding: '16px',
                      fontSize: '1.05rem'
                    }}
                  >
                    <Calendar size={18} />
                    <span>Book {activePackage.title} Package</span>
                  </button>

                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Green Carz Care! I am interested in booking the ${activePackage.title} Special Offer Package (₹${activePackage.offerPrice}/-). Please confirm availability.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                    style={{ width: '100%' }}
                  >
                    <span>Instant Booking via WhatsApp</span>
                  </a>

                  <button
                    onClick={onOpenFlyer}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--brand-green)',
                      fontSize: '0.84rem',
                      cursor: 'pointer',
                      marginTop: '6px',
                      textDecoration: 'underline'
                    }}
                  >
                    Inspect Original Printed Flyer & Address
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Side-by-Side Comparison Matrix */
          <div style={{
            overflowX: 'auto',
            background: 'var(--bg-card)',
            borderRadius: '20px',
            border: '1px solid var(--border-color)',
            padding: '24px'
          }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              textAlign: 'left'
            }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border-highlight)' }}>
                  <th style={{ padding: '16px', color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 800 }}>
                    Service Included
                  </th>
                  {VEHICLE_PACKAGES.map((pkg) => (
                    <th key={pkg.id} style={{
                      padding: '16px',
                      color: pkg.popular ? 'var(--brand-green)' : 'var(--text-primary)',
                      fontSize: '1.05rem',
                      fontWeight: 800,
                      textAlign: 'center'
                    }}>
                      {pkg.title}
                      {pkg.popular && <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--brand-green-light)' }}>★ POPULAR</span>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>Water Wash (Foam + Pressure)</td>
                  <td style={{ padding: '14px', textAlign: 'center', color: 'var(--text-secondary)' }}>₹400</td>
                  <td style={{ padding: '14px', textAlign: 'center', color: 'var(--text-secondary)' }}>₹500</td>
                  <td style={{ padding: '14px', textAlign: 'center', color: 'var(--text-secondary)' }}>₹600</td>
                  <td style={{ padding: '14px', textAlign: 'center', color: 'var(--text-secondary)' }}>₹600</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>Intensive Interior Beautification</td>
                  <td style={{ padding: '14px', textAlign: 'center', color: 'var(--text-secondary)' }}>₹2,500</td>
                  <td style={{ padding: '14px', textAlign: 'center', color: 'var(--text-secondary)' }}>₹2,500</td>
                  <td style={{ padding: '14px', textAlign: 'center', color: 'var(--text-secondary)' }}>₹2,500</td>
                  <td style={{ padding: '14px', textAlign: 'center', color: 'var(--text-secondary)' }}>₹2,500</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>High-Gloss Waxing & Buffing</td>
                  <td style={{ padding: '14px', textAlign: 'center', color: 'var(--text-secondary)' }}>₹1,000</td>
                  <td style={{ padding: '14px', textAlign: 'center', color: 'var(--text-secondary)' }}>₹1,500</td>
                  <td style={{ padding: '14px', textAlign: 'center', color: 'var(--text-secondary)' }}>₹2,000</td>
                  <td style={{ padding: '14px', textAlign: 'center', color: 'var(--text-secondary)' }}>₹2,500</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>Anti-Bacterial Fumigation</td>
                  <td style={{ padding: '14px', textAlign: 'center', color: 'var(--text-secondary)' }}>₹500</td>
                  <td style={{ padding: '14px', textAlign: 'center', color: 'var(--text-secondary)' }}>₹600</td>
                  <td style={{ padding: '14px', textAlign: 'center', color: 'var(--text-secondary)' }}>₹600</td>
                  <td style={{ padding: '14px', textAlign: 'center', color: 'var(--text-secondary)' }}>₹800</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>A/C Cleaning & Disinfection</td>
                  <td style={{ padding: '14px', textAlign: 'center', color: 'var(--text-secondary)' }}>₹1,000</td>
                  <td style={{ padding: '14px', textAlign: 'center', color: 'var(--text-secondary)' }}>₹1,200</td>
                  <td style={{ padding: '14px', textAlign: 'center', color: 'var(--text-secondary)' }}>₹1,500</td>
                  <td style={{ padding: '14px', textAlign: 'center', color: 'var(--text-secondary)' }}>₹1,800</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>General Checkups (Wiper/Oil/Coolant)</td>
                  <td style={{ padding: '14px', textAlign: 'center', color: 'var(--brand-green)', fontWeight: 700 }}>FREE</td>
                  <td style={{ padding: '14px', textAlign: 'center', color: 'var(--brand-green)', fontWeight: 700 }}>FREE</td>
                  <td style={{ padding: '14px', textAlign: 'center', color: 'var(--brand-green)', fontWeight: 700 }}>FREE</td>
                  <td style={{ padding: '14px', textAlign: 'center', color: 'var(--brand-green)', fontWeight: 700 }}>FREE</td>
                </tr>
                <tr style={{ borderBottom: '2px solid var(--border-highlight)', background: 'rgba(144, 192, 67, 0.05)' }}>
                  <td style={{ padding: '16px', fontWeight: 800, color: 'var(--text-primary)' }}>Regular Total Value</td>
                  <td style={{ padding: '16px', textAlign: 'center', textDecoration: 'line-through', color: 'var(--text-muted)' }}>₹5,400</td>
                  <td style={{ padding: '16px', textAlign: 'center', textDecoration: 'line-through', color: 'var(--text-muted)' }}>₹6,300</td>
                  <td style={{ padding: '16px', textAlign: 'center', textDecoration: 'line-through', color: 'var(--text-muted)' }}>₹7,200</td>
                  <td style={{ padding: '16px', textAlign: 'center', textDecoration: 'line-through', color: 'var(--text-muted)' }}>₹8,200</td>
                </tr>
                <tr style={{ background: 'rgba(144, 192, 67, 0.12)' }}>
                  <td style={{ padding: '18px', fontWeight: 900, color: 'var(--brand-green-light)', fontSize: '1.1rem' }}>
                    Special Offer Price
                  </td>
                  {VEHICLE_PACKAGES.map((pkg) => (
                    <td key={pkg.id} style={{
                      padding: '18px',
                      textAlign: 'center',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.6rem',
                      fontWeight: 900,
                      color: 'var(--brand-green-heading)'
                    }}>
                      ₹{pkg.offerPrice.toLocaleString()}/-
                    </td>
                  ))}
                </tr>
                <tr>
                  <td style={{ padding: '16px' }}></td>
                  {VEHICLE_PACKAGES.map((pkg) => (
                    <td key={pkg.id} style={{ padding: '16px', textAlign: 'center' }}>
                      <button
                        onClick={() => onOpenBooking(pkg.title)}
                        className="btn-primary"
                        style={{ padding: '8px 18px', fontSize: '0.85rem' }}
                      >
                        Book {pkg.title}
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}

      </div>
    </section>
  );
}

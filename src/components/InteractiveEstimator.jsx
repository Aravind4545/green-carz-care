import React, { useState } from 'react';
import { Calculator, Check, Sparkles, MessageSquare, Send, Car, RefreshCw } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

export function InteractiveEstimator({ onOpenBooking }) {
  const [vehicleType, setVehicleType] = useState('sedan');
  
  // Base rates and modifiers
  const vehicleMultipliers = {
    hatchback: { label: 'Hatchback', washBase: 1999, multiplier: 0.9, suitable: 'Swift, i20, Baleno' },
    sedan: { label: 'Sedan', washBase: 2999, multiplier: 1.0, suitable: 'City, Verna, Ciaz' },
    suv: { label: 'SUV', washBase: 3999, multiplier: 1.2, suitable: 'Creta, Seltos, Nexon' },
    premium: { label: 'Luxury / Full-Size', washBase: 4999, multiplier: 1.4, suitable: 'Fortuner, BMW, Mercedes' }
  };

  const addOnOptions = [
    { id: 'fullPackage', name: 'Complete 5-in-1 Special Detailing Package', price: vehicleMultipliers[vehicleType].washBase, isPackage: true, defaultSelected: true },
    { id: 'ceramicCoating', name: '9H Nano Ceramic Coating (3-Yr Mirror Shield)', price: Math.round(9500 * vehicleMultipliers[vehicleType].multiplier) },
    { id: 'teflonCoating', name: 'Teflon Paint Protection Sealant', price: Math.round(2200 * vehicleMultipliers[vehicleType].multiplier) },
    { id: 'underbody', name: 'Heavy-Duty Underbody Anti-Rust Coating', price: Math.round(1800 * vehicleMultipliers[vehicleType].multiplier) },
    { id: 'alignmentBalancing', name: '3D Laser Wheel Alignment + Computer Balancing', price: 750 },
    { id: 'nitrogenAir', name: 'N2 Pure Nitrogen Air Filling (All 4 Tyres)', price: 200 },
    { id: 'acGasRefill', name: 'Car AC Top Up, Refrigerant & Coil Flush', price: 1200 },
    { id: 'engineScan', name: 'Computerized OBD2 Engine Diagnostics & Scan', price: 600 },
    { id: 'headlightBuff', name: 'Headlight Lens Restoration & Clarity Buffing', price: 800 }
  ];

  const [selectedAddons, setSelectedAddons] = useState(['fullPackage', 'alignmentBalancing']);

  const toggleAddon = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(item => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Calculate Total
  const calculateTotal = () => {
    let sum = 0;
    addOnOptions.forEach(opt => {
      if (selectedAddons.includes(opt.id)) {
        sum += opt.price;
      }
    });
    return sum;
  };

  const totalEstimate = calculateTotal();

  const handleWhatsAppQuote = () => {
    const selectedNames = addOnOptions
      .filter(opt => selectedAddons.includes(opt.id))
      .map(opt => `• ${opt.name} (₹${opt.price})`)
      .join('\n');

    const message = `Hello Green Carz Care!\nI customized an estimate on your website:\n\n*Vehicle Type:* ${vehicleMultipliers[vehicleType].label}\n*Selected Services:*\n${selectedNames}\n\n*Estimated Total:* ₹${totalEstimate.toLocaleString()}/-\n\nPlease confirm slot availability.`;
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="calculator" className="section" style={{
      background: 'var(--bg-primary)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Calculator size={14} /> Instant Cost Calculator
          </div>
          <h2 className="section-title">
            Build Your <span className="text-gradient-green">Custom Car Care Estimate</span>
          </h2>
          <p className="section-subtitle">
            Customize services according to your car's exact needs. Get real-time transparent pricing with zero hidden charges.
          </p>
        </div>

        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-highlight)',
          borderRadius: '24px',
          padding: '36px',
          boxShadow: 'var(--shadow-lg)'
        }}>
          {/* Step 1: Choose Vehicle Segment */}
          <div style={{ marginBottom: '32px' }}>
            <label style={{
              display: 'block',
              fontSize: '0.95rem',
              fontWeight: 800,
              color: 'var(--text-primary)',
              marginBottom: '14px',
              textTransform: 'uppercase',
              letterSpacing: '0.04em'
            }}>
              Step 1: Select Your Vehicle Type
            </label>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '12px'
            }}>
              {Object.entries(vehicleMultipliers).map(([key, data]) => {
                const isSelected = vehicleType === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setVehicleType(key)}
                    style={{
                      padding: '16px',
                      borderRadius: '16px',
                      background: isSelected ? 'rgba(144, 192, 67, 0.2)' : 'var(--bg-tertiary)',
                      border: isSelected ? '2px solid var(--brand-green)' : '1px solid var(--border-color)',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '4px'
                    }}>
                      <span style={{
                        fontSize: '1rem',
                        fontWeight: 800,
                        color: isSelected ? 'var(--brand-green-light)' : 'var(--text-primary)'
                      }}>
                        {data.label}
                      </span>
                      {isSelected && <Check size={16} color="var(--brand-green)" strokeWidth={3} />}
                    </div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      e.g. {data.suitable}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Pick Services & Upgrades */}
          <div style={{ marginBottom: '36px' }}>
            <label style={{
              display: 'block',
              fontSize: '0.95rem',
              fontWeight: 800,
              color: 'var(--text-primary)',
              marginBottom: '14px',
              textTransform: 'uppercase',
              letterSpacing: '0.04em'
            }}>
              Step 2: Choose Services & Add-Ons
            </label>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '12px'
            }}>
              {addOnOptions.map((opt) => {
                const isChecked = selectedAddons.includes(opt.id);
                return (
                  <div
                    key={opt.id}
                    onClick={() => toggleAddon(opt.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '14px 18px',
                      borderRadius: '14px',
                      background: isChecked ? 'rgba(144, 192, 67, 0.12)' : 'var(--bg-tertiary)',
                      border: isChecked ? '1.5px solid var(--brand-green)' : '1px solid var(--border-color)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '6px',
                        border: isChecked ? 'none' : '2px solid var(--border-color)',
                        background: isChecked ? 'var(--brand-green)' : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#0e130f',
                        flexShrink: 0
                      }}>
                        {isChecked && <Check size={14} strokeWidth={3} />}
                      </div>
                      <div>
                        <div style={{
                          fontSize: '0.9rem',
                          fontWeight: 700,
                          color: isChecked ? 'var(--text-primary)' : 'var(--text-secondary)'
                        }}>
                          {opt.name}
                        </div>
                        {opt.isPackage && (
                          <span style={{ fontSize: '0.74rem', color: 'var(--brand-green-light)', fontWeight: 600 }}>
                            ★ Includes 5 Core Services & 37-Point Check
                          </span>
                        )}
                      </div>
                    </div>

                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1rem',
                      fontWeight: 800,
                      color: isChecked ? 'var(--brand-green-light)' : 'var(--text-muted)',
                      marginLeft: '12px',
                      whiteSpace: 'nowrap'
                    }}>
                      ₹{opt.price.toLocaleString()}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 3: Total Summary & Actions */}
          <div style={{
            background: 'linear-gradient(135deg, #18241b 0%, #111713 100%)',
            border: '1.5px solid var(--border-highlight)',
            borderRadius: '20px',
            padding: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)'
          }}>
            <div>
              <span style={{
                fontSize: '0.82rem',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontWeight: 700
              }}>
                Calculated Estimate for {vehicleMultipliers[vehicleType].label}:
              </span>
              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '8px',
                marginTop: '4px'
              }}>
                <span style={{ fontSize: '1.4rem', color: 'var(--brand-green)', fontWeight: 700 }}>₹</span>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '3rem',
                  fontWeight: 900,
                  color: '#ffffff',
                  lineHeight: 1
                }}>
                  {totalEstimate.toLocaleString()}
                </span>
                <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                  ({selectedAddons.length} services selected)
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenBooking(`Custom Quote: ${vehicleMultipliers[vehicleType].label} (₹${totalEstimate})`)}
                className="btn-primary"
                style={{ padding: '14px 28px' }}
              >
                <span>Book This Custom Quote</span>
              </button>

              <button
                onClick={handleWhatsAppQuote}
                className="btn-whatsapp"
                style={{ padding: '14px 24px' }}
              >
                <MessageSquare size={18} />
                <span>Send via WhatsApp</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

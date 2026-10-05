import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, SlidersHorizontal, ShieldCheck, Droplet, Sun, Eye } from 'lucide-react';

export function BeforeAfterSection({ onOpenBooking }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section id="transformation" className="section" style={{
      background: 'var(--bg-primary)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Eye size={14} /> Visible Transformation
          </div>
          <h2 className="section-title">
            Witness The <span className="text-gradient-green">Showroom Mirror Magic</span>
          </h2>
          <p className="section-subtitle">
            Drag the interactive slider below to inspect the real-world difference our intensive multi-stage compounding, paint correction, and 9H nano ceramic coating makes on dull paintwork.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div style={{
          maxWidth: '960px',
          margin: '0 auto 48px auto',
          position: 'relative'
        }}>
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16/9',
              borderRadius: '24px',
              overflow: 'hidden',
              cursor: isDragging ? 'grabbing' : 'ew-resize',
              border: '2px solid var(--border-highlight)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(144, 192, 67, 0.15)',
              userSelect: 'none'
            }}
          >
            {/* Background Full Image */}
            <img
              src="/assets/before-after.jpg"
              alt="Before and after car ceramic coating"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                pointerEvents: 'none'
              }}
            />

            {/* Split Divider Line */}
            <div style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: `${sliderPosition}%`,
              width: '4px',
              background: 'var(--brand-green)',
              boxShadow: '0 0 15px var(--brand-green), 0 0 30px rgba(144, 192, 67, 0.5)',
              transform: 'translateX(-50%)',
              zIndex: 5
            }}>
              {/* Center Handle Button */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'var(--brand-green-gradient)',
                border: '3px solid #ffffff',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5), 0 0 20px rgba(144, 192, 67, 0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0e130f',
                cursor: 'grab'
              }}>
                <SlidersHorizontal size={20} strokeWidth={2.5} />
              </div>
            </div>

            {/* Left Label: BEFORE */}
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              background: 'rgba(15, 20, 16, 0.85)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              padding: '8px 16px',
              borderRadius: '999px',
              color: '#ff7875',
              fontSize: '0.85rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              zIndex: 4,
              pointerEvents: 'none'
            }}>
              BEFORE: OXIDIZED & DUSTY
            </div>

            {/* Right Label: AFTER */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(15, 20, 16, 0.85)',
              backdropFilter: 'blur(8px)',
              border: '1px solid var(--border-highlight)',
              padding: '8px 16px',
              borderRadius: '999px',
              color: 'var(--brand-green-bright)',
              fontSize: '0.85rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              zIndex: 4,
              pointerEvents: 'none',
              boxShadow: '0 0 15px rgba(144, 192, 67, 0.3)'
            }}>
              AFTER: 9H CERAMIC MIRROR GLOSS
            </div>
          </div>

          <p style={{
            textAlign: 'center',
            fontSize: '0.88rem',
            color: 'var(--text-muted)',
            marginTop: '14px'
          }}>
            ← Drag the slider sideways to inspect transformation →
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid-3" style={{ maxWidth: '1050px', margin: '0 auto' }}>
          <div className="glass-card" style={{ padding: '24px' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              background: 'rgba(144, 192, 67, 0.15)',
              color: 'var(--brand-green)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px'
            }}>
              <Droplet size={24} />
            </div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Hydrophobic Water Sheeting</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Water, mud, and road grime slide right off the surface with zero sticking. Washing your car takes only minutes.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '24px' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              background: 'rgba(144, 192, 67, 0.15)',
              color: 'var(--brand-green)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px'
            }}>
              <Sun size={24} />
            </div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>UV & Acid Rain Protection</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Blocks harsh tropical Andhra sunlight from fading your paint and seals clear coat against corrosive bird droppings.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '24px' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              background: 'rgba(144, 192, 67, 0.15)',
              color: 'var(--brand-green)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px'
            }}>
              <ShieldCheck size={24} />
            </div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>3 to 5 Year Ceramic Shield</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Certified application using premium nano quartz crystals for permanent chemical bond and long-lasting gloss.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

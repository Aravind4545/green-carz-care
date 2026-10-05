import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, SlidersHorizontal, Calendar, ArrowRight } from 'lucide-react';

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
  }, [isDragging]);

  return (
    <section id="transformation" className="section" style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      borderBottom: '1px solid var(--border-color)',
      padding: '60px 0'
    }}>
      <div className="container">
        
        {/* Simple Section Header */}
        <div className="section-header" style={{ marginBottom: '28px' }}>
          <div className="section-tag">
            <Sparkles size={14} /> Detailing Transformation
          </div>
          <h2 className="section-title">
            Before & <span className="text-gradient-green">After Finish</span>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '560px' }}>
            Drag the slider left and right to inspect the dramatic difference our multi-stage compounding and 9H nano ceramic coating makes on vehicle paint.
          </p>
        </div>

        {/* Interactive Comparison Slider */}
        <div style={{
          maxWidth: '820px',
          margin: '0 auto',
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
              aspectRatio: '16/10',
              borderRadius: '20px',
              overflow: 'hidden',
              cursor: isDragging ? 'grabbing' : 'ew-resize',
              border: '2px solid var(--border-color)',
              boxShadow: 'var(--shadow-lg)',
              userSelect: 'none',
              touchAction: 'pan-y'
            }}
          >
            {/* Layer 1: BEFORE (Dull & Oxidized Filter) */}
            <div style={{
              position: 'absolute',
              inset: 0,
              overflow: 'hidden'
            }}>
              <img
                src="/assets/mirror-shine-polo.jpg"
                alt="Before Detailing - Dull & Oxidized Finish"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  pointerEvents: 'none',
                  filter: 'grayscale(75%) brightness(0.78) contrast(0.85) blur(0.4px)'
                }}
              />

              {/* Before Badge */}
              <div style={{
                position: 'absolute',
                top: '14px',
                left: '14px',
                background: 'rgba(20, 20, 20, 0.85)',
                color: '#ff8585',
                border: '1px solid rgba(255, 100, 100, 0.35)',
                padding: '4px 12px',
                borderRadius: '999px',
                fontSize: '0.74rem',
                fontWeight: 800,
                letterSpacing: '0.04em',
                backdropFilter: 'blur(6px)'
              }}>
                BEFORE: DULL & SWIRLED
              </div>
            </div>

            {/* Layer 2: AFTER (Clipped Crystal Gloss Ceramic Finish) */}
            <div style={{
              position: 'absolute',
              inset: 0,
              overflow: 'hidden',
              clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
            }}>
              <img
                src="/assets/mirror-shine-polo.jpg"
                alt="After Detailing - 9H Ceramic Mirror Shine"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  pointerEvents: 'none',
                  filter: 'contrast(1.1) brightness(1.02) saturate(1.1)'
                }}
              />

              {/* After Badge */}
              <div style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                background: 'rgba(10, 20, 12, 0.88)',
                color: '#8ee024',
                border: '1px solid rgba(142, 224, 36, 0.4)',
                padding: '4px 12px',
                borderRadius: '999px',
                fontSize: '0.74rem',
                fontWeight: 800,
                letterSpacing: '0.04em',
                backdropFilter: 'blur(6px)'
              }}>
                AFTER: 9H CERAMIC SHINE
              </div>
            </div>

            {/* Slider Dividing Bar */}
            <div style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: `${sliderPosition}%`,
              width: '3px',
              background: '#ffffff',
              boxShadow: '0 0 12px rgba(0, 0, 0, 0.6), 0 0 8px var(--brand-green)',
              transform: 'translateX(-50%)',
              zIndex: 10,
              pointerEvents: 'none'
            }}>
              {/* Draggable Circle Handle */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'var(--brand-green)',
                color: '#0e140f',
                border: '3px solid #ffffff',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'ew-resize'
              }}>
                <SlidersHorizontal size={18} strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* Simple CTA underneath slider */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '22px'
          }}>
            <button
              onClick={() => onOpenBooking('9H Nano Ceramic Coating')}
              className="btn-primary"
              style={{
                padding: '12px 24px',
                fontSize: '0.94rem',
                borderRadius: '10px'
              }}
            >
              <Calendar size={16} />
              <span>Get This Mirror Shine On Your Car</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

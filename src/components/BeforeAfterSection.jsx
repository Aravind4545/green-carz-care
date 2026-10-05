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
            onMouseDown={(e) => {
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              setIsDragging(true);
              handleMove(e.touches[0].clientX);
            }}
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
            {/* Layer 1: AFTER (Right Side Base - Showroom Mirror Gloss) */}
            <div style={{
              position: 'absolute',
              inset: 0,
              overflow: 'hidden'
            }}>
              <img
                src="/assets/mirror-shine-polo.jpg"
                alt="After Detailing - 9H Nano Ceramic Mirror Finish"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  pointerEvents: 'none'
                }}
              />
            </div>

            {/* Layer 2: BEFORE (Left Side Overlay - Mud & Road Grime) */}
            <div style={{
              position: 'absolute',
              inset: 0,
              overflow: 'hidden',
              clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
            }}>
              <img
                src="/assets/polo-before-detailing.jpg"
                alt="Before Detailing - Mud & Dusty Paint"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  pointerEvents: 'none'
                }}
              />
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

            {/* Top-Left BEFORE Badge (Unclipped, Responsive) */}
            <div
              className="ba-badge ba-badge-before"
              style={{
                opacity: sliderPosition < 14 ? 0.3 : 1
              }}
            >
              <span className="ba-badge-dot"></span>
              <span className="ba-text-desktop">BEFORE: UNTREATED</span>
              <span className="ba-text-mobile">BEFORE</span>
            </div>

            {/* Top-Right AFTER Badge (Unclipped, Responsive) */}
            <div
              className="ba-badge ba-badge-after"
              style={{
                opacity: sliderPosition > 86 ? 0.3 : 1
              }}
            >
              <span className="ba-badge-dot"></span>
              <span className="ba-text-desktop">AFTER: 9H CERAMIC</span>
              <span className="ba-text-mobile">AFTER</span>
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

      <style>{`
        .ba-badge {
          position: absolute;
          top: 14px;
          padding: 5px 14px;
          border-radius: 999px;
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.45);
          z-index: 12;
          pointer-events: none;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: opacity 0.25s ease;
          user-select: none;
        }
        .ba-badge-before {
          left: 14px;
          background: rgba(22, 10, 10, 0.92);
          color: #ff7575;
          border: 1.5px solid rgba(255, 110, 110, 0.5);
        }
        .ba-badge-after {
          right: 14px;
          background: rgba(10, 24, 12, 0.92);
          color: #8ee024;
          border: 1.5px solid rgba(142, 224, 36, 0.5);
        }
        .ba-badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .ba-badge-before .ba-badge-dot {
          background: #ff4d4d;
          box-shadow: 0 0 8px #ff4d4d;
        }
        .ba-badge-after .ba-badge-dot {
          background: #8ee024;
          box-shadow: 0 0 8px #8ee024;
        }
        .ba-text-mobile {
          display: none;
        }
        .ba-text-desktop {
          display: inline;
        }
        @media (max-width: 640px) {
          .ba-badge {
            top: 10px !important;
            padding: 4px 10px !important;
            font-size: 0.68rem !important;
            letter-spacing: 0.04em !important;
            gap: 5px !important;
          }
          .ba-badge-before {
            left: 10px !important;
          }
          .ba-badge-after {
            right: 10px !important;
          }
          .ba-text-desktop {
            display: none !important;
          }
          .ba-text-mobile {
            display: inline !important;
          }
        }
      `}</style>
    </section>
  );
}

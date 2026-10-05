import React from 'react';
import { X, Download, ExternalLink, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

export function FlyerModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 10000 }}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '750px',
          padding: '24px',
          background: 'var(--bg-secondary)',
          border: '1.5px solid var(--border-highlight)'
        }}
      >
        <button onClick={onClose} className="modal-close-btn" title="Close">
          <X size={18} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(144, 192, 67, 0.15)',
            color: 'var(--brand-green-light)',
            padding: '4px 14px',
            borderRadius: '999px',
            fontSize: '0.78rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            marginBottom: '8px'
          }}>
            <Sparkles size={14} /> Official Shop Document
          </div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>
            Green Carz Care — 2nd Anniversary Celebration Flyer
          </h3>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
            Original printed tariff & services menu as published by Green Carz Care, Jangareddygudem.
          </p>
        </div>

        {/* Scrollable / Zoomable Image Viewer */}
        <div style={{
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid var(--border-color)',
          background: '#000000',
          maxHeight: '65vh',
          overflowY: 'auto',
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
        }}>
          <img
            src="/assets/anniversary-flyer.jpg"
            alt="Green Carz Care Official Anniversary Flyer"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block'
            }}
          />
        </div>

        {/* Actions Strip */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          marginTop: '20px',
          paddingTop: '16px',
          borderTop: '1px solid var(--border-color)'
        }}>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Hotlines: <strong>+91 880 415 9999</strong> | <strong>880 416 9999</strong>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <a
              href="/assets/anniversary-flyer.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '8px 16px', fontSize: '0.82rem' }}
            >
              <ExternalLink size={14} /> Full Resolution
            </a>
            <a
              href="/assets/anniversary-flyer.jpg"
              download="Green_Carz_Care_Anniversary_Flyer.jpg"
              className="btn-outline-green"
              style={{ padding: '8px 16px', fontSize: '0.82rem' }}
            >
              <Download size={14} /> Save Flyer
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

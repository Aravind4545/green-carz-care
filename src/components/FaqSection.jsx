import React, { useState } from 'react';
import { FAQS } from '../data/servicesData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section" style={{
      background: 'var(--bg-primary)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <HelpCircle size={14} /> Clear Answers
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="text-gradient-green">Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about our anniversary packages, warranties, service timelines, and workshop location.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{
          maxWidth: '820px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  background: 'var(--bg-card)',
                  borderRadius: '16px',
                  border: isOpen ? '1px solid var(--border-highlight)' : '1px solid var(--border-color)',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease'
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    color: isOpen ? 'var(--brand-green-light)' : 'var(--text-primary)',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    color="var(--brand-green)"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0
                    }}
                  />
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 24px 22px 24px',
                    color: 'var(--text-secondary)',
                    fontSize: '0.94rem',
                    lineHeight: 1.6,
                    borderTop: '1px solid var(--border-subtle)',
                    marginTop: '4px',
                    paddingTop: '16px'
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

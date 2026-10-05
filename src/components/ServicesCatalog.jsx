import React, { useState } from 'react';
import { ALL_SERVICES_CATALOG } from '../data/servicesData';
import { 
  Sparkles, Flame, Layers, Disc, Wind, ShieldCheck, Shield, Wrench, 
  Crosshair, CircleDot, Award, Zap, Activity, RotateCw, Snowflake, 
  BatteryCharging, Cpu, Lightbulb, Gauge, Droplets, AlertOctagon, 
  Sliders, Thermometer, Clock, Filter, Eye, Search, CheckCircle, ArrowRight
} from 'lucide-react';

const ICON_MAP = {
  Sparkles, Flame, Layers, Disc, Wind, ShieldCheck, Shield, Wrench,
  Crosshair, CircleDot, Award, Zap, Activity, RotateCw, Snowflake,
  BatteryCharging, Cpu, Lightbulb, Gauge, Droplets, AlertOctagon,
  Sliders, Thermometer, Clock, Filter, Eye
};

export function ServicesCatalog({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Services (25+)' },
    { id: 'wash-spa', label: 'Wash & Steam Spa' },
    { id: 'coatings', label: 'Ceramic & Coatings' },
    { id: 'tyres-wheels', label: 'Tyres & Alignment' },
    { id: 'electrical-ac', label: 'AC & Electricals' },
    { id: 'mechanical', label: 'Engine & Mechanical' },
  ];

  const filteredServices = ALL_SERVICES_CATALOG.filter((svc) => {
    const matchesCategory = activeCategory === 'all' || svc.category === activeCategory;
    const matchesSearch = svc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          svc.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          svc.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="section" style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      borderBottom: '1px solid var(--border-color)'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} /> Full Spectrum Auto Care
          </div>
          <h2 className="section-title">
            Complete Range of <span className="text-gradient-green">Automotive Services</span>
          </h2>
          <p className="section-subtitle">
            From quick foam washes and tyre balancing to complete engine diagnostics and nano ceramic coatings — every service performed with high-end tools and genuine parts.
          </p>

          {/* Search Bar */}
          <div style={{
            maxWidth: '500px',
            margin: '24px auto 0 auto',
            position: 'relative'
          }}>
            <Search size={18} style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--brand-green)'
            }} />
            <input
              type="text"
              placeholder="Search services (e.g., Nitrogen, Ceramic, Brake, AC, Alignment)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input"
              style={{
                paddingLeft: '44px',
                borderRadius: '999px',
                background: 'var(--bg-tertiary)',
                borderColor: searchQuery ? 'var(--brand-green)' : 'var(--border-color)'
              }}
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '40px'
        }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '9px 18px',
                borderRadius: '999px',
                fontSize: '0.88rem',
                fontWeight: 700,
                border: activeCategory === cat.id ? '1px solid var(--brand-green)' : '1px solid var(--border-color)',
                background: activeCategory === cat.id ? 'var(--brand-green)' : 'var(--bg-tertiary)',
                color: activeCategory === cat.id ? '#0e130f' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: activeCategory === cat.id ? 'var(--shadow-green)' : 'none'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid-3">
          {filteredServices.map((service) => {
            const IconComponent = ICON_MAP[service.icon] || Sparkles;
            return (
              <div
                key={service.id}
                className="glass-card"
                style={{
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%'
                }}
              >
                <div>
                  {/* Top Badges */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '16px'
                  }}>
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(144, 192, 67, 0.15)',
                      border: '1px solid rgba(144, 192, 67, 0.3)',
                      color: 'var(--brand-green)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <IconComponent size={22} />
                    </div>

                    <span style={{
                      fontSize: '0.74rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-color)',
                      padding: '4px 10px',
                      borderRadius: '999px',
                      color: 'var(--brand-green-light)'
                    }}>
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    marginBottom: '6px',
                    color: 'var(--text-primary)'
                  }}>
                    {service.title}
                  </h3>

                  <div style={{
                    fontSize: '0.78rem',
                    color: 'var(--brand-green)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '14px'
                  }}>
                    {service.categoryName}
                  </div>

                  <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                    marginBottom: '18px'
                  }}>
                    {service.shortDesc}
                  </p>

                  {/* Feature Checkpoints */}
                  <ul style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    marginBottom: '24px'
                  }}>
                    {service.features.map((feat, i) => (
                      <li key={i} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        fontSize: '0.84rem',
                        color: 'var(--text-secondary)'
                      }}>
                        <CheckCircle size={14} color="var(--brand-green)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer: Time & Action */}
                <div style={{
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)'
                  }}>
                    <Clock size={13} />
                    <span>Est: {service.estimatedTime}</span>
                  </div>

                  <button
                    onClick={() => onOpenBooking(service.title)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--brand-green)',
                      fontSize: '0.86rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      transition: 'gap 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.gap = '8px')}
                    onMouseLeave={(e) => (e.currentTarget.style.gap = '4px')}
                  >
                    <span>Book Service</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '48px 0',
            color: 'var(--text-muted)'
          }}>
            <p style={{ fontSize: '1.1rem' }}>No services found matching "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="btn-secondary"
              style={{ marginTop: '12px' }}
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

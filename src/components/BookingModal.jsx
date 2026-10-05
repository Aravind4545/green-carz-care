import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Car, Phone, User, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { VEHICLE_PACKAGES, BUSINESS_INFO } from '../data/servicesData';
import confetti from 'canvas-confetti';

export function BookingModal({ isOpen, onClose, preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carMakeModel: '',
    selectedPackage: 'SUV Package (₹3,999/-)',
    preferredDate: '',
    preferredTime: '10:00 AM',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({
        ...prev,
        selectedPackage: preselectedService
      }));
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 }
    });

    setIsSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const text = `*GREEN CARZ CARE - SERVICE APPOINTMENT REQUEST*\n\n` +
      `*Customer Name:* ${formData.name}\n` +
      `*Phone Number:* ${formData.phone}\n` +
      `*Car Model:* ${formData.carMakeModel || 'Not provided'}\n` +
      `*Service / Package:* ${formData.selectedPackage}\n` +
      `*Preferred Date:* ${formData.preferredDate || 'Earliest available'}\n` +
      `*Preferred Time:* ${formData.preferredTime}\n` +
      `*Special Notes:* ${formData.notes || 'None'}\n\n` +
      `Please confirm my booking slot. Thank you!`;

    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '36px 32px' }}>
        {/* Close Button */}
        <button onClick={onClose} className="modal-close-btn" title="Close">
          <X size={18} />
        </button>

        {!isSubmitted ? (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(144, 192, 67, 0.15)',
                color: 'var(--brand-green-light)',
                padding: '4px 12px',
                borderRadius: '999px',
                fontSize: '0.78rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                marginBottom: '10px'
              }}>
                <Sparkles size={14} /> Priority Bay Reservation
              </span>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '6px' }}>
                Book Your Car Care Slot
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                Fill in your details below. We will confirm your preferred timing immediately via WhatsApp or Phone.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. K. Vamsi"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98480 12345"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Car Model & Year</label>
                  <input
                    type="text"
                    placeholder="e.g. Hyundai Creta, Swift, City"
                    value={formData.carMakeModel}
                    onChange={(e) => setFormData({ ...formData, carMakeModel: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Service or Package</label>
                  <select
                    value={formData.selectedPackage}
                    onChange={(e) => setFormData({ ...formData, selectedPackage: e.target.value })}
                    className="form-select"
                  >
                    <option value="HATCH BACK Package (₹1,999/-)">HATCH BACK Package (₹1,999/-)</option>
                    <option value="SEDAN Package (₹2,999/-)">SEDAN Package (₹2,999/-)</option>
                    <option value="SUV Package (₹3,999/-)">SUV Package (₹3,999/-)</option>
                    <option value="PREMIUM Package (₹4,999/-)">PREMIUM Package (₹4,999/-)</option>
                    <option value="Nano Ceramic Coating (9H)">Nano Ceramic Coating (9H)</option>
                    <option value="Teflon Coating">Teflon Paint Coating</option>
                    <option value="3D Wheel Alignment & Balancing">3D Wheel Alignment & Balancing</option>
                    <option value="Care Steam Spa & Car Wrap">Care Steam Spa & Car Wrap</option>
                    <option value="AC Top Up & Cleaning">AC Top Up & Cleaning</option>
                    <option value="Branded Tyres (Yokohama/Michelin)">Branded Tyres (Yokohama/Michelin)</option>
                    <option value="General Checkup & Oil Change">General Checkup & Oil Change</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Preferred Date</label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Preferred Time Slot</label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="form-select"
                  >
                    <option value="08:30 AM - 10:00 AM">08:30 AM - 10:00 AM (Morning Slot)</option>
                    <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM (Midday)</option>
                    <option value="12:00 PM - 02:00 PM">12:00 PM - 02:00 PM (Afternoon)</option>
                    <option value="02:30 PM - 04:30 PM">02:30 PM - 04:30 PM (Late Afternoon)</option>
                    <option value="05:00 PM - 07:30 PM">05:00 PM - 07:30 PM (Evening)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Special Notes / Requests</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Please check AC cooling and replace cabin filter too"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="form-textarea"
                />
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ flex: 1, padding: '14px', fontSize: '1rem' }}
                >
                  Confirm Appointment
                </button>
                <button
                  type="button"
                  onClick={handleSendToWhatsApp}
                  className="btn-whatsapp"
                  style={{ padding: '14px 20px' }}
                >
                  <MessageSquare size={18} />
                  <span>WhatsApp Direct</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px 10px' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(144, 192, 67, 0.15)',
              color: 'var(--brand-green)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px auto',
              border: '2px solid var(--brand-green)'
            }}>
              <CheckCircle2 size={36} />
            </div>

            <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '8px' }}>
              Appointment Reserved!
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.6 }}>
              Thank you, <strong>{formData.name}</strong>! Your request for <strong>{formData.selectedPackage}</strong> has been logged.
              Our service manager will confirm the bay schedule with you right away.
            </p>

            <div style={{
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              padding: '20px',
              textAlign: 'left',
              marginBottom: '24px',
              fontSize: '0.88rem'
            }}>
              <div style={{ marginBottom: '6px' }}><strong>Car:</strong> {formData.carMakeModel || 'To be confirmed'}</div>
              <div style={{ marginBottom: '6px' }}><strong>Package:</strong> {formData.selectedPackage}</div>
              <div style={{ marginBottom: '6px' }}><strong>Slot:</strong> {formData.preferredDate || 'Earliest available'} at {formData.preferredTime}</div>
              <div><strong>Workshop:</strong> Eluru Road, Opp. Kids E.M. School, Jangareddygudem</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button
                onClick={handleSendToWhatsApp}
                className="btn-whatsapp"
                style={{ width: '100%', padding: '14px' }}
              >
                <MessageSquare size={18} />
                <span>Send Booking Slip to WhatsApp (+91 880 415 9999)</span>
              </button>

              <button
                onClick={onClose}
                className="btn-secondary"
                style={{ width: '100%' }}
              >
                Done / Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

import React from 'react'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  UserCheck,
  Shield
} from 'lucide-react'

export default function ContactPage() {
  return (
    <section className="contact-wrapper" style={{ minHeight: 'calc(100vh - var(--nav-height) - 300px)', backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <div className="card glass-panel" style={{ padding: '48px', borderRadius: 'var(--radius-lg)' }}>
          <span className="section-label">Get in Touch</span>
          <h1 className="section-title" style={{ marginBottom: '16px' }}>Contact Moonlight Hostel</h1>
          <p style={{ color: 'var(--text-main)', marginBottom: '40px', maxWidth: '600px', lineHeight: 1.6 }}>
            Have questions about room availability, amenities, fees, or booking procedure? Reach out to us, and our team will assist you.
          </p>

          <div className="contact-grid-layout">
            
            {/* Left Column: Contact Details & Map */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div>
                <h2 style={{ color: '#ffffff', fontSize: '1.4rem', fontWeight: 700, marginBottom: '24px' }}>Contact Information</h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div className="about-bullet-icon" style={{ backgroundColor: 'var(--secondary-soft)', color: 'var(--secondary-accent)', marginTop: '4px' }}>
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem', marginBottom: '4px' }}>Our Location</h4>
                      <p style={{ color: 'var(--text-main)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                        D.Y. Patil University Road, Sai Samruddhi Park,<br />
                        Nimbalkar Nagar, Lane No. 6, Lohegaon, Pune - 411047
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div className="about-bullet-icon" style={{ backgroundColor: 'var(--secondary-soft)', color: 'var(--secondary-accent)', marginTop: '4px' }}>
                      <Phone size={18} />
                    </div>
                    <div>
                      <h4 style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem', marginBottom: '4px' }}>WhatsApp & Calls</h4>
                      <p style={{ color: 'var(--text-main)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                        <a href="tel:+919270132323" style={{ color: 'inherit', textDecoration: 'none' }}>+91 92701 32323</a> (Somnath Bhalsing)
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div className="about-bullet-icon" style={{ backgroundColor: 'var(--secondary-soft)', color: 'var(--secondary-accent)', marginTop: '4px' }}>
                      <Mail size={18} />
                    </div>
                    <div>
                      <h4 style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem', marginBottom: '4px' }}>Email Support</h4>
                      <p style={{ color: 'var(--text-main)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                        <a href="mailto:info@moonlighthostels.com" style={{ color: 'inherit', textDecoration: 'none' }}>info@moonlighthostels.com</a>
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div className="about-bullet-icon" style={{ backgroundColor: 'var(--secondary-soft)', color: 'var(--secondary-accent)', marginTop: '4px' }}>
                      <Clock size={18} />
                    </div>
                    <div>
                      <h4 style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem', marginBottom: '4px' }}>Availability</h4>
                      <p style={{ color: 'var(--text-main)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                        Warden On-site Support: 24 Hours / 7 Days
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Warden / Representative Info Card */}
              <div className="card" style={{ border: '1px solid rgba(255,255,255,0.12)', padding: '24px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--secondary)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '1.2rem', shrink: 0 }}>SB</div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: '#ffffff', fontWeight: '700', marginBottom: '4px' }}>Somnath Bhalsing</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Hostel Representative / Manager</span>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', fontSize: '0.85rem', color: 'var(--accent-color)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Shield size={12} /> Gated Security</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><UserCheck size={12} /> Resident Warden</span>
                  </div>
                </div>
              </div>

              {/* Real Google Map Embed */}
              <div className="map-mockup shadow-lg" style={{ height: '280px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.12)' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.3194150083901!2d73.91477640792495!3d18.614092696003972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c692ed565e23%3A0x2c2a47070c0ebe05!2sJW77%2BJW4%2C%20Lane%20Number%206%2C%20Lohegaon%2C%20Pune%2C%20Maharashtra%20411047!5e0!3m2!1sen!2sin!4v1781172505631!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Moonlight Boys Hostel Google Map Location"
                />
              </div>
            </div>

            {/* Right Column: Direct Booking & WhatsApp Call Panel */}
            <div className="booking-form-panel" style={{ padding: '40px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2 style={{ color: '#ffffff', fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px' }}>Instant Assistance</h2>
              <p style={{ color: 'var(--text-main)', marginBottom: '32px', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Get in touch instantly. Connect with our manager via WhatsApp or a direct phone call for instant room assignment, slot checking, or fee info.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                <a
                  href="https://wa.me/919270132323?text=Hi%20Somnath,%20I'm%20interested%20in%20booking%20a%20double%20sharing%20room%20at%20Moonlight%20Hostel."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent"
                  style={{ width: '100%', backgroundColor: '#25d366', color: '#ffffff', borderColor: '#25d366', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', height: '48px', fontSize: '0.95rem', fontWeight: 600 }}
                >
                  <MessageSquare size={18} /> Message on WhatsApp
                </a>

                <a
                  href="tel:+919270132323"
                  className="btn btn-secondary"
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', height: '48px', fontSize: '0.95rem', fontWeight: 600, border: '1px solid rgba(255, 255, 255, 0.2)' }}
                >
                  <Phone size={16} /> Direct Call (+91 92701 32323)
                </a>
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: 'var(--accent-color)', fontSize: '1.1rem' }}>✓</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-main)' }}>Confirm pricing, plans, & available slots</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: 'var(--accent-color)', fontSize: '1.1rem' }}>✓</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-main)' }}>Request live photos & video walkthroughs</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: 'var(--accent-color)', fontSize: '1.1rem' }}>✓</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-main)' }}>Schedule in-person campus visits</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

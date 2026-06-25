import React from 'react'

export default function BoysPgLohegaon() {
  return (
    <div>
      {/* Hero / Introduction Page Section */}
      <section className="seo-page-hero" style={{ background: 'linear-gradient(135deg, var(--bg-main) 0%, var(--bg-card) 100%)', position: 'relative', overflow: 'hidden' }}>
        <div className="glow-backdrop" style={{ top: '10%', right: '5%' }}></div>
        <div className="container">
          <div className="seo-grid">
            <div>
              <span className="section-label">Premium Coliving Space</span>
              <h1 className="seo-title">
                Premium <span style={{ color: 'var(--accent-color)' }}>Boys PG in Lohegaon</span>, Pune
              </h1>
              <p className="seo-subtitle">
                Welcome to Moonlight Hostel, the ultimate student accommodation in Lohegaon. Designed exclusively for ambitious male university students, we offer premium double-sharing rooms that blend a high-focus study atmosphere with comfortable living spaces.
              </p>

              <div style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ color: 'var(--accent-color)', flexShrink: 0, marginTop: '3px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  </span>
                  <div>
                    <strong style={{ color: '#ffffff' }}>Private 1:1 Study Desk & Chair:</strong> Every single student gets their own ergonomic workspace with nearby electric sockets and reading lights.
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ color: 'var(--accent-color)', flexShrink: 0, marginTop: '3px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  </span>
                  <div>
                    <strong style={{ color: '#ffffff' }}>Balcony Rooms & Ventilation:</strong> Large airy spaces, designer curtains, and high-quality wardrobes with double storage.
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ color: 'var(--accent-color)', flexShrink: 0, marginTop: '3px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  </span>
                  <div>
                    <strong style={{ color: '#ffffff' }}>Nutritious Dining Covered:</strong> Weekday breakfast & dinner, combined with full weekend catering (including Saturday lunch and a premium Sunday brunch).
                  </div>
                </div>
              </div>

              <a href="/#booking" className="btn btn-primary" onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/#booking');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}>Book Your Space Now</a>
            </div>

            <div>
              <div className="card glass-panel" style={{ padding: '36px', borderRadius: 'var(--radius-lg)' }}>
                <h2 style={{ color: '#ffffff', fontSize: '1.5rem', marginBottom: '16px' }}>Why Lohegaon Students Choose Us</h2>
                <p style={{ color: 'var(--text-main)', marginBottom: '20px', lineHeight: 1.6 }}>
                  Lohegaon has become one of Pune's primary educational hubs. Moonlight Hostel is strategically located in Nimbalkar Nagar (Lane 6), off D.Y. Patil University Road, providing students with peaceful, quiet surroundings away from highway noise while keeping campus access within walking distance.
                </p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
                  <h3 style={{ color: 'var(--accent-color)', fontSize: '1.1rem', marginBottom: '8px' }}>Quick Proximities:</h3>
                  <ul style={{ color: 'var(--text-main)', marginLeft: '20px', fontSize: '0.95rem' }}>
                    <li style={{ marginBottom: '8px' }}>D.Y. Patil University Campus: <strong>1.2 km</strong> (shuttle support available)</li>
                    <li style={{ marginBottom: '8px' }}>Local Food courts & Cafes: <strong>200 meters</strong></li>
                    <li style={{ marginBottom: '8px' }}>Pune International Airport: <strong>3.5 km</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="section bg-main-gradient">
        <div className="container">
          <div className="section-header">
            <span className="section-label">All-Inclusive Living</span>
            <h2 className="section-title">Designed for Students' Comfort and Safety</h2>
            <p>No extra fees, no hidden bills. One single pricing plan covers all your utility bills, food, laundry, Wi-Fi, and security.</p>
          </div>

          <div className="seo-cards-grid">
            <div className="card glass-panel" style={{ padding: '28px' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '12px' }}>High-Speed Fiber Wi-Fi</h3>
              <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.6 }}>Stay connected with high-speed fiber internet backup across all floors. Ideal for attending university lectures, completing project research, and gaming during recreation hours.</p>
            </div>

            <div className="card glass-panel" style={{ padding: '28px' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '12px' }}>Daily Cleaning & Laundry</h3>
              <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.6 }}>Our professional housekeeping staff sweeps and cleans student rooms daily. Wardrobe laundry and washing is handled free of charge multiple times a week.</p>
            </div>

            <div className="card glass-panel" style={{ padding: '28px' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '12px' }}>Biometric Safety Access</h3>
              <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.6 }}>Only authorized students can enter the building via biometric fingerprint scan gates. The premises are under 24/7 CCTV tracking with a full-time warden residing on-site.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import React from 'react'

export default function HostelNearDyPatil() {
  return (
    <div>
      {/* Hero / Introduction Page Section */}
      <section className="seo-page-hero" style={{ padding: '140px 0 80px 0', background: 'linear-gradient(135deg, var(--bg-main) 0%, var(--bg-card) 100%)', position: 'relative', overflow: 'hidden' }}>
        <div className="glow-backdrop" style={{ top: '10%', right: '5%' }}></div>
        <div className="container">
          <div className="seo-grid">
            <div>
              <span className="section-label">Strategic Student Housing</span>
              <h1 className="seo-title" style={{ fontSize: '3rem', lineHeight: 1.2, color: '#ffffff', marginBottom: '20px' }}>
                Premium <span style={{ color: 'var(--accent-color)' }}>Hostel near D.Y. Patil University</span>, Pune
              </h1>
              <p className="seo-subtitle" style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '32px', lineHeight: 1.6 }}>
                Staying close to campus shouldn't mean compromising on study environment quality. Located just 1.2 km from D.Y. Patil University (DYPU) Lohegaon campus, Moonlight Hostel is a brand new building specifically optimized for student success.
              </p>

              <div style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ color: 'var(--accent-color)', flexShrink: 0, marginTop: '3px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </span>
                  <div>
                    <strong style={{ color: '#ffffff' }}>Daily Campus Shuttle Support:</strong> Optional doorstep vehicle support ensuring quick transport to the university campus.
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ color: 'var(--accent-color)', flexShrink: 0, marginTop: '3px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </span>
                  <div>
                    <strong style={{ color: '#ffffff' }}>24/7 DG Power Backup:</strong> Uninterrupted study schedules! Heavy-duty generator keeps Wi-Fi, fans, lights, and study areas online even during grid outages.
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ color: 'var(--accent-color)', flexShrink: 0, marginTop: '3px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </span>
                  <div>
                    <strong style={{ color: '#ffffff' }}>1:1 Student-to-Desk Ratio:</strong> No workspace sharing. Enjoy a dedicated table, high-back ergonomic chair, and private lights to review course lectures in comfort.
                  </div>
                </div>
              </div>

              <a href="/#booking" className="btn btn-primary" onClick={(e) => {
                e.preventDefault();
                window.location.hash = '#booking';
              }}>Book Your Room Now</a>
            </div>

            <div>
              <div className="card glass-panel" style={{ padding: '36px', borderRadius: 'var(--radius-lg)' }}>
                <h2 style={{ color: '#ffffff', fontSize: '1.5rem', marginBottom: '16px' }}>Academic & Comfort Synergy</h2>
                <p style={{ color: 'var(--text-main)', marginBottom: '20px', lineHeight: 1.6 }}>
                  D.Y. Patil University offers world-class courses, requiring focus and hard work. Our coliving facilities are structured so you spend zero time worrying about laundry, dining preparation, room cleaning, or power disruptions. Everything is fully managed for you.
                </p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
                  <h3 style={{ color: 'var(--accent-color)', fontSize: '1.1rem', marginBottom: '8px' }}>Key Distance Indicators:</h3>
                  <ul style={{ color: 'var(--text-main)', marginLeft: '20px', fontSize: '0.95rem' }}>
                    <li style={{ marginBottom: '8px' }}>D.Y. Patil School of Engineering: <strong>1.2 km</strong></li>
                    <li style={{ marginBottom: '8px' }}>D.Y. Patil School of Management: <strong>1.2 km</strong></li>
                    <li style={{ marginBottom: '8px' }}>Hostel Doorstep to Campus Gate: <strong>4 mins drive / 12 mins walk</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Benefits */}
      <section className="section bg-main-gradient">
        <div className="container">
          <div className="section-header">
            <span className="section-label">All-Inclusive Student Amenities</span>
            <h2 className="section-title">Built Around Your University Life</h2>
            <p>Avoid standard rental headaches and focus on your engineering, management, or academic course goals.</p>
          </div>

          <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div className="card glass-panel" style={{ padding: '28px' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '12px' }}>Hot Water & Comfort</h3>
              <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.6 }}>Equipped with heavy-duty geysers for clean hot water. Rooms feature premium remote-controlled fans and custom block-out designer curtains for better night rest.</p>
            </div>

            <div className="card glass-panel" style={{ padding: '28px' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '12px' }}>Hygienic Student Kitchen</h3>
              <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.6 }}>Enjoy nutritious home-style meals served on-time daily. Ground floor access to shared microwave and refrigeration units for quick study-session snacks.</p>
            </div>

            <div className="card glass-panel" style={{ padding: '28px' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '12px' }}>Indoor Sports & Chill Zone</h3>
              <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.6 }}>De-stress during exams in our indoor gaming zone. Features Table Tennis, Carrom, Chess, and Ludo, with outdoor Cricket gear also available.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

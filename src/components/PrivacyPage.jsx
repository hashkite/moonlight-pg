import React from 'react'

export default function PrivacyPage() {
  return (
    <section className="policy-wrapper" style={{ padding: '120px 0 80px 0', minHeight: 'calc(100vh - var(--nav-height) - 300px)', backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <div className="card glass-panel" style={{ padding: '48px', borderRadius: 'var(--radius-lg)' }}>
          <span className="section-label">Legal Information</span>
          <h1 className="section-title" style={{ marginBottom: '24px' }}>Privacy Policy</h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '32px' }}>Last Updated: June 19, 2026</p>

          <div className="policy-content">
            <p style={{ color: 'var(--text-main)', lineHeight: 1.7, marginBottom: '16px' }}>At Moonlight Hostel, accessible from https://moonlighthostels.com, one of our main priorities is the privacy of our visitors and student residents. This Privacy Policy document contains types of information that is collected and recorded by Moonlight Hostel and how we use it.</p>
            
            <p style={{ color: 'var(--text-main)', lineHeight: 1.7, marginBottom: '16px' }}>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at info@moonlighthostels.com.</p>

            <h2 style={{ color: '#ffffff', marginTop: '32px', marginBottom: '16px', fontSize: '1.5rem', fontWeight: 700 }}>Information We Collect</h2>
            <p style={{ color: 'var(--text-main)', lineHeight: 1.7, marginBottom: '16px' }}>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
            <ul style={{ marginLeft: '24px', marginBottom: '20px', color: 'var(--text-main)' }}>
              <li style={{ marginBottom: '8px', lineHeight: 1.6 }}><strong>Contact details:</strong> Name, email address, phone number, and physical address.</li>
              <li style={{ marginBottom: '8px', lineHeight: 1.6 }}><strong>Academic details:</strong> College name (e.g. D.Y. Patil University), course details, and academic year.</li>
              <li style={{ marginBottom: '8px', lineHeight: 1.6 }}><strong>Parent/Guardian Information:</strong> Name, relationship, and emergency contact phone number.</li>
              <li style={{ marginBottom: '8px', lineHeight: 1.6 }}><strong>Payment details:</strong> Bank account transfers, transactions, and deposit receipts.</li>
            </ul>

            <h2 style={{ color: '#ffffff', marginTop: '32px', marginBottom: '16px', fontSize: '1.5rem', fontWeight: 700 }}>How We Use Your Information</h2>
            <p style={{ color: 'var(--text-main)', lineHeight: 1.7, marginBottom: '16px' }}>We use the information we collect in various ways, including to:</p>
            <ul style={{ marginLeft: '24px', marginBottom: '20px', color: 'var(--text-main)' }}>
              <li style={{ marginBottom: '8px', lineHeight: 1.6 }}>Process your hostel room booking and manage your admission records.</li>
              <li style={{ marginBottom: '8px', lineHeight: 1.6 }}>Send important booking confirmations, payment receipts, and security updates.</li>
              <li style={{ marginBottom: '8px', lineHeight: 1.6 }}>Maintain security records, including on-site biometric logs and warden checks.</li>
              <li style={{ marginBottom: '8px', lineHeight: 1.6 }}>Improve, personalize, and expand our hostel website and services.</li>
              <li style={{ marginBottom: '8px', lineHeight: 1.6 }}>Communicate with you or your emergency contact for support, safety warnings, and dining schedules.</li>
            </ul>

            <h2 style={{ color: '#ffffff', marginTop: '32px', marginBottom: '16px', fontSize: '1.5rem', fontWeight: 700 }}>Security of Student Data</h2>
            <p style={{ color: 'var(--text-main)', lineHeight: 1.7, marginBottom: '16px' }}>We implement a variety of security measures to maintain the safety of your personal information. Student admission forms, biometric access records, and financial transaction details are stored securely. Entrance control is secured strictly via physical biometric readers, and camera feeds are only monitored on-site by authorized wardens.</p>

            <h2 style={{ color: '#ffffff', marginTop: '32px', marginBottom: '16px', fontSize: '1.5rem', fontWeight: 700 }}>Third-Party Services</h2>
            <p style={{ color: 'var(--text-main)', lineHeight: 1.7, marginBottom: '16px' }}>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted host web platforms or email servers that assist us in operating our website, so long as those parties agree to keep this information confidential.</p>

            <h2 style={{ color: '#ffffff', marginTop: '32px', marginBottom: '16px', fontSize: '1.5rem', fontWeight: 700 }}>Consent</h2>
            <p style={{ color: 'var(--text-main)', lineHeight: 1.7, marginBottom: '16px' }}>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

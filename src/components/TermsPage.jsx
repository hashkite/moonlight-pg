import React from 'react'

export default function TermsPage() {
  return (
    <section className="policy-wrapper" style={{ padding: '120px 0 80px 0', minHeight: 'calc(100vh - var(--nav-height) - 300px)', backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <div className="card glass-panel" style={{ padding: '48px', borderRadius: 'var(--radius-lg)' }}>
          <span className="section-label">Rules & Regulations</span>
          <h1 className="section-title" style={{ marginBottom: '24px' }}>Terms & Conditions</h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '32px' }}>Last Updated: June 19, 2026</p>

          <div className="policy-content">
            <p style={{ color: 'var(--text-main)', lineHeight: 1.7, marginBottom: '16px' }}>Welcome to Moonlight Hostel. These Terms and Conditions govern the admission, booking, occupancy, and rules of conduct for residents staying at our properties located near D.Y. Patil University, Lohegaon, Pune.</p>
            
            <p style={{ color: 'var(--text-main)', lineHeight: 1.7, marginBottom: '16px' }}>By filling out the online admission form, submitting your reservation deposit, or checking into your room, you and your parent/guardian agree to be bound by these rules. Failure to comply with these terms may lead to immediate termination of occupancy.</p>

            <h2 style={{ color: '#ffffff', marginTop: '32px', marginBottom: '16px', fontSize: '1.5rem', fontWeight: 700 }}>1. Admission & Room Allocation</h2>
            <p style={{ color: 'var(--text-main)', lineHeight: 1.7, marginBottom: '16px' }}>Hostel rooms are allocated on a first-come, first-served basis. Room configurations are strictly double-sharing. The warden and management reserve absolute authority on room allotment and partner placements to maintain study-friendly environments.</p>

            <h2 style={{ color: '#ffffff', marginTop: '32px', marginBottom: '16px', fontSize: '1.5rem', fontWeight: 700 }}>2. Academic Code of Conduct</h2>
            <ul style={{ marginLeft: '24px', marginBottom: '20px', color: 'var(--text-main)' }}>
              <li style={{ marginBottom: '8px', lineHeight: 1.6 }}><strong>Zero Tolerance for Ragging:</strong> In compliance with UGC anti-ragging regulations, ragging is strictly prohibited. Any resident found engaging in harassment of other students will be expelled immediately, and a report will be filed with university authorities and police.</li>
              <li style={{ marginBottom: '8px', lineHeight: 1.6 }}><strong>Silence Hours:</strong> Strictly observed between 10:30 PM and 6:00 AM to allow students uninterrupted sleep and exam study schedules.</li>
              <li style={{ marginBottom: '8px', lineHeight: 1.6 }}><strong>Gate Timings:</strong> The main entrance gates close at 10:30 PM daily. Prior written permission from parents via email/text is required for late entry or night outs.</li>
              <li style={{ marginBottom: '8px', lineHeight: 1.6 }}><strong>Visitor/Guest Policy:</strong> Female guests and parents are allowed only in the common visitor zone on the ground floor during visiting hours (10:00 AM to 7:00 PM). Overnight stay for guests is strictly forbidden.</li>
            </ul>

            <h2 style={{ color: '#ffffff', marginTop: '32px', marginBottom: '16px', fontSize: '1.5rem', fontWeight: 700 }}>3. Fee Schedule & Payment Rules</h2>
            <p style={{ color: 'var(--text-main)', lineHeight: 1.7, marginBottom: '16px' }}>The annual fee structure for double-sharing rooms is ₹1,60,000 for the academic session (payable in instalments as agreed during admission). Rent includes accommodation, utilities, breakfast/dinner (weekdays), 3-course weekend meals, laundry, high-speed Wi-Fi, and professional housekeeping.</p>
            <ul style={{ marginLeft: '24px', marginBottom: '20px', color: 'var(--text-main)' }}>
              <li style={{ marginBottom: '8px', lineHeight: 1.6 }}>Instalment payments must be cleared on or before the designated due date. A late fee will be charged for delays exceeding 5 days.</li>
              <li style={{ marginBottom: '8px', lineHeight: 1.6 }}>Electricity usage inside individual rooms for high-load appliances (such as personal heaters or coolers) is subject to extra metered billing if installed by students.</li>
            </ul>

            <h2 style={{ color: '#ffffff', marginTop: '32px', marginBottom: '16px', fontSize: '1.5rem', fontWeight: 700 }}>4. Asset Damage & Maintenance</h2>
            <p style={{ color: 'var(--text-main)', lineHeight: 1.7, marginBottom: '16px' }}>Every student is provided with a premium wooden study table, high-back ergonomic chair, cupboard space, and orthopedic mattress. Residents are responsible for keeping their room and furniture in good condition. Any damages to hostel properties or assets will be repaired at the cost of the occupants of that room.</p>

            <h2 style={{ color: '#ffffff', marginTop: '32px', marginBottom: '16px', fontSize: '1.5rem', fontWeight: 700 }}>5. Security & Amenities</h2>
            <p style={{ color: 'var(--text-main)', lineHeight: 1.7, marginBottom: '16px' }}>While the hostel offers biometric access control, on-site wardens, and 24/7 CCTV surveillance in common areas, residents are solely responsible for their personal belongings. Moonlight Hostel is not liable for the loss of laptops, mobile phones, or other valuables.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

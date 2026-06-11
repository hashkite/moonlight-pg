import { useState, useEffect } from 'react'
import { 
  Wifi, 
  Shield, 
  Utensils, 
  Shirt, 
  Zap, 
  BookOpen, 
  Gamepad2, 
  MapPin, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  Info, 
  Clock, 
  MessageSquare,
  Sparkles,
  Home,
  UserCheck,
  FileText,
  Menu,
  X,
  Mail
} from 'lucide-react'
import roomImg from './assets/room.png'
import loungeImg from './assets/lounge.png'

function App() {
  // Navigation active section tracking
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  // Amenities category filter state
  const [activeCategory, setActiveCategory] = useState('all')

  // Calculator state variables
  const [outsideMealCost, setOutsideMealCost] = useState(6000) // Monthly
  const [outsideLaundryCost, setOutsideLaundryCost] = useState(1200) // Monthly
  const [outsideWifiCost, setOutsideWifiCost] = useState(800) // Monthly
  const [outsideCleaningCost, setOutsideCleaningCost] = useState(1000) // Monthly

  // Booking Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    college: 'D.Y. Patil University',
    message: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  // Scroll handler for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Determine active section on scroll
      const sections = ['home', 'about', 'amenities', 'calculator', 'booking', 'contact']
      const scrollPosition = window.scrollY + 120

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const offsetTop = el.offsetTop
          const offsetHeight = el.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll helper
  const scrollTo = (id) => {
    setMobileMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      })
      setActiveSection(id)
    }
  }

  // Amenities Data
  const amenitiesList = [
    // Living Essentials
    { id: 1, name: 'Attached Western Washroom', desc: 'Private attached washrooms with a clean 1:2 student-to-washroom ratio.', category: 'living', icon: Shield },
    { id: 2, name: '1:1 Student Study Desk', desc: 'Every resident gets a dedicated, spacious study table and ergonomic chair (1:1 ratio).', category: 'living', icon: BookOpen },
    { id: 3, name: 'Double Cupboard Space', desc: 'Almost double the wardrobe storage compared to standard outside hostels.', category: 'living', icon: Sparkles },
    { id: 4, name: 'Hot Water Geyser', desc: 'Equipped with heavy-duty geysers for uninterrupted hot water access.', category: 'living', icon: Zap },
    { id: 5, name: 'Remote Control Fans', desc: 'Premium fans with wireless remote controllers for customizable comfort.', category: 'living', icon: Sparkles },
    { id: 6, name: 'High-Quality Mattresses & Pillows', desc: 'Fully furnished with comfortable orthopedic mattresses, pillows, and designer curtains.', category: 'living', icon: Home },
    
    // Services & Convenience
    { id: 7, name: 'Free Laundry Service', desc: 'No extra charges! Full laundry facilities are completely free for all residents.', category: 'services', icon: Shirt },
    { id: 8, name: 'High-Speed Wi-Fi', desc: 'High-bandwidth fiber internet connection across the entire building for study and leisure.', category: 'services', icon: Wifi },
    { id: 9, name: 'Daily Professional Housekeeping', desc: 'Daily room and kitchen cleaning, with washrooms scrubbed 3 times a week.', category: 'services', icon: Sparkles },
    { id: 10, name: 'DG Power Backup', desc: 'Heavy-duty diesel generator backup to keep Wi-Fi, lights, and study areas online 24/7.', category: 'services', icon: Zap },
    { id: 11, name: 'RO Water Purification', desc: 'Large capacity RO water plant on-site with clean drinking water dispensers on all floors.', category: 'services', icon: Info },
    { id: 12, name: 'Daily Campus Shuttle Support', desc: 'Optional transport available from the hostel doorstep to D.Y. Patil University campus.', category: 'services', icon: MapPin },

    // Food & Dining
    { id: 13, name: 'Daily Nutritious Breakfast & Dinner', desc: 'Freshly prepared, hygienic home-style meals served from Monday to Friday.', category: 'dining', icon: Utensils },
    { id: 14, name: 'Full Weekend Catering & Sunday Brunch', desc: 'Includes Breakfast, Lunch, and Dinner on Saturdays and Sundays. Sunday features a special brunch.', category: 'dining', icon: Utensils },
    { id: 15, name: 'Common Kitchen Appliance Access', desc: 'Equipped with a common refrigerator and microwave oven on the ground floor for quick snacks.', category: 'dining', icon: Home },

    // Safety & Community
    { id: 16, name: 'Biometric Access Control', desc: 'Secure card-key and biometric entry systems ensuring absolute unauthorized entry prevention.', category: 'safety', icon: Shield },
    { id: 17, name: '24/7 CCTV Surveillance', desc: 'Continuous camera monitoring across corridors, entrances, and common areas.', category: 'safety', icon: Shield },
    { id: 18, name: 'On-Site Resident Warden', desc: 'A professional warden resides on-site to assist students and enforce house discipline.', category: 'safety', icon: UserCheck },
    { id: 19, name: 'Anti-Ragging Compliance', desc: 'Strict zero-tolerance policy with signed agreements required for booking.', category: 'safety', icon: FileText },
    { id: 20, name: 'First Aid & Medical Kit', desc: 'Fully stocked emergency medicine cabinet and first-aid kits available on-demand.', category: 'safety', icon: Info },

    // Recreation
    { id: 21, name: 'Indoor Gaming Zone', desc: 'Fully equipped zone featuring Table Tennis, Carrom, Chess, and Ludo (ready by end of July).', category: 'recreation', icon: Gamepad2 },
    { id: 22, name: 'Outdoor Sports Facilities', desc: 'Dedicated equipment and setup for Cricket matches and Badminton sessions.', category: 'recreation', icon: Gamepad2 }
  ]

  // Filter amenities list based on state
  const filteredAmenities = activeCategory === 'all' 
    ? amenitiesList 
    : amenitiesList.filter(item => item.category === activeCategory)

  // Calculator Math
  // Moonlight Hostel Monthly cost is ₹1,60,000 / 12 = ₹13,333
  const moonlightHostelMonthlyRent = 13333
  // Outside standard basic room rent for 2 sharing is around ₹7,000 in Lohegaon (empty)
  const outsideRentCost = 7000 
  
  const totalOutsideMonthly = outsideRentCost + outsideMealCost + outsideLaundryCost + outsideWifiCost + outsideCleaningCost
  const moonlightHostelTotalIncluded = moonlightHostelMonthlyRent // Everything else is ₹0
  const monthlySavings = totalOutsideMonthly - moonlightHostelTotalIncluded
  const yearlySavings = monthlySavings * 12

  // Handle Form Submit
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.phone) return

    setIsSubmitting(true)
    setSubmitError(null)

    const webhookUrl = import.meta.env.VITE_FORM_WEBHOOK_URL || ''
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || ''

    try {
      if (webhookUrl) {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        })

        if (!response.ok) {
          throw new Error('Failed to submit callback request to the server.')
        }
      } else if (accessKey) {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `New Call Back Request from ${formData.name}`,
            from_name: 'Moonlight Hostel Website',
            ...formData
          })
        })

        const data = await response.json()
        if (!response.ok || !data.success) {
          throw new Error(data.message || 'Failed to submit form via Web3Forms.')
        }
      } else {
        // Fallback simulation (default behavior if no keys are provided)
        console.log('Simulating form submission (no API URL or Web3Forms key configured):', formData)
        await new Promise((resolve) => setTimeout(resolve, 1000))
      }

      setFormSubmitted(true)
      // Reset form after a timeout
      setTimeout(() => {
        setFormData({ name: '', phone: '', email: '', college: 'D.Y. Patil University', message: '' })
        setFormSubmitted(false)
      }, 5000)
    } catch (err) {
      console.error('Submission error:', err)
      setSubmitError(err.message || 'Something went wrong. Please try again or contact Somnath directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Navigation Header */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>
            <span className="logo-icon">M</span>
            <span>Moonlight Hostel</span>
          </a>

          {/* Desktop Links */}
          <div className="nav-links desktop-nav">
            <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>Home</a>
            <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>About Us</a>
            <a href="#amenities" className={`nav-link ${activeSection === 'amenities' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollTo('amenities'); }}>Amenities</a>
            <a href="#calculator" className={`nav-link ${activeSection === 'calculator' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollTo('calculator'); }}>Rent Calculator</a>
            <a href="#booking" className={`nav-link ${activeSection === 'booking' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollTo('booking'); }}>Booking info</a>
            <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Contact</a>
          </div>

          <div className="nav-cta">
            <button className="btn btn-accent btn-sm" onClick={() => scrollTo('booking')}>
              <CheckCircle2 size={16} /> Book Room
            </button>
          </div>

          {/* Hamburger Menu Icon */}
          <button 
            className="menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>Home</a>
          <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>About Us</a>
          <a href="#amenities" className={`nav-link ${activeSection === 'amenities' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollTo('amenities'); }}>Amenities</a>
          <a href="#calculator" className={`nav-link ${activeSection === 'calculator' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollTo('calculator'); }}>Rent Calculator</a>
          <a href="#booking" className={`nav-link ${activeSection === 'booking' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollTo('booking'); }}>Booking info</a>
          <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Contact</a>
          <button className="btn btn-accent btn-sm" onClick={() => scrollTo('booking')} style={{ marginTop: '12px' }}>
            Book Room Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-wrapper">
        <div className="container hero-grid">
          <div className="hero-content animate-fade-in">
            <div className="hero-tagline">
              <Sparkles size={16} className="gradient-text-accent" />
              <span>Brand New Building for the 2026 Academic Year</span>
            </div>
            
            <h1 className="hero-title">
              Premium Boys' Coliving <br />
              <span className="gradient-text-accent">Coliving That Feels Like Home</span>
            </h1>
            
            <p className="hero-desc">
              Experience the perfect balance of study and comfort. Located on <strong>D.Y. Patil University Road, Lohegaon, Pune</strong>, we offer highly premium double-occupancy rooms with private balconies, nutritious dining, laundry, and multi-tier biometric security. Designed only for college students.
            </p>
            
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => scrollTo('amenities')}>
                Explore Amenities <ArrowRight size={18} />
              </button>
              <button className="btn btn-secondary" onClick={() => scrollTo('booking')}>
                Check Pricing
              </button>
            </div>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-val">1.2 km</span>
                <span className="stat-lbl">From D.Y. Patil University</span>
              </div>
              <div className="stat-item">
                <span className="stat-val">50 Max</span>
                <span className="stat-lbl">Capped Student Capacity</span>
              </div>
              <div className="stat-item">
                <span className="stat-val">1:1</span>
                <span className="stat-lbl">Student-to-Desk Ratio</span>
              </div>
            </div>
          </div>
          
          <div className="hero-media animate-fade-in">
            <div className="hero-img-container">
              <img src={roomImg} alt="Moonlight Hostel Premium Double Room with Balcony" />
            </div>
            
            {/* Floating Card for micro-interaction/visual flair */}
            <div className="floating-card glass-panel shadow-xl">
              <div className="about-bullet-icon">
                <Shield size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-heading)' }}>Biometric Secured</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-main)' }}>24/7 Peace of Mind for Parents</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">An Infrastructure Designed for Student Growth</h2>
            <p>We believe a hostel shouldn't just be a place to sleep. It should provide a seamless environment that supports your academic achievements, personal health, and recreation.</p>
          </div>

          <div className="features-grid">
            {/* Feature 1 */}
            <div className="card feat-card">
              <div className="feat-icon-box">
                <Home size={24} />
              </div>
              <h3 className="feat-title">Brand New Building</h3>
              <p className="feat-desc">Enjoy fresh interiors, pristine walls, modern fixtures, and clean, contemporary architecture. Be the first generation of students to live in this premium block.</p>
            </div>

            {/* Feature 2 */}
            <div className="card feat-card">
              <div className="feat-icon-box">
                <BookOpen size={24} />
              </div>
              <h3 className="feat-title">1:1 Study Desk & Chair</h3>
              <p className="feat-desc">No more sharing desks. Each student gets their own private, spacious wooden study table and ergonomic high-back chair, complete with nearby power outlets and lighting.</p>
            </div>

            {/* Feature 3 */}
            <div className="card feat-card">
              <div className="feat-icon-box">
                <Utensils size={24} />
              </div>
              <h3 className="feat-title">Nutritious Home Dining</h3>
              <p className="feat-desc">Weekday breakfast and dinner are included. On weekends, we cover all three meals including Saturday lunch and a special, relaxed Sunday brunch session at the hostel.</p>
            </div>

            {/* Feature 4 */}
            <div className="card feat-card">
              <div className="feat-icon-box">
                <Shield size={24} />
              </div>
              <h3 className="feat-title">High-Security Environment</h3>
              <p className="feat-desc">Protected by card key or biometric access gates, continuous CCTV tracking, fire safety compliance, and a resident warden who guarantees academic discipline.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="section">
        <div className="container about-grid">
          <div className="hero-media" style={{ height: '480px' }}>
            <div className="hero-img-container" style={{ borderRadius: 'var(--radius-lg)' }}>
              <img src={loungeImg} alt="Moonlight Hostel Recreation Lounge and TT Table" />
            </div>
            <div className="floating-card glass-panel shadow-xl" style={{ top: '32px', right: '-32px', left: 'auto', bottom: 'auto' }}>
              <div className="about-bullet-icon" style={{ backgroundColor: 'var(--success-soft)', color: 'var(--success)' }}>
                <Gamepad2 size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-heading)' }}>Indoor Sports</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-main)' }}>TT, Carrom, Chess & Badminton</p>
              </div>
            </div>
          </div>

          <div className="about-content">
            <span className="section-label">About Moonlight Hostel</span>
            <h2 className="section-title">A Welcoming Community & Premium Living Standard</h2>
            <p style={{ marginBottom: '20px' }}>
              Moonlight Hostel is managed with one core principle: creating a **"home away from home"** for young minds pursuing their dreams in Pune. Founded in 2026, our brand new building offers college students a sanctuary that eliminates the daily hassles of housekeeping, laundry, and search for healthy food.
            </p>
            <p style={{ marginBottom: '24px' }}>
              We limit our total capacity to just **50 students** to ensure that our dining, common areas, and amenities are never overcrowded. This cozy layout fosters a vibrant community of like-minded students, encouraging peer learning and lasting friendships.
            </p>

            <div className="about-bullets">
              <div className="about-bullet">
                <span className="about-bullet-icon"><CheckCircle2 size={16} /></span>
                <span>Warden & Biometric Security</span>
              </div>
              <div className="about-bullet">
                <span className="about-bullet-icon"><CheckCircle2 size={16} /></span>
                <span>Free In-house Laundry</span>
              </div>
              <div className="about-bullet">
                <span className="about-bullet-icon"><CheckCircle2 size={16} /></span>
                <span>High-Speed Fiber Wi-Fi</span>
              </div>
              <div className="about-bullet">
                <span className="about-bullet-icon"><CheckCircle2 size={16} /></span>
                <span>Daily Housekeeping</span>
              </div>
              <div className="about-bullet">
                <span className="about-bullet-icon"><CheckCircle2 size={16} /></span>
                <span>DG Power Backup 24/7</span>
              </div>
              <div className="about-bullet">
                <span className="about-bullet-icon"><CheckCircle2 size={16} /></span>
                <span>Daily Fresh Food Routine</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Facilities Catalogue</span>
            <h2 className="section-title">Fully Equipped For Modern Living</h2>
            <p>Every small detail has been curated so you can focus entirely on your college curriculum and project work. Review our complete catalogue below.</p>
          </div>

          {/* Category Tabs */}
          <div className="amenities-tabs">
            <button className={`tab-btn ${activeCategory === 'all' ? 'active' : ''}`} onClick={() => setActiveCategory('all')}>All Features</button>
            <button className={`tab-btn ${activeCategory === 'living' ? 'active' : ''}`} onClick={() => setActiveCategory('living')}>Room & Living</button>
            <button className={`tab-btn ${activeCategory === 'dining' ? 'active' : ''}`} onClick={() => setActiveCategory('dining')}>Dining & Food</button>
            <button className={`tab-btn ${activeCategory === 'services' ? 'active' : ''}`} onClick={() => setActiveCategory('services')}>Services & Power</button>
            <button className={`tab-btn ${activeCategory === 'safety' ? 'active' : ''}`} onClick={() => setActiveCategory('safety')}>Security & Safety</button>
            <button className={`tab-btn ${activeCategory === 'recreation' ? 'active' : ''}`} onClick={() => setActiveCategory('recreation')}>Recreation</button>
          </div>

          {/* Grid of Filtered Amenities */}
          <div className="amenities-grid">
            {filteredAmenities.map(amenity => {
              const IconComponent = amenity.icon
              return (
                <div key={amenity.id} className="card amenity-card">
                  <div className="amenity-icon-container">
                    <IconComponent size={22} />
                  </div>
                  <div className="amenity-info">
                    <h4>{amenity.name}</h4>
                    <p>{amenity.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Rent & Value Calculator Section */}
      <section id="calculator" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Cost Comparison</span>
            <h2 className="section-title">See The Absolute Value of Comfort</h2>
            <p>A simple PG room might look cheaper upfront, but once you add meal subscriptions, laundry services, broadband Wi-Fi, electricity back-ups, and housekeeping, the bills stack up fast. Calculate your actual savings here.</p>
          </div>

          <div className="calc-container">
            <div className="calc-panel">
              <h3 className="calc-title">Customize Your Outside Estimates</h3>
              <p className="calc-desc">Adjust the sliders to estimate what you would spend on your own outside of a fully inclusive package at Moonlight Hostel.</p>
              
              <div className="calc-sliders">
                {/* Sliders for Food */}
                <div className="slider-group">
                  <div className="slider-header">
                    <span>Monthly Food & Meals (Tiffin/Delivery)</span>
                    <span className="slider-val">₹{outsideMealCost.toLocaleString('en-IN')}/mo</span>
                  </div>
                  <input 
                    type="range" 
                    min="3000" 
                    max="10000" 
                    step="500" 
                    value={outsideMealCost} 
                    onChange={(e) => setOutsideMealCost(Number(e.target.value))}
                    className="slider-input" 
                  />
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Typical high-quality outside tiffin/mess costs ₹5,000–₹8,000.</span>
                </div>

                {/* Laundry */}
                <div className="slider-group">
                  <div className="slider-header">
                    <span>Monthly Laundry & Ironing</span>
                    <span className="slider-val">₹{outsideLaundryCost.toLocaleString('en-IN')}/mo</span>
                  </div>
                  <input 
                    type="range" 
                    min="500" 
                    max="3000" 
                    step="100" 
                    value={outsideLaundryCost} 
                    onChange={(e) => setOutsideLaundryCost(Number(e.target.value))}
                    className="slider-input" 
                  />
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Calculated at average iron/wash charges per kg or local dhobi charges.</span>
                </div>

                {/* Wi-Fi */}
                <div className="slider-group">
                  <div className="slider-header">
                    <span>Monthly Wi-Fi/Broadband Share</span>
                    <span className="slider-val">₹{outsideWifiCost.toLocaleString('en-IN')}/mo</span>
                  </div>
                  <input 
                    type="range" 
                    min="400" 
                    max="1500" 
                    step="50" 
                    value={outsideWifiCost} 
                    onChange={(e) => setOutsideWifiCost(Number(e.target.value))}
                    className="slider-input" 
                  />
                </div>

                {/* Cleaning */}
                <div className="slider-group">
                  <div className="slider-header">
                    <span>Housekeeping & Sweeping Service</span>
                    <span className="slider-val">₹{outsideCleaningCost.toLocaleString('en-IN')}/mo</span>
                  </div>
                  <input 
                    type="range" 
                    min="300" 
                    max="2000" 
                    step="100" 
                    value={outsideCleaningCost} 
                    onChange={(e) => setOutsideCleaningCost(Number(e.target.value))}
                    className="slider-input" 
                  />
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Paying a maid to clean rooms and attached washrooms weekly.</span>
                </div>
              </div>
            </div>

            <div className="calc-breakdown">
              <div>
                <h3 className="breakdown-title">Monthly Cost Breakdown</h3>
                <div className="breakdown-list">
                  <div className="breakdown-item">
                    <span>Basic Room Rent (2-sharing)</span>
                    <span className="breakdown-value">₹{outsideRentCost.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="breakdown-item">
                    <span>Hygienic Food Subscription</span>
                    <span className="breakdown-value">₹{outsideMealCost.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="breakdown-item">
                    <span>Laundry Bills</span>
                    <span className="breakdown-value">₹{outsideLaundryCost.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="breakdown-item">
                    <span>Broadband Wi-Fi bills</span>
                    <span className="breakdown-value">₹{outsideWifiCost.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="breakdown-item">
                    <span>Cleaning & Sweeping</span>
                    <span className="breakdown-value">₹{outsideCleaningCost.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="breakdown-item total">
                    <span>Total Outside Monthly Est.</span>
                    <span className="breakdown-value" style={{ color: 'var(--text-heading)' }}>
                      ₹{totalOutsideMonthly.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="breakdown-item total" style={{ borderTop: 'none', paddingTop: 0 }}>
                    <span>Moonlight Hostel Total Included</span>
                    <span className="breakdown-value" style={{ color: 'var(--accent-color)' }}>
                      ₹{moonlightHostelTotalIncluded.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                {monthlySavings > 0 ? (
                  <div className="breakdown-saving">
                    🎉 You save ₹{monthlySavings.toLocaleString('en-IN')} / month! <br />
                    (₹{yearlySavings.toLocaleString('en-IN')} yearly savings)
                  </div>
                ) : (
                  <div className="breakdown-saving" style={{ backgroundColor: 'var(--primary-ultra-light)', color: 'var(--text-heading)' }}>
                    High-quality included services matching standard values.
                  </div>
                )}
                
                <button className="btn btn-accent" style={{ width: '100%' }} onClick={() => scrollTo('booking')}>
                  Lock In Yearly Plan <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking and Bank Details Section */}
      <section id="booking" className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Reservations</span>
            <h2 className="section-title">Simple Booking & Value Structure</h2>
            <p>Secure your room for the upcoming batch. Double sharing rooms with balconies are booked on a first-come, first-serve basis following standard university rules.</p>
          </div>

          <div className="booking-grid">
            <div className="booking-info-panel">
              <h3>Pricing & Inclusions</h3>
              <p style={{ color: 'var(--text-main)', marginBottom: '20px' }}>
                Moonlight Hostel offers a highly straightforward, annual transparent pricing package. There are no hidden monthly maintenance fees or surprise charges.
              </p>
              
              <div className="card" style={{ padding: '24px', backgroundColor: 'var(--primary-ultra-light)', borderLeft: '4px solid var(--accent-color)' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-heading)' }}>
                  ₹1,60,000 / Year <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-main)' }}>(Double Sharing Room with Balcony)</span>
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>
                  Includes premium double-sharing furnishings, high-speed Wi-Fi, 24/7 power backup, daily room housekeeping, free laundry service, attached washrooms, and daily meals (Breakfast + Dinner on weekdays, 3 full meals on weekends).
                </p>
              </div>

              <div className="booking-steps">
                <div className="step-card">
                  <div className="step-num">1</div>
                  <div className="step-content">
                    <h4>Make Bank Deposit</h4>
                    <p>Transfer the initial booking token or full deposit to the Moonlight Hostel bank account detailed below.</p>
                  </div>
                </div>

                <div className="step-card">
                  <div className="step-num">2</div>
                  <div className="step-content">
                    <h4>Fill Admission Google Form</h4>
                    <p>
                      Open and complete the registration details at {' '}
                      <a href="https://forms.gle/82tYE6cUqCWuKfyD9" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', fontWeight: 600, textDecoration: 'underline' }}>
                        forms.gle/82tYE6cUqCWuKfyD9
                      </a>
                    </p>
                  </div>
                </div>

                <div className="step-card">
                  <div className="step-num">3</div>
                  <div className="step-content">
                    <h4>Confirm Room Number via WhatsApp</h4>
                    <p>Send the transaction screenshot to coordinator <strong>Somnath Bhalsing</strong> on WhatsApp to choose your specific room and grab your key.</p>
                  </div>
                </div>
              </div>

              {/* Bank Account Details */}
              <div className="bank-card">
                <h4>Official Payment Bank Account</h4>
                <div className="bank-details-grid">
                  <div className="bank-detail-item">
                    <span className="bank-detail-lbl">Account Name</span>
                    <span className="bank-detail-val">Moonlight Hostel</span>
                  </div>
                  <div className="bank-detail-item">
                    <span className="bank-detail-lbl">Bank Name</span>
                    <span className="bank-detail-val">IDBI Bank</span>
                  </div>
                  <div className="bank-detail-item" style={{ gridColumn: 'span 2' }}>
                    <span className="bank-detail-lbl">Account Number</span>
                    <span className="bank-detail-val" style={{ fontSize: '1.1rem', letterSpacing: '1px' }}>2288102000002653</span>
                  </div>
                  <div className="bank-detail-item">
                    <span className="bank-detail-lbl">IFSC Code</span>
                    <span className="bank-detail-val">IBKL0002288</span>
                  </div>
                  <div className="bank-detail-item">
                    <span className="bank-detail-lbl">Branch Code</span>
                    <span className="bank-detail-val">Lohegaon, Pune</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div id="contact" className="booking-form-panel">
              <h3 style={{ fontSize: '1.75rem', marginBottom: '8px' }}>Request a Call Back</h3>
              <p style={{ color: 'var(--text-main)', marginBottom: '32px', fontSize: '0.9rem' }}>Fill in your contact details below, and our warden will call you back within 2 hours to answer any queries and confirm availability.</p>
              
              {formSubmitted ? (
                <div style={{ backgroundColor: 'var(--success-soft)', color: 'var(--success)', padding: '24px', borderRadius: 'var(--radius-md)', textAlign: 'center', fontWeight: 600 }}>
                  <CheckCircle2 size={32} style={{ margin: '0 auto 12px', display: 'block' }} />
                  Thank you! We have received your query. Somnath Bhalsing or the warden will get in touch on WhatsApp/Call shortly.
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Student Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="form-control" 
                      required 
                      placeholder="Enter full name" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">WhatsApp / Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="form-control" 
                      required 
                      placeholder="e.g. +91 98765 43210" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="form-control" 
                      placeholder="e.g. student@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="college">College / Institution</label>
                    <input 
                      type="text" 
                      id="college" 
                      className="form-control" 
                      value={formData.college}
                      onChange={(e) => setFormData({...formData, college: e.target.value})}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message / Specific Requirements</label>
                    <textarea 
                      id="message" 
                      rows="4" 
                      className="form-control" 
                      placeholder="Mention preferred move-in date or any questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      disabled={isSubmitting}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={isSubmitting}>
                    {isSubmitting ? 'Sending Request...' : 'Submit Callback Request'}
                    {!isSubmitting && <ArrowRight size={18} />}
                  </button>

                  {submitError && (
                    <div style={{ color: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.1)', padding: '12px', borderRadius: 'var(--radius-sm)', marginTop: '16px', fontSize: '0.875rem', fontWeight: 500, textAlign: 'center' }}>
                      ⚠️ {submitError}
                    </div>
                  )}
                </form>
              )}

              {/* Direct WhatsApp Call CTA Button */}
              <div style={{ marginTop: '24px', textAlign: 'center' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '12px' }}>Or chat directly for instant room assignment:</span>
                <a 
                  href="https://wa.me/919270132323?text=Hi%20Somnath,%20I'm%20interested%20in%20booking%20a%20double%20sharing%20room%20at%20Moonlight%20Hostel." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-accent" 
                  style={{ width: '100%', backgroundColor: '#25d366', color: '#ffffff', borderColor: '#25d366' }}
                >
                  <MessageSquare size={18} /> Chat on WhatsApp with Somnath
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location / Proximity Section */}
      <section className="section" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Prime Location</span>
            <h2 className="section-title">Minutes from Campus, Close to Everything</h2>
            <p>Enjoy Lohegaon's peaceful environment while staying close to classrooms, cafes, grocery stores, and local transport networks.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '48px', alignItems: 'center', textAlign: 'left' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Address Details</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-heading)', fontWeight: 600, marginBottom: '8px' }}>
                Moonlight Boys Hostel
              </p>
              <p style={{ color: 'var(--text-main)', marginBottom: '24px', lineHeight: 1.7 }}>
                D.Y. Patil University Road,<br />
                Sai Samruddhi Park, Nimbalkar Nagar, Lane No. 6,<br />
                Lohegaon, Pune - 411047
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div className="about-bullet-icon" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span style={{ fontWeight: 600, color: 'var(--text-heading)' }}>1.2 Km distance: </span>
                    <span style={{ color: 'var(--text-main)' }}>Just a 3-minute ride or a 12-minute walk to the main university campus gates.</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div className="about-bullet-icon" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
                    <Clock size={16} />
                  </div>
                  <div>
                    <span style={{ fontWeight: 600, color: 'var(--text-heading)' }}>Optional Shuttle: </span>
                    <span style={{ color: 'var(--text-main)' }}>Direct transit from the hostel doorstep to D.Y. Patil campus available at extra charge.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom SVG/HTML Map Mockup Widget */}
            <div className="map-mockup shadow-lg">
              <div className="map-bg">
                {/* Horizontal road */}
                <div className="map-road map-road-h"></div>
                {/* Vertical road */}
                <div className="map-road map-road-v"></div>

                {/* Point 1: DY Patil University */}
                <div className="map-pin" style={{ top: '30%', left: '25%' }}>
                  <div className="map-pin-circle"></div>
                  <div className="map-pin-label">D.Y. Patil University Campus</div>
                </div>

                {/* Road Connector line (walking path) */}
                <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                  <path 
                    d="M 120 72 L 230 115 L 290 155" 
                    fill="none" 
                    stroke="var(--accent-color)" 
                    strokeWidth="3" 
                    strokeDasharray="6 4"
                  />
                  <text x="180" y="85" fill="var(--text-heading)" fontSize="10" fontWeight="700" transform="rotate(21 180 85)">
                    1.2 Km (12 Mins Walk)
                  </text>
                </svg>

                {/* Point 2: Moonlight Hostel */}
                <div className="map-pin" style={{ top: '65%', left: '72%' }}>
                  <div className="map-pin-circle accent">
                    <Home size={12} color="var(--text-heading)" />
                  </div>
                  <div className="map-pin-label accent">Moonlight Hostel (Lane 6)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <h3>Moonlight Hostel</h3>
            <p>Premium boys' coliving space in Lohegaon, Pune. Built to provide a warm, safe, and focused atmosphere for ambitious university students.</p>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Managed by University Code of Rules & Regulation. Anti-Ragging Compliant.</span>
          </div>

          <div className="footer-links-col">
            <h4>Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#home" className="footer-link" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>Home Page</a></li>
              <li><a href="#about" className="footer-link" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>About Facilities</a></li>
              <li><a href="#amenities" className="footer-link" onClick={(e) => { e.preventDefault(); scrollTo('amenities'); }}>All Amenities</a></li>
              <li><a href="#calculator" className="footer-link" onClick={(e) => { e.preventDefault(); scrollTo('calculator'); }}>Rent Value Calculator</a></li>
              <li><a href="#booking" className="footer-link" onClick={(e) => { e.preventDefault(); scrollTo('booking'); }}>Payment & Booking</a></li>
            </ul>
          </div>

          <div className="footer-contact-info">
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '24px' }}>Get In Touch</h4>
            <div className="footer-contact-item">
              <MapPin size={18} className="footer-contact-icon" />
              <span>DY Patil University Rd, Sai Samruddhi Park, Nimbalkar Nagar Lane No 6, Lohegaon, Pune - 411047</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} className="footer-contact-icon" />
              <a href="tel:+919270132323" style={{ color: 'inherit' }}>+91 92701 32323 (WhatsApp & Call)</a>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} className="footer-contact-icon" />
              <span>info@moonlighthostel.com</span>
            </div>
            <div className="footer-contact-item">
              <Clock size={18} className="footer-contact-icon" />
              <span>Warden Availability: 24/7 On Site Support</span>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>&copy; {new Date().getFullYear()} Moonlight Hostel. All Rights Reserved. Designed for D.Y. Patil Students.</span>
          <span style={{ display: 'flex', gap: '24px' }}>
            <a href="https://forms.gle/82tYE6cUqCWuKfyD9" target="_blank" rel="noopener noreferrer" className="footer-link">Online Admission Form</a>
            <a href="#booking" className="footer-link" onClick={(e) => { e.preventDefault(); scrollTo('booking'); }}>Bank Transfer Info</a>
          </span>
        </div>
      </footer>
    </>
  )
}

export default App

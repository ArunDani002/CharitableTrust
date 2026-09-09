import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // ✅ ADD THIS LINE - fixes navbar toggle
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';

const programs = [
  ['bi-people-fill', 'Community Support', 'Helping families with essential resources, guidance, and care.'],
  ['bi-mortarboard-fill', 'Education & Development', 'Creating learning opportunities that unlock brighter futures.'],
  ['bi-heart-pulse-fill', 'Health & Wellbeing', 'Supporting healthier lives through awareness and wellbeing programs.'],
  ['bi-shield-fill-check', 'Emergency Assistance', 'Responding with compassion during urgent and difficult times.'],
];

const values = ['Compassion', 'Integrity', 'Inclusion', 'Community', 'Accountability', 'Empowerment'];

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top glass-nav">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">
            <span className="brand-mark">CT</span> Charity Trust
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
              {['About', 'Programs', 'Impact', 'Stories', 'Contact'].map(item => (
                <li className="nav-item" key={item}>
                  <a className="nav-link" href={`#${item.toLowerCase()}`}>{item}</a>
                </li>
              ))}
              <li className="nav-item">
                <a className="btn btn-gold" href="#donate">Donate Now</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-100 pt-5">
            <div className="col-lg-7">
              <span className="eyebrow">
                <i className="bi bi-globe2 me-2"></i>Multinational Charitable Trust
              </span>
              <h1 className="display-3 fw-bold mt-4">Together We Can Make a Difference</h1>
              <p className="hero-text mt-4">
                Supporting communities, transforming lives, and creating opportunities for a brighter future. 
                Every act of kindness creates a ripple of positive change.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-5">
                <a href="#donate" className="btn btn-gold btn-lg">Donate Today</a>
                <a href="#programs" className="btn btn-outline-light btn-lg">Explore Programs</a>
              </div>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <div className="hero-card">
                <i className="bi bi-heart-fill hero-icon"></i>
                <h3>Creating lasting change through compassion.</h3>
                <p>Join our mission to support those in need and build stronger, healthier communities.</p>
                <div className="impact-strip">
                  <span><strong>25K+</strong> Lives Supported</span>
                  <span><strong>18+</strong> Regions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-padding bg-soft">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <span className="section-label">About Us</span>
              <h2 className="section-title">A trusted organization dedicated to improving lives.</h2>
              <p>
                We are a charitable organization dedicated to improving lives through compassion, support, 
                and community action. Our mission is to provide assistance, resources, and opportunities to 
                individuals and families facing challenges.
              </p>
              <p>
                Through partnerships, volunteers, and generous donors, we work to create lasting positive 
                impact and empower communities to thrive.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="mission-box">
                <h4><i className="bi bi-bullseye me-2"></i>Our Mission</h4>
                <p>To provide meaningful support, promote equality, and create opportunities that help 
                individuals and communities achieve a better quality of life.</p>
                <h4><i className="bi bi-eye-fill me-2"></i>Our Vision</h4>
                <p>A world where everyone has access to the support, resources, and opportunities they 
                need to reach their full potential.</p>
              </div>
            </div>
          </div>
          <div className="values-grid mt-5">
            {values.map(v => (
              <div className="value-pill" key={v}>
                <i className="bi bi-check-circle-fill"></i>{v}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="programs" className="section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-label">Our Programs</span>
            <h2 className="section-title mx-auto">Programs designed to strengthen communities.</h2>
          </div>
          <div className="row g-4">
            {programs.map(([icon, title, desc]) => (
              <div className="col-md-6 col-lg-3" key={title}>
                <div className="program-card h-100">
                  <i className={`bi ${icon}`}></i>
                  <h5>{title}</h5>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="section-padding impact-section text-white">
        <div className="container text-center">
          <span className="section-label light">Our Impact</span>
          <h2 className="section-title mx-auto">
            Every donation, volunteer hour, and act of support helps us create meaningful change.
          </h2>
          <div className="row g-4 mt-4">
            {['Families Reached', 'Volunteer Hours', 'Community Projects'].map((x, i) => (
              <div className="col-md-4" key={x}>
                <div className="stat-card">
                  <h3>{['12,000+', '45,000+', '320+'][i]}</h3>
                  <p>{x}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stories" className="section-padding bg-soft">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-5">
              <span className="section-label">Success Stories</span>
              <h2 className="section-title">Hope becomes stronger when it is shared.</h2>
            </div>
            <div className="col-lg-7">
              <div className="story-card">
                <i className="bi bi-quote"></i>
                <p>“This support gave our family new hope and helped us take confident steps toward a better future.”</p>
                <h6>Beneficiary Story</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="donate" className="section-padding donate-section">
        <div className="container">
          <div className="donate-box text-center">
            <span className="section-label light">Donate</span>
            <h2>Your generosity enables us to provide support, resources, and opportunities to those who need them most.</h2>
            <p>Donate, Volunteer, Fundraise, or Partner with us to create a greater impact in our communities.</p>
            <a href="#contact" className="btn btn-light btn-lg mt-3">Get Involved</a>
          </div>
        </div>
      </section>

      <section id="contact" className="section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-5">
              <span className="section-label">Contact </span>
              <h2 className="section-title">Let's create lasting change together.</h2>
            </div>
            <div className="col-lg-7">
              <div className="contact-card">
                <p><i className="bi bi-envelope-fill"></i> info@yourcharity.org</p>
                <p><i className="bi bi-telephone-fill"></i> +44 XXX XXX XXXX</p>
                <p><i className="bi bi-geo-alt-fill"></i> Your Charity Address</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer text-center">
        <div className="container">
          <h5>Together, We Can Create Lasting Change.</h5>
          <p>Thank you for supporting our mission and helping us make a positive impact in the lives of others.</p>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
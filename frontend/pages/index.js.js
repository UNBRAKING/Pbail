import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setEmail("");
  };

  return (
    <div className="container">
      <Head>
        <title>Hackwavee Clone</title>
        <meta name="description" content="Clone of hackwavee.vercel.app/home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Animated Background Blob */}
      <div className="blob"></div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="/favicon.ico" alt="logo" className="logo-img" />
          Hackwavee
        </div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>
        <button className="login-btn">Login</button>
      </nav>
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">
          Empower Your Projects <span className="gradient-text">with Hackwavee</span>
        </h1>
        <p className="hero-desc">
          Discover seamless project management and collaboration with modern tools, analytics, and secure cloud integration.
        </p>
        <div className="hero-actions">
          <button className="get-started">Get Started</button>
          <button className="learn-more">Learn More</button>
        </div>
      </section>
      {/* Email Subscription Form */}
      <section className="subscribe-section">
        <form className="subscribe-form" onSubmit={handleSubscribe}>
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitted}
          />
          <button type="submit" disabled={submitted}>
            {submitted ? "Subscribed!" : "Subscribe"}
          </button>
        </form>
        <span className="subscribe-hint">
          Stay updated with new features and launches!
        </span>
      </section>
      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <div className="feature-icon feature1">
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
              <circle cx="23" cy="23" r="23" fill="#38b2ac"/>
              <path d="M16 23l5 5 9-9" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2>Fast & Secure</h2>
          <p>Lightning-fast performance and enterprise-grade security for all your workflows.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon feature2">
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
              <circle cx="23" cy="23" r="23" fill="#4fd1c5"/>
              <path d="M23 13v20M13 23h20" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2>Easy Integration</h2>
          <p>Integrate with your favorite tools and platforms in just a few clicks.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon feature3">
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
              <circle cx="23" cy="23" r="23" fill="#319795"/>
              <rect x="15" y="18" width="4" height="10" rx="2" fill="#fff"/>
              <rect x="21" y="14" width="4" height="14" rx="2" fill="#fff"/>
              <rect x="27" y="22" width="4" height="6" rx="2" fill="#fff"/>
            </svg>
          </div>
          <h2>Powerful Analytics</h2>
          <p>Track your progress and optimize productivity with advanced analytics.</p>
        </div>
      </section>
      {/* Footer */}
      <footer className="footer">
        <span>
          © {new Date().getFullYear()} Hackwavee Clone. All rights reserved.
        </span>
      </footer>
      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: #0a0a23;
          color: #fff;
          position: relative;
          overflow-x: hidden;
        }
        .blob {
          position: absolute;
          top: -180px;
          right: -160px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle at 70% 30%, #4fd1c5 0%, #0a0a23 80%);
          opacity: 0.22;
          filter: blur(80px);
          z-index: 0;
          pointer-events: none;
          animation: blobmove 12s infinite alternate;
        }
        @keyframes blobmove {
          0% { top: -180px; right: -160px; }
          100% { top: -90px; right: -220px; }
        }
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 2rem;
          background: rgba(10,10,35,0.98);
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          position: relative;
          z-index: 2;
        }
        .logo {
          font-size: 2rem;
          font-weight: bold;
          letter-spacing: 2px;
          display: flex;
          align-items: center;
        }
        .logo-img {
          width: 32px;
          height: 32px;
          margin-right: 10px;
        }
        .nav-links a {
          color: #fff;
          margin: 0 1.5rem;
          text-decoration: none;
          font-weight: 500;
          font-size: 1rem;
          transition: color 0.2s;
        }
        .nav-links a:hover {
          color: #4fd1c5;
        }
        .login-btn {
          background: #4fd1c5;
          color: #222;
          border: none;
          padding: 0.6rem 1.6rem;
          border-radius: 6px;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.2s, transform 0.1s;
          box-shadow: 0 2px 8px rgba(79,209,197,0.18);
        }
        .login-btn:hover {
          background: #38b2ac;
          transform: translateY(-2px) scale(1.05);
        }
        .hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 43vh;
          padding: 4rem 2rem 2rem 2rem;
          background: linear-gradient(135deg, #1a202c 60%, #4fd1c5 100%);
          text-align: center;
          position: relative;
          z-index: 1;
        }
        .hero-title {
          font-size: 2.8rem;
          font-weight: 800;
          margin-bottom: 1.1rem;
          line-height: 1.2;
        }
        .gradient-text {
          background: linear-gradient(90deg, #4fd1c5, #38b2ac, #319795);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-desc {
          font-size: 1.23rem;
          color: #cbd5e1;
          margin-bottom: 2rem;
          max-width: 600px;
        }
        .hero-actions {
          display: flex;
          gap: 1.4rem;
        }
        .get-started, .learn-more {
          background: #4fd1c5;
          color: #1a202c;
          border: none;
          padding: 0.95rem 2.2rem;
          font-size: 1.1rem;
          border-radius: 8px;
          font-weight: bold;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(79,209,197,0.15);
          transition: background 0.2s, transform 0.1s;
        }
        .learn-more {
          background: #15162b;
          color: #4fd1c5;
          border: 1.5px solid #4fd1c5;
        }
        .get-started:hover {
          background: #319795;
          color: #fff;
          transform: translateY(-2px) scale(1.07);
        }
        .learn-more:hover {
          background: #4fd1c5;
          color: #15162b;
          transform: translateY(-2px) scale(1.07);
        }
        .subscribe-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1.5rem 0 0.5rem 0;
          margin-bottom: -1rem;
          z-index: 2;
        }
        .subscribe-form {
          display: flex;
          gap: 0.5rem;
          background: #22224b;
          padding: 0.6rem 1rem;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(79,209,197,0.07);
        }
        .subscribe-form input {
          border: none;
          outline: none;
          background: transparent;
          color: #fff;
          padding: 0.7rem 1rem;
          border-radius: 6px;
          font-size: 1rem;
          width: 220px;
        }
        .subscribe-form button {
          background: #4fd1c5;
          color: #1a202c;
          border: none;
          border-radius: 6px;
          padding: 0.7rem 1.6rem;
          font-weight: bold;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.2s;
        }
        .subscribe-form button:disabled {
          background: #319795;
          color: #fff;
          cursor: not-allowed;
        }
        .subscribe-hint {
          color: #7dd3fc;
          font-size: 1rem;
          margin-top: 0.6rem;
        }
        .features {
          display: flex;
          justify-content: center;
          align-items: stretch;
          gap: 2.5rem;
          padding: 4rem 2rem 3rem 2rem;
          background: #15162b;
          z-index: 1;
        }
        .feature-card {
          background: #22224b;
          border-radius: 14px;
          padding: 2rem 1.5rem;
          min-width: 220px;
          flex: 1;
          box-shadow: 0 2px 12px rgba(0,0,0,0.14);
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.15s, box-shadow 0.15s;
          position: relative;
        }
        .feature-card:hover {
          transform: translateY(-5px) scale(1.03);
          box-shadow: 0 8px 32px rgba(79,209,197,0.15);
        }
        .feature-icon {
          margin-bottom: 0.7rem;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 54px;
          height: 54px;
          border-radius: 50%;
          box-shadow: 0 3px 12px rgba(79,209,197,0.15);
        }
        .feature1 { background: #4fd1c5; }
        .feature2 { background: #38b2ac; }
        .feature3 { background: #319795; }
        .feature-card h2 {
          font-size: 1.3rem;
          margin-bottom: 0.6rem;
          color: #4fd1c5;
        }
        .feature-card p {
          color: #cbd5e1;
          line-height: 1.6;
        }
        .footer {
          background: #0a0a23;
          color: #7dd3fc;
          padding: 1.2rem 0;
          text-align: center;
          margin-top: auto;
          font-size: 1rem;
        }
        @media (max-width: 900px) {
          .features {
            flex-direction: column;
            gap: 1.5rem;
          }
        }
        @media (max-width: 600px) {
          .navbar {
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
          }
          .features {
            padding: 2rem 1rem;
          }
          .hero {
            padding: 2rem 1rem 1rem 1rem;
          }
          .hero-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
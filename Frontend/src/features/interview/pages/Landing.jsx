import '../style/landing.scss';
import { Link } from 'react-router';

function Landing() {
  return (
    <div className="landing-page landing-page--fixed">
      {/* Header Bar */}
      <header className="landing-header">
        <div className="logo">
          <span>AI</span> Interview Coach
        </div>
        <nav>
          <Link to="/login" className="button">Sign In</Link>
          <Link to="/register" className="button primary">Get Started</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="landing-hero">
        <h1>Curate your <span className="highlight">Interview Success</span></h1>
        <p>AI-powered, personalized interview strategies. Stand out, get hired.</p>
      </section>

      {/* Features Section - Single Row, 3 concise features */}
      <section className="landing-features landing-features--row">
        <div className="feature-card">
          <div className="feature-title">Smart Analysis</div>
          <div className="feature-desc">AI reviews your resume & job description for best-fit advice.</div>
        </div>
        <div className="feature-card">
          <div className="feature-title">Instant Results</div>
          <div className="feature-desc">Get your interview plan in seconds, not hours.</div>
        </div>
        <div className="feature-card">
          <div className="feature-title">Actionable Tips</div>
          <div className="feature-desc">Receive clear, practical steps to boost your chances.</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="landing-cta landing-cta--compact">
        <Link to="/register" className="cta-main">Try it Free</Link>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div>&copy; 2026 AI Interview Coach</div>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;

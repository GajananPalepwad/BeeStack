import React , {useEffect} from "react";
import "./OurWork.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import BlobBackground from "../components/BlobBackground";

const GettingIn = () => {
  useEffect(() => {
  const targets = document.querySelectorAll(
    ".ow-card, .ow-intro, .ow-header, .ow-badge"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("ow-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}, []);
  return (
    <>
      <Navbar />

      <div className="ow-page">
        <BlobBackground />
        {/* ── SIDEBAR ── */}
       <aside className="ow-sidebar">
  <nav className="ow-nav" data-section="CONTACT US">
       <Link to="/careers" className="ow-nav-item">
                <span className="ow-nav-icon">
                  {/* Star / "why" icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </span>
                Why BeeStack?
              </Link>
                  <Link to="/careers/getting-in" className="ow-nav-item ow-nav-item--active">
                                        <span className="ow-nav-icon">
                                          {/* Door / entry icon */}
                                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M15 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"/>
                                            <polyline points="10 17 15 12 10 7"/>
                                            <line x1="15" y1="12" x2="3" y2="12"/>
                                          </svg>
                                        </span>
                                        Getting In
                                      </Link>
              <Link to="/careers/current-openings" className="ow-nav-item">
                <span className="ow-nav-icon">
                  {/* Briefcase icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                  </svg>
                </span>
                Current Openings
              </Link>
  </nav>
</aside>

        {/* ── MAIN CONTENT ── */}
        <main className="ow-main">
          {/* Header */}
          <div className="ow-header">
            <h1 className="ow-title">
              <span>Getting In</span>
            </h1>
            <p className="ow-subtitle">A Great Place for Top Talent</p>
            <hr className="ow-divider" />
          </div>

          {/* Intro */}
          <div className="ow-intro">
            <div className="ow-badge">Join the Hive</div>
            <p className="ow-intro-text">
              At BeeStack, we're a team of builders who love turning ideas into products that matter.
              If you're curious, hands-on, and passionate about technology — you'll fit right in.
            </p>
          </div>

          {/* Cards */}
          <div className="ow-cards-grid">

            {/* Who We're Looking For */}
            <div className="ow-card">
              <div className="ow-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="4"/>
                  <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7"/>
                </svg>
              </div>
              <div className="ow-card-title">💡 Who We're Looking For</div>
              <p className="ow-card-text">
                We're not hiring job titles — we're hiring mindsets.
              </p>
              <ul className="ow-card-text" style={{ paddingLeft: "16px", marginTop: "8px", lineHeight: "2" }}>
                <li>• Curious by nature – You love exploring how things work.</li>
                <li>• Hands-on – You enjoy building, debugging, and improving systems.</li>
                <li>• Adaptable – You thrive outside your comfort zone.</li>
                <li>• Driven – You take initiative and see challenges as opportunities.</li>
                <li>• Collaborative – You own your work but value teamwork.</li>
                <li>• Quality-focused – You care about clean design and performance.</li>
                <li>• Builder mindset – You like seeing your code ship and make an impact.</li>
              </ul>
            </div>

            {/* How It Works */}
            <div className="ow-card">
              <div className="ow-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                  <path d="M4.93 4.93a10 10 0 0 0 0 14.14"/>
                </svg>
              </div>
              <div className="ow-card-title">⚙️ How It Works</div>
              <p className="ow-card-text">Our hiring process is simple and transparent:</p>
              <ol className="ow-card-text" style={{ paddingLeft: "16px", marginTop: "8px", lineHeight: "2" }}>
                <li>1. Apply – Send us your resume or portfolio.</li>
                <li>2. Online Test – A short technical and problem-solving assessment.</li>
                <li>3. Programming Challenge – A hands-on task to see how you think and code.</li>
                <li>4. Interviews – 2–3 discussions about code, design, and problem-solving.</li>
                <li>5. Culture Fit – We look for curiosity, ownership, and collaboration.</li>
                <li>6. Offer – If it's a match, we move fast. Decision in just a few days.</li>
              </ol>
            </div>

            {/* What to Expect */}
            <div className="ow-card">
              <div className="ow-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
              </div>
              <div className="ow-card-title">🚀 What to Expect</div>
              <p className="ow-card-text">We value people who love building and learning. At BeeStack, you'll:</p>
              <ul className="ow-card-text" style={{ paddingLeft: "16px", marginTop: "8px", lineHeight: "2" }}>
                <li>• Work on real products that reach real users.</li>
                <li>• Collaborate with smart, motivated teammates.</li>
                <li>• Have the freedom to experiment, fail fast, and grow faster.</li>
              </ul>
            </div>

            {/* Join the Hive CTA */}
            <div className="ow-card">
              <div className="ow-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="ow-card-title">✉️ Join the Hive</div>
              <p className="ow-card-text">
                We're always on the lookout for passionate engineers, designers, and creators.
                Check out our{" "}
                <Link
                  to="/careers/current-openings"
                  style={{ color: "var(--amber-d)", fontWeight: 700, textDecoration: "underline" }}
                >
                  Open Positions
                </Link>{" "}
                or just drop us a message if you think you belong here.
              </p>
            </div>

          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default GettingIn;
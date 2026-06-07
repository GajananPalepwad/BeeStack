import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import BlobBackground from "../components/BlobBackground";

const Careers = () => {
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
          <nav className="ow-nav" data-section="CAREERS">
            <Link to="/careers" className="ow-nav-item ow-nav-item--active">
              <span className="ow-nav-icon">
                {/* Star / "why" icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </span>
              Why BeeStack?
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
              <span>Why BeeStack?</span>
            </h1>
            <p className="ow-subtitle">Because Building Together is Fun</p>
            <hr className="ow-divider" />
          </div>

          {/* Intro */}
          <div className="ow-intro">
            <div className="ow-badge">Our Culture</div>
            <p className="ow-intro-text">
              At BeeStack, we believe that great products come from great people — and great people
              thrive when work feels exciting. We're a tight-knit team of builders, designers, and
              dreamers who love what we do. We take pride in shipping quality software, solving hard
              problems, and enjoying every step of the journey.
            </p>
            <p className="ow-intro-text">
              We hire people who are curious, self-driven, and passionate — not just about their code
              or design, but about everything they do in life. Every person here adds something unique
              to the hive. We offer a place where your ideas matter, your work makes an impact, and
              your growth is real — all while keeping things light, collaborative, and fun.
            </p>
          </div>

          {/* Cards — Top 10 Reasons */}
          <div className="ow-badge" style={{ marginBottom: "20px" }}>
            Top 10 Reasons to Work at BeeStack ⚡
          </div>

          <div className="ow-cards-grid">
            {/* Card 1 */}
            <div className="ow-card">
              <div className="ow-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <div className="ow-card-title">1. We ship real products</div>
              <p className="ow-card-text">
                From concept to launch we build real products that reach real users. There's nothing
                like seeing something you built come alive in the world, making people's lives easier
                or better.
              </p>
            </div>

            {/* Card 2 */}
            <div className="ow-card">
              <div className="ow-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <div className="ow-card-title">2. Technology at the core</div>
              <p className="ow-card-text">
                We're a technology-first company. You'll work on new platforms, explore modern
                frameworks, and help shape the future of how things are built. Geeky? Absolutely.
                And proud of it.
              </p>
            </div>

            {/* Card 3 */}
            <div className="ow-card">
              <div className="ow-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"/>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
              </div>
              <div className="ow-card-title">3. We value your growth</div>
              <p className="ow-card-text">
                We invest in your development through mentorship, internal tech sessions, and constant
                learning opportunities. At BeeStack, we don't just teach tools — we teach you how
                to learn.
              </p>
            </div>

            {/* Card 4 */}
            <div className="ow-card">
              <div className="ow-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
              </div>
              <div className="ow-card-title">4. Ownership, not oversight</div>
              <p className="ow-card-text">
                You'll own your projects end-to-end from idea to delivery. We trust you to make
                decisions, experiment, and take responsibility for what you build. We're here to
                guide, not micromanage.
              </p>
            </div>

            {/* Card 5 */}
            <div className="ow-card">
              <div className="ow-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
              </div>
              <div className="ow-card-title">5. Innovation over routine</div>
              <p className="ow-card-text">
                We encourage new ideas and bold experimentation. Failure isn't something to fear —
                it's just a part of building something better.
              </p>
            </div>

            {/* Card 6 */}
            <div className="ow-card">
              <div className="ow-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className="ow-card-title">6. Smart people, small teams</div>
              <p className="ow-card-text">
                You'll collaborate with smart, humble, and driven teammates who love solving challenges
                together. We keep teams small so everyone's voice counts and communication stays fast.
              </p>
            </div>

            {/* Card 7 */}
            <div className="ow-card">
              <div className="ow-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div className="ow-card-title">7. Work-life balance that's real</div>
              <p className="ow-card-text">
                We work hard because we care, not because of deadlines. Late nights happen when
                curiosity strikes, not because someone said so. Weekends? They're sacred — go live
                your life.
              </p>
            </div>

            {/* Card 8 */}
            <div className="ow-card">
              <div className="ow-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <div className="ow-card-title">8. We celebrate everything</div>
              <p className="ow-card-text">
                From shipped features to birthdays, Friday game nights to team outings — we make
                time to celebrate big wins and small joys. Good vibes are part of the workflow.
              </p>
            </div>

            {/* Card 9 */}
            <div className="ow-card">
              <div className="ow-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div className="ow-card-title">9. Perks that actually perk you up</div>
              <p className="ow-card-text">
                Think flexible hours, catered lunches, the latest devices, wellness breaks, and
                creative spaces to brainstorm or just chill. We believe productivity and happiness
                go hand in hand.
              </p>
            </div>

            {/* Card 10 */}
            <div className="ow-card">
              <div className="ow-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                  <polyline points="17 6 23 6 23 12"/>
                </svg>
              </div>
              <div className="ow-card-title">10. A culture that grows with you</div>
              <p className="ow-card-text">
                At BeeStack, you don't just grow in your career — you grow as a person. We want
                you to explore, question, and create, because that's what keeps our hive buzzing.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="ow-intro" style={{ marginTop: "44px", marginBottom: "0" }}>
            <p className="ow-intro-text">
              Like what you read? Come build with us.{" "}
              Check out our{" "}
              <Link to="/careers/current-openings" style={{ color: "var(--amber-d)", fontWeight: 700, textDecoration: "underline" }}>
                Open Positions
              </Link>{" "}
              and let's create something awesome together.
            </p>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Careers;
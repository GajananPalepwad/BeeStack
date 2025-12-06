import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <>
      <Navbar />
      <div className="headingWork pl-28">CAREERS</div>
      <div className="container">
        <aside className="sidebar">
          <ul>
            <li className="highlighted font-bold">
              <Link to="/careers">Why BeeStack?</Link>
            </li>
            <li className="unhighlighted font-bold">
              <Link to="/careers/getting-in">Getting in</Link>
            </li>
            <li className="unhighlighted font-bold">
              <Link to="/careers/current-openings">Current Openings</Link>
            </li>
          </ul>
        </aside>
        <main className="main-content HT">
          <p className="tagline">
            <b>Because Building Together is Fun</b>
          </p>
          <h1>Why BeeStack?</h1>
          <div className="section">
            <p>
              At BeeStack, we believe that great products come from great people
              and great people thrive when work feels exciting.
              <br />
              We’re a tight-knit team of builders, designers, and dreamers who
              love what we do. We take pride in shipping quality software,
              solving hard problems, and enjoying every step of the journey.
              <br /> We hire people who are curious, self-driven, and passionate
              not just about their code or design, but about everything they do
              in life. Every person here adds something unique to the hive.
              <br /> We offer a place where your ideas matter, your work makes
              impact, and your growth is real all while keeping things light,
              collaborative, and fun.
            </p>
          </div>
          <div className="section">
            <h2 className="section-title">
              Top 10 Reasons to Work at BeeStack
              <img
                src="/images/forward.png"
                alt="Fast forward icon"
                className="icon"
              />
            </h2>
          </div>
          <div className="section">
            <p>
              From concept to launch we build real products that reach real
              users.There’s nothing like seeing something you built come alive
              in the world, making people’s lives easier or better.
            </p>
          </div>
          <div className="section">
            <h2 className="section-title">
              2. Technology at the core
              <img
                src="/images/heart.png"
                alt="Fast forward icon"
                className="icon"
              />
            </h2>
            <p>
              We’re a technology-first company. You’ll work on new platforms,
              explore modern frameworks, and help shape the future of how things
              are built.Geeky? Absolutely. And proud of it.
            </p>
          </div>
          <div className="section">
            <h2 className="section-title">
              3. We value your growth
              <img
                src="/images/secure.png"
                alt="Shield icon"
                className="icon"
              />
            </h2>
            <p>
              We invest in your development through mentorship, internal tech
              sessions, and constant learning opportunities.At BeeStack, we
              don’t just teach tools we teach you how to learn.
            </p>
          </div>
          <div className="section">
            <h2 className="section-title">
              4. Ownership, not oversight
              <img
                src="/images/fingerprint.png"
                alt="Fingerprint icon"
                className="icon"
              />
            </h2>
            <p>
              You’ll own your projects end-to-end from idea to delivery.We trust
              you to make decisions, experiment, and take responsibility for
              what you build. We’re here to guide, not micromanage.
            </p>
          </div>
          <div className="section">
            <h2 className="section-title">5. Innovation over routine</h2>
            <p>
              We encourage new ideas and bold experimentation.Failure isn’t
              something to fear it’s just a part of building something better.
            </p>
          </div>
          <div className="section">
            <h2 className="section-title">6. Smart people, small teams</h2>
            <p>
              You’ll collaborate with smart, humble, and driven teammates who
              love solving challenges together.We keep our teams small so that
              everyone’s voice counts and communication stays fast and clear.
            </p>
          </div>
          <div className="section">
            <h2 className="section-title">7. Work-life balance that’s real</h2>
            <p>
              We work hard because we care, not because of deadlines.Late nights
              happen when curiosity strikes, not because someone said
              so.Weekends? They’re sacred go live your life.
            </p>
          </div>
          <div className="section">
            <h2 className="section-title">8. We celebrate everything</h2>
            <p>
              From shipped features to birthdays, Friday game nights to team
              outings we make time to celebrate big wins and small joys.Good
              vibes are part of the workflow.
            </p>
          </div>
          <div className="section">
            <h2 className="section-title">
              9. Perks that actually perk you up
            </h2>
            <p>
              Think flexible hours, catered lunches, the latest devices,
              wellness breaks, and creative spaces to brainstorm or just
              chill.We believe productivity and happiness go hand in hand.
            </p>
          </div>
          <div className="section">
            <h2 className="section-title">10. A culture that grows with you</h2>
            <p>
              At BeeStack, you don’t just grow in your career you grow as a
              person.We want you to explore, question, and create because that’s
              what keeps our hive buzzing.
            </p>
          </div>
          <div className="section">
            <p>
              Like what you read?<br/>Come build with us.<br/>Check out our 
              <Link to="/careers/current-openings"> <u className="colorhover">Open Positions</u> </Link>
              and let’s create something awesome together.
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Careers;

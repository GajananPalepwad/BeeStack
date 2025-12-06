import React from "react";
import "./OurWork.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Technology = () => {
  return (
    <>
      <Navbar />
      <div className="headingWork pl-28">OUR WORK</div>
      <div className="container">
        <aside className="sidebar">
          <ul>
            <li className="unhighlighted font-bold">
              <Link to="/our-work">The Concept</Link>
            </li>
            <li className="unhighlighted font-bold">
              <Link to="/our-work/technique">Technique</Link>
            </li>
            <li className="highlighted font-bold">
              <Link to="/our-work/technology">Technology</Link>
            </li>
            <li className="unhighlighted font-bold">
              <Link to="/our-work/products">Tech we've built</Link>
            </li>
          </ul>
        </aside>

        <main className="main-content HT">
          <p className="tagline">
            <b>We are a core technology company.</b>
          </p>
          <h1>Technology</h1>

          <div className="devices-container flex items-center justify-center">
            <img src="/images/stack.png" alt="devices" />
          </div>

          {/* Intro Section */}
          <div className="section">
            <p>
              At BeeStack, technology isn’t just what we use — it’s how we think.
              We are a full-spectrum product engineering company, helping clients
              build cutting-edge software and connected systems that scale,
              perform, and delight users.
            </p>
            <p>
              From mobile and web platforms to IoT, automotive systems, and
              AI-powered solutions, we stay ahead of the curve mastering new
              technologies as they emerge and integrating them into real
              products. Shipping high-quality, reliable software is our standard —
              and staying on the leading edge is our promise.
            </p>
          </div>

          {/* Section 1 */}
          <div className="section">
            <h2 className="section-title">
              Our Expertise Across Modern Technologies
              <img
                src="/images/forward.png"
                alt="Fast forward icon"
                className="icon"
              />
            </h2>
          </div>

          {/* Section 2: Mobile Development */}
          <div className="section">
            <h2 className="section-title">
              Mobile Development
              <img src="/images/team.png" alt="Team icon" className="icon" />
            </h2>
            <p>
              <b>Android & iOS:</b> Deep expertise in Kotlin, Swift, Java,
              Objective-C, and Jetpack Compose/SwiftUI. Experienced in complex UI
              flows, high-performance animations, and system-level integrations
              (BLE, location services, media, push notifications). We also build
              for wearables, TV, and automotive — from companion devices to
              CarPlay/Android Auto.
            </p>
            <p>
              <b>Hybrid & Cross-Platform:</b> Skilled in React Native, Flutter, and
              Kotlin Multiplatform, building performant apps across platforms while
              maintaining code efficiency.
            </p>
            <p>
              <b>Generative AI Integration:</b> Using GPT-based models, embeddings,
              and open-source LLMs in mobile apps.
            </p>
          </div>

          {/* Section 3: Web & Frontend */}
          <div className="section">
            <h2 className="section-title">
              Web & Frontend
              <img src="/images/heart.png" alt="Heart icon" className="icon" />
            </h2>
            <p>
              Expert in modern frameworks: React, Next.js, Angular, Vue.js,
              Ember.js, and Gatsby. We build responsive, high-performance web apps
              with modern rendering strategies (CSR, SSR, SSG) and seamless API
              integration (REST & GraphQL).
            </p>
            <p>
              Supports accessibility, localization, SEO, and dark mode, keeping
              user experience at the forefront. We embrace modern UI toolkits like
              Tailwind, Chakra UI, Styled Components, and PostCSS.
            </p>
          </div>

          {/* Section 4: Backend & Cloud */}
          <div className="section">
            <h2 className="section-title">
              Backend & Cloud
              <img src="/images/secure.png" alt="Shield icon" className="icon" />
            </h2>
            <p>
              We build scalable backend systems using Node.js, Python
              (Django/Flask), Go, Java, Ruby, .NET, and more. Our expertise spans
              microservices, monoliths, event-driven systems, and cloud-native
              architectures across AWS, GCP, and Azure.
            </p>
            <p>
              Deep knowledge in databases and ORMs: MySQL, PostgreSQL, MongoDB,
              Prisma, and TypeORM. We ensure security and authentication through
              OAuth2.0, OpenID Connect, JWT, and enterprise-grade protocols while
              supporting real-time communication, pub/sub messaging, and IoT
              integration.
            </p>
          </div>

          {/* Section 5: IoT & Connected Devices */}
          <div className="section">
            <h2 className="section-title">
              IoT & Connected Devices
              <img
                src="/images/fingerprint.png"
                alt="Fingerprint icon"
                className="icon"
              />
            </h2>
            <p>
              We build IoT companion apps that communicate via Bluetooth, BLE,
              WiFi, NFC, and Matter/Weave protocols. Our expertise includes device
              discovery, pairing, data streaming, and secure cloud integration —
              bridging hardware and software ecosystems to enable seamless product
              experiences for end users.
            </p>
          </div>

          {/* Section 6: Automotive & Embedded Systems */}
          <div className="section">
            <h2 className="section-title">
              Automotive & Embedded Systems
            </h2>
            <p>
              We are experienced in Apple CarPlay, Android Auto, and Android
              Automotive apps, with deep expertise in vehicle integration,
              connected infotainment, and companion services. Our work supports
              real-time data collection, analytics, and vehicle-to-device
              communication.
            </p>
          </div>

          {/* Section 7: AI & Next-Gen Technologies */}
          <div className="section">
            <h2 className="section-title">AI & Next-Gen Technologies</h2>
            <p>
              <b>Generative AI:</b> GPT-based models, embeddings, custom prompts,
              and open-source LLM solutions. We integrate AI-driven features across
              mobile, web, and backend systems — constantly exploring emerging
              technologies to ensure our clients can leverage cutting-edge tools
              without the learning curve.
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Technology;

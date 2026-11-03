import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://beestack.in";
const DEFAULT_TITLE = "BeeStack | Software Development & Digital Solutions Company";
const DEFAULT_DESCRIPTION =
  "BeeStack builds scalable web apps, mobile apps, SaaS products, APIs, dashboards, and digital solutions for startups and growing businesses.";

const pageMeta = {
  "/": {
    title: "BeeStack | Software Development & Digital Solutions Company",
    description:
      "BeeStack helps startups and businesses design, build, and scale digital products with custom software, web development, mobile apps, and product engineering.",
    type: "WebSite",
  },
  "/about-us": {
    title: "About BeeStack | Technology Partner for Scale & Growth",
    description:
      "Learn about BeeStack, our mission, software engineering lab, and how we partner with founders and enterprises to build technology that moves ideas forward.",
    type: "AboutPage",
  },
  "/about-us/testimonials": {
    title: "Client Testimonials & Verified Reviews | BeeStack",
    description:
      "Read verified reviews and client outcomes from founders, doctors, and business leaders who built and scaled digital products with BeeStack.",
    type: "ItemPage",
  },
  "/careers": {
    title: "Careers at BeeStack | Build High-Impact Software",
    description:
      "Explore engineering careers at BeeStack. Work on high-performance mobile apps, web applications, distributed APIs, and scalable cloud systems.",
    type: "WebPage",
  },
  "/careers/current-openings": {
    title: "Current Job Openings | Engineering Roles at BeeStack",
    description:
      "View open software engineering, mobile development, and frontend roles at BeeStack. Join our team and build scalable digital products.",
    type: "WebPage",
  },
  "/jobs/android": {
    title: "Android Developer Jobs | BeeStack Engineering Careers",
    description:
      "Join BeeStack as an Android developer. Build performant, user-focused mobile experiences using Kotlin, Jetpack Compose, and modern Android architecture.",
    type: "ItemPage",
  },
  "/jobs/ios": {
    title: "iOS Developer Jobs | BeeStack Engineering Careers",
    description:
      "Build premium iOS mobile applications with BeeStack using Swift, SwiftUI, and modern iOS frameworks for high-growth digital products.",
    type: "ItemPage",
  },
  "/jobs/webfrontend": {
    title: "Frontend Web Developer Jobs | BeeStack Engineering Careers",
    description:
      "Join BeeStack's web frontend team. Craft high-performance React and Next.js interfaces with 60fps animations and fluid user experiences.",
    type: "ItemPage",
  },
  "/jobs/webbackend": {
    title: "Backend Engineer Jobs | Distributed APIs & Cloud | BeeStack",
    description:
      "Work on high-throughput backend services, REST/GraphQL APIs, microservices, and cloud infrastructure with BeeStack's engineering team.",
    type: "ItemPage",
  },
  "/our-work/concept": {
    title: "Product Strategy & Architecture Concepts | BeeStack",
    description:
      "Explore BeeStack's engineering approach: architectural strategy, product roadmaps, resilient cloud design, and digital transformation.",
    type: "WebPage",
  },
  "/our-work/products": {
    title: "Products & Portfolio | Web Apps, Mobile & Cloud | BeeStack",
    description:
      "Explore live digital platforms, mobile apps, healthcare portals, and ecommerce solutions engineered by BeeStack for clients worldwide.",
    type: "CollectionPage",
  },
  "/our-work/technique": {
    title: "Our Engineering Technique | Agile Lab & Clean Architecture",
    description:
      "Discover how BeeStack builds software: clean code architecture, rapid sprints, automated CI/CD, strict testing, and reliable product execution.",
    type: "WebPage",
  },
  "/our-work/technology": {
    title: "Our Technology Stack | Modern Tools & Frameworks | BeeStack",
    description:
      "Explore the modern technologies BeeStack uses: React, Next.js, Kotlin, Swift, Node.js, PostgreSQL, Docker, AWS, and Cloudflare.",
    type: "WebPage",
  },
  "/contact-us": {
    title: "Contact BeeStack | Start Your Project Consultation",
    description:
      "Get in touch with BeeStack for product development inquiries, engineering partnerships, or custom software consultations.",
    type: "ContactPage",
  },
  "/contact-us/getting-in": {
    title: "Getting Started with BeeStack | Engagement Process",
    description:
      "Learn how to start a project with BeeStack: from discovery and scoping to sprint execution, deployment, and ongoing scale.",
    type: "WebPage",
  },
  "/contact-us/location": {
    title: "BeeStack Headquarters & Engineering Labs | Nanded, India",
    description:
      "Visit BeeStack's software development lab in Nanded, Maharashtra. Connect with our engineering and leadership teams in person.",
    type: "ContactPage",
  },
  "/sitemap": {
    title: "Sitemap | Browse All Pages & Services | BeeStack",
    description:
      "Easily navigate the BeeStack website. Explore direct links to our services, portfolio, case studies, career openings, and contact channels.",
    type: "WebPage",
  },
  "/legal": {
    title: "Legal Information, Terms of Service & Privacy Policy | BeeStack",
    description:
      "Review BeeStack's Terms of Service, Privacy Policy, intellectual property rights, data protection standards, and security disclosure policies.",
    type: "WebPage",
  },
};

// Breadcrumb hierarchy mapping for rich snippet navigation
const breadcrumbMap = {
  "/about-us": [{ name: "About Us", path: "/about-us" }],
  "/about-us/testimonials": [
    { name: "About Us", path: "/about-us" },
    { name: "Testimonials", path: "/about-us/testimonials" },
  ],
  "/careers": [{ name: "Careers", path: "/careers" }],
  "/careers/current-openings": [
    { name: "Careers", path: "/careers" },
    { name: "Current Openings", path: "/careers/current-openings" },
  ],
  "/jobs/android": [
    { name: "Careers", path: "/careers" },
    { name: "Current Openings", path: "/careers/current-openings" },
    { name: "Android Developer", path: "/jobs/android" },
  ],
  "/jobs/ios": [
    { name: "Careers", path: "/careers" },
    { name: "Current Openings", path: "/careers/current-openings" },
    { name: "iOS Developer", path: "/jobs/ios" },
  ],
  "/jobs/webfrontend": [
    { name: "Careers", path: "/careers" },
    { name: "Current Openings", path: "/careers/current-openings" },
    { name: "Frontend Developer", path: "/jobs/webfrontend" },
  ],
  "/jobs/webbackend": [
    { name: "Careers", path: "/careers" },
    { name: "Current Openings", path: "/careers/current-openings" },
    { name: "Backend Developer", path: "/jobs/webbackend" },
  ],
  "/our-work/concept": [
    { name: "Our Work", path: "/our-work/products" },
    { name: "Concepts", path: "/our-work/concept" },
  ],
  "/our-work/products": [
    { name: "Our Work", path: "/our-work/products" },
    { name: "Products & Portfolio", path: "/our-work/products" },
  ],
  "/our-work/technique": [
    { name: "Our Work", path: "/our-work/products" },
    { name: "Engineering Technique", path: "/our-work/technique" },
  ],
  "/our-work/technology": [
    { name: "Our Work", path: "/our-work/products" },
    { name: "Technology Stack", path: "/our-work/technology" },
  ],
  "/contact-us": [{ name: "Contact Us", path: "/contact-us" }],
  "/contact-us/getting-in": [
    { name: "Contact Us", path: "/contact-us" },
    { name: "Getting Started", path: "/contact-us/getting-in" },
  ],
  "/contact-us/location": [
    { name: "Contact Us", path: "/contact-us" },
    { name: "Our Location", path: "/contact-us/location" },
  ],
  "/sitemap": [{ name: "Sitemap", path: "/sitemap" }],
  "/legal": [{ name: "Legal & Privacy", path: "/legal" }],
};

export default function Seo() {
  const { pathname } = useLocation();
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "") || "/";
  const meta = pageMeta[normalizedPath] || {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    type: "WebPage",
  };

  const canonicalUrl = `${SITE_URL}${normalizedPath === "/" ? "" : normalizedPath}`;
  const socialImage = `${SITE_URL}/beestack_text_logo.png`;

  // 1. Google Knowledge Graph Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "BeeStack",
    legalName: "BeeStack Technologies",
    url: SITE_URL,
    logo: `${SITE_URL}/beestack_logo.png`,
    image: socialImage,
    description: DEFAULT_DESCRIPTION,
    email: "business@beestack.in",
    telephone: "+91-9876543210",
    foundingLocation: {
      "@type": "Place",
      name: "Nanded, Maharashtra, India",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ramdasji Nagar, Vishnupuri",
      addressLocality: "Nanded",
      addressRegion: "Maharashtra",
      postalCode: "431606",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.linkedin.com/company/beestack/",
      "https://github.com/GajananPalepwad/BeeStack",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "business@beestack.in",
      url: `${SITE_URL}/contact-us`,
      availableLanguage: ["English", "Hindi", "Marathi"],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "6",
      bestRating: "5",
      worstRating: "1",
    },
  };

  // 2. WebSite Schema
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: "BeeStack",
    description: "Custom Software, Web Apps, Mobile Apps & Cloud Engineering",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };

  // 3. Dynamic BreadcrumbList Schema
  const crumbs = breadcrumbMap[normalizedPath];
  const breadcrumbSchema = crumbs
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          ...crumbs.map((crumb, idx) => ({
            "@type": "ListItem",
            position: idx + 2,
            name: crumb.name,
            item: `${SITE_URL}${crumb.path}`,
          })),
        ],
      }
    : null;

  // 4. Service Catalog Schema (Home & Our Work pages)
  const isServicesPage =
    normalizedPath === "/" || normalizedPath.startsWith("/our-work");
  const servicesSchema = isServicesPage
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Software Development & Product Engineering",
        provider: {
          "@id": `${SITE_URL}/#organization`,
        },
        areaServed: {
          "@type": "Country",
          name: "Global",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "BeeStack Engineering Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Web Application Development",
                description:
                  "Next.js, React, full-stack architectures, dashboards, and scalable web apps.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Mobile App Development",
                description:
                  "Native Android (Kotlin, Jetpack Compose) and iOS (Swift, SwiftUI) mobile platforms.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cloud Architecture & APIs",
                description:
                  "REST and GraphQL APIs, microservices, database design, and 99.9% uptime cloud infrastructure.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "UI/UX & Product Design",
                description:
                  "Intuitive design systems, fast 60fps micro-interactions, and conversion-focused design.",
              },
            },
          ],
        },
      }
    : null;

  // 5. Client Reviews Schema (Home & Testimonials pages)
  const isReviewsPage =
    normalizedPath === "/" || normalizedPath === "/about-us/testimonials";
  const reviewsSchema = isReviewsPage
    ? {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        review: [
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Dr. Sania A. Sayed" },
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody:
              "BeeStack helped establish a professional online presence for my practice. The website presents information clearly and makes it easier for visitors to learn about my services.",
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Dr. Nadir Shah" },
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody:
              "Working with BeeStack on my online presence has been a positive experience. The website provides a professional way to present information about my practice.",
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Adil Shah" },
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody:
              "BeeStack helped bring our foundation's online presence to life with a dedicated website to represent our organization and its work.",
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Faisal Quraishi" },
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody:
              "BeeStack helped us establish a professional online presence for Himroofa Fabrics. The website showcases our brand and products in a clean, organized, and user-friendly way.",
          },
        ],
      }
    : null;

  // 6. Job Posting Schema for recruitment
  const jobTitles = {
    "/jobs/android": "Android Developer",
    "/jobs/ios": "iOS Developer",
    "/jobs/webfrontend": "Frontend Web Developer",
    "/jobs/webbackend": "Backend Web Developer",
  };

  const jobSchema = jobTitles[normalizedPath]
    ? {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title: `${jobTitles[normalizedPath]} at BeeStack`,
        description: meta.description,
        datePosted: "2026-01-01",
        validThrough: "2026-12-31",
        employmentType: "FULL_TIME",
        hiringOrganization: {
          "@type": "Organization",
          name: "BeeStack",
          sameAs: SITE_URL,
          logo: `${SITE_URL}/beestack_logo.png`,
        },
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Ramdasji Nagar, Vishnupuri",
            addressLocality: "Nanded",
            addressRegion: "Maharashtra",
            postalCode: "431606",
            addressCountry: "IN",
          },
        },
        jobLocationType: "TELECOMMUTE",
        applicantLocationRequirements: {
          "@type": "Country",
          name: "India",
        },
      }
    : null;

  return (
    <Helmet prioritizeSeoTags>
      {/* Primary HTML Meta Tags */}
      <title>{meta.title}</title>
      <meta name="title" content={meta.title} />
      <meta name="description" content={meta.description} />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content="BeeStack" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content={normalizedPath === "/" ? "website" : "article"} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={socialImage} />
      <meta property="og:image:alt" content="BeeStack - Technology & Product Engineering Company" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={socialImage} />
      <meta name="twitter:image:alt" content="BeeStack - Technology & Product Engineering Company" />

      {/* Theme and Web App Identity */}
      <meta name="theme-color" content="#0f172a" />

      {/* Structured Data: Organization & WebSite */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webSiteSchema)}
      </script>

      {/* Structured Data: Breadcrumbs */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {/* Structured Data: Services Catalog */}
      {servicesSchema && (
        <script type="application/ld+json">
          {JSON.stringify(servicesSchema)}
        </script>
      )}

      {/* Structured Data: Verified Client Reviews */}
      {reviewsSchema && (
        <script type="application/ld+json">
          {JSON.stringify(reviewsSchema)}
        </script>
      )}

      {/* Structured Data: Job Postings */}
      {jobSchema && (
        <script type="application/ld+json">
          {JSON.stringify(jobSchema)}
        </script>
      )}
    </Helmet>
  );
}

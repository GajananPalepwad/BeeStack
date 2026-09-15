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
  },
  "/about-us": {
    title: "About BeeStack | Technology Partner for Growth",
    description:
      "Learn about BeeStack, our mission, and how we partner with startups and businesses to build technology that moves ideas forward.",
  },
  "/about-us/testimonials": {
    title: "Testimonials | BeeStack",
    description:
      "Read what clients and partners say about working with BeeStack on digital product, app, and software projects.",
  },
  "/careers": {
    title: "Careers at BeeStack | Join Our Team",
    description:
      "Explore career opportunities at BeeStack and work with a team building innovative digital products and scalable technology solutions.",
  },
  "/careers/current-openings": {
    title: "Current Openings | BeeStack Careers",
    description:
      "View open roles at BeeStack and apply for product, engineering, and digital innovation opportunities.",
  },
  "/contact-us": {
    title: "Contact BeeStack | Get in Touch",
    description:
      "Reach out to BeeStack for project inquiries, product engineering services, partnership opportunities, or general business questions.",
  },
  "/contact-us/getting-in": {
    title: "Getting In | Contact BeeStack",
    description:
      "Learn how to connect with BeeStack, collaborate on projects, or start your next digital product initiative with our team.",
  },
  "/contact-us/location": {
    title: "BeeStack Location | Visit Our Team",
    description:
      "Find BeeStack’s office details and location information to connect with our team in person.",
  },
  "/jobs/android": {
    title: "Android Developer Jobs | BeeStack",
    description:
      "Join BeeStack as an Android developer and build robust, user-focused mobile experiences for modern digital products.",
  },
  "/jobs/ios": {
    title: "iOS Developer Jobs | BeeStack",
    description:
      "Help build premium iOS experiences with BeeStack and deliver products that delight users and scale with business growth.",
  },
  "/jobs/webfrontend": {
    title: "Frontend Developer Jobs | BeeStack",
    description:
      "Explore frontend engineering opportunities at BeeStack and create high-performance digital experiences for modern businesses.",
  },
  "/jobs/webbackend": {
    title: "Backend Developer Jobs | BeeStack",
    description:
      "Work on scalable backend systems and APIs with BeeStack to support high-growth digital products and platforms.",
  },
  "/our-work/concept": {
    title: "Our Work | BeeStack Projects & Concepts",
    description:
      "Explore BeeStack’s work across product strategy, software engineering, digital transformation, and next-generation business solutions.",
  },
  "/our-work/products": {
    title: "Products & Solutions | BeeStack",
    description:
      "Discover the products, digital systems, and technology solutions BeeStack builds for startups and enterprise teams.",
  },
  "/our-work/technique": {
    title: "Our Development Technique | BeeStack",
    description:
      "Learn how BeeStack approaches product development, engineering workflows, and digital execution for lasting business impact.",
  },
  "/our-work/technology": {
    title: "Technology Stack | BeeStack",
    description:
      "See the technologies BeeStack uses to build modern web applications, mobile apps, SaaS products, and scalable digital systems.",
  },
  "/sitemap": {
    title: "Sitemap | BeeStack",
    description:
      "Browse the BeeStack website sitemap to find key pages across services, company information, careers, and contact details.",
  },
};

export default function Seo() {
  const { pathname } = useLocation();
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "") || "/";
  const meta = pageMeta[normalizedPath] || {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  };

  const canonicalUrl = `${SITE_URL}${normalizedPath === "/" ? "" : normalizedPath}`;
  const socialImage = `${SITE_URL}/beestack_text_logo.png`;

  return (
    <Helmet prioritizeSeoTags>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="BeeStack" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={socialImage} />
      <meta property="og:image:alt" content="BeeStack logo" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={socialImage} />

      <meta name="theme-color" content="#0f172a" />
    </Helmet>
  );
}

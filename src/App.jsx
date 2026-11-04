import { useState, useEffect, lazy, Suspense } from 'react';
import './App.css';
import { Navigate, createBrowserRouter, RouterProvider, Outlet, useLocation, useRouteError } from 'react-router-dom';
import LoadingPage from './pages/LoadingPage';
import Seo from './components/Seo';
import TopProgressBar from './components/TopProgressBar';

// Utility to auto-retry dynamic module imports when a new deploy invalidates previous chunk hashes
const lazyWithRetry = (componentImport) =>
  lazy(async () => {
    const key = 'beestack_chunk_retry';
    const hasReloaded = typeof window !== 'undefined' && sessionStorage.getItem(key) === 'true';

    try {
      const module = await componentImport();
      if (typeof window !== 'undefined') sessionStorage.removeItem(key);
      return module;
    } catch (error) {
      const isChunkError =
        error?.message?.includes('Failed to fetch dynamically imported module') ||
        error?.message?.includes('Importing a module script failed') ||
        error?.name === 'TypeError';

      if (!hasReloaded && isChunkError && typeof window !== 'undefined') {
        sessionStorage.setItem(key, 'true');
        window.location.reload();
        return new Promise(() => {}); // Hold promise while page reloads
      }
      if (typeof window !== 'undefined') sessionStorage.removeItem(key);
      throw error;
    }
  });

// Route-level code splitting with deployment-resilient dynamic import retry
const HomePage = lazyWithRetry(() => import('./pages/HomePage'));
const Technique = lazyWithRetry(() => import('./pages/Technique'));
const Technology = lazyWithRetry(() => import('./pages/Technology'));
const Products = lazyWithRetry(() => import('./pages/Products'));
const OurWork = lazyWithRetry(() => import('./pages/OurWork'));
const AboutUs = lazyWithRetry(() => import('./pages/AboutUs'));
const Testimonials = lazyWithRetry(() => import('./pages/Testimonials'));
const Careers = lazyWithRetry(() => import('./pages/Careers'));
const GettingIn = lazyWithRetry(() => import('./pages/GettingIn'));
const CurrentOpenings = lazyWithRetry(() => import('./pages/CurrentOpenings'));
const Android = lazyWithRetry(() => import('./pages/jobs/Android'));
const IOS = lazyWithRetry(() => import('./pages/jobs/IOS'));
const WebFrontend = lazyWithRetry(() => import('./pages/jobs/WebFrontend'));
const WebBackend = lazyWithRetry(() => import('./pages/jobs/WebBackend'));
const ContactUs = lazyWithRetry(() => import('./pages/ContactUs'));
const Location = lazyWithRetry(() => import('./pages/Location'));
const Sitemap = lazyWithRetry(() => import('./pages/Sitemap'));
const Legal = lazyWithRetry(() => import('./pages/Legal'));
const NotFound = lazyWithRetry(() => import('./pages/NotFound'));
const WhatsAppRedirect = lazyWithRetry(() => import('./pages/WhatsAppRedirect'));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const resetScroll = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      document.querySelectorAll('.ow-main, .main-content').forEach((el) => {
        if (el instanceof HTMLElement) {
          el.scrollTop = 0;
        }
      });
    };

    const frame = window.requestAnimationFrame(resetScroll);
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
};

const RootLayout = () => (
  <>
    <Seo />
    <ScrollToTop />
    <Suspense fallback={<TopProgressBar />}>
      <Outlet />
    </Suspense>
  </>
);

const RouteErrorBoundary = () => {
  const error = useRouteError();
  console.error("Route Error caught by Boundary:", error);

  const handleReload = () => {
    try {
      sessionStorage.removeItem('beestack_chunk_retry');
    } catch {
      // Ignore sessionStorage errors
    }
    window.location.reload();
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#070B14',
        color: '#F8FAFC',
        fontFamily: "'K2D', system-ui, -apple-system, sans-serif",
        padding: '24px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          background: 'rgba(15, 23, 42, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
          padding: '40px 32px',
          maxWidth: '440px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
        }}
      >
        <img
          src="/logo.png"
          alt="BeeStack Logo"
          style={{ width: '56px', height: '56px', objectFit: 'contain' }}
        />
        <h2
          style={{
            fontSize: '1.35rem',
            fontWeight: 800,
            margin: 0,
            color: '#FFFFFF',
          }}
        >
          Application Update Detected
        </h2>
        <p
          style={{
            fontSize: '0.92rem',
            color: '#94A3B8',
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          A new version of BeeStack has been deployed. Please reload the page to load the latest components.
        </p>
        <button
          type="button"
          onClick={handleReload}
          style={{
            marginTop: '8px',
            background: '#FCAB1E',
            color: '#070B14',
            border: 'none',
            borderRadius: '12px',
            padding: '13px 28px',
            fontSize: '0.95rem',
            fontWeight: 800,
            cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(252, 171, 30, 0.4)',
            transition: 'transform 0.2s ease',
            fontFamily: 'inherit',
          }}
        >
          Reload Page
        </button>
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "our-work",
        element: <Navigate to="/our-work/products" replace />,
      },
      {
        path: "our-work/technique",
        element: <Technique />
      },
      {
        path: "our-work/technology",
        element: <Technology />
      },
      {
        path: "our-work/products",
        element: <Products />
      },
      {
        path: "our-work/concept",
        element: <OurWork />
      },
      {
        path: "about-us",
        element: <AboutUs />
      },
      {
        path: "about-us/testimonials",
        element: <Testimonials />
      },
      {
        path: "careers",
        element: <Careers />
      },
      {
        path: "contact-us/getting-in",
        element: <GettingIn />
      },
      {
        path: "careers/current-openings",
        element: <CurrentOpenings />
      },
      {
        path: "jobs/android",
        element: <Android />
      },
      {
        path: "jobs/ios",
        element: <IOS />
      },
      {
        path: "jobs/webfrontend",
        element: <WebFrontend />
      },
      {
        path: "jobs/webbackend",
        element: <WebBackend />
      },
      {
        path: "contact-us",
        element: <ContactUs />
      },
      {
        path: "contact-us/location",
        element: <Location />
      },
      {
        path: "sitemap",
        element: <Sitemap />
      },
      {
        path: "legal",
        element: <Legal />
      },
      {
        path: "wa",
        element: <WhatsAppRedirect />
      },
      {
        path: "whatsapp",
        element: <WhatsAppRedirect />
      },
      {
        path: "*",
        element: <NotFound />
      },
    ],
  },
]);

function App() {
  const [isLoading, setIsLoading] = useState(() => {
    // Skip splash completely if opening direct redirect links like /wa
    if (typeof window !== 'undefined' && /^\/wa(tsapp)?\/?$/i.test(window.location.pathname)) {
      return false;
    }
    // Check if splash was already shown in this browser session
    try {
      return !sessionStorage.getItem('beestack_splash_seen');
    } catch {
      return false;
    }
  });
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    if (!isLoading) return;

    // Show brief branded intro for ~800ms then smooth exit fade
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 800);

    const completeTimer = setTimeout(() => {
      setIsLoading(false);
      try {
        sessionStorage.setItem('beestack_splash_seen', 'true');
      } catch {
        // Ignore storage quotas or restrictions
      }
    }, 1100);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [isLoading]);

  return (
    <div className="app">
      {isLoading && <LoadingPage isFadingOut={isFadingOut} />}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

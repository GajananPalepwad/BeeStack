import { useState, useEffect, lazy, Suspense } from 'react';
import './App.css';
import { Navigate, createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom';
import LoadingPage from './pages/LoadingPage';
import Seo from './components/Seo';
import TopProgressBar from './components/TopProgressBar';

// Route-level code splitting for optimized chunking and faster FCP/LCP
const HomePage = lazy(() => import('./pages/HomePage'));
const Technique = lazy(() => import('./pages/Technique'));
const Technology = lazy(() => import('./pages/Technology'));
const Products = lazy(() => import('./pages/Products'));
const OurWork = lazy(() => import('./pages/OurWork'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Careers = lazy(() => import('./pages/Careers'));
const GettingIn = lazy(() => import('./pages/GettingIn'));
const CurrentOpenings = lazy(() => import('./pages/CurrentOpenings'));
const Android = lazy(() => import('./pages/jobs/Android'));
const IOS = lazy(() => import('./pages/jobs/IOS'));
const WebFrontend = lazy(() => import('./pages/jobs/WebFrontend'));
const WebBackend = lazy(() => import('./pages/jobs/WebBackend'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const Location = lazy(() => import('./pages/Location'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const Legal = lazy(() => import('./pages/Legal'));
const NotFound = lazy(() => import('./pages/NotFound'));
const WhatsAppRedirect = lazy(() => import('./pages/WhatsAppRedirect'));

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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

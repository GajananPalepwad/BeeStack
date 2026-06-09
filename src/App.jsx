import { useState, useEffect } from 'react'
import './App.css'
import { Navigate } from "react-router-dom";
import HomePage from './pages/HomePage';
import LoadingPage from './pages/LoadingPage'
import OurWork from './pages/OurWork'
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom'
import Technique from './pages/Technique';
import Technology from './pages/Technology';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import Testimonials from './pages/Testimonials';
import Careers from './pages/Careers';
import GettingIn from './pages/GettingIn';
import CurrentOpenings from './pages/CurrentOpenings';
import Android from './pages/jobs/Andriod';
import IOS from './pages/jobs/IOS';
import WebFrontend from './pages/jobs/WebFrontend';
import WebBackend from './pages/jobs/WebBackend';
import ContactUs from './pages/ContactUs';
import Location from './pages/Location';
import Sitemap from './pages/Sitemap';

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
    <ScrollToTop />
    <Outlet />
  </>
);

function App() {

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
          path: "careers/getting-in",
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
      ],
    },
  ]);


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />
  }

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App

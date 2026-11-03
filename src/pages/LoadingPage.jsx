import React from 'react';
import './LoadingPage.css';

const LoadingPage = ({ isFadingOut = false }) => {
  return (
    <div
      className={`loading-page ${isFadingOut ? 'loading-page--fade-out' : ''}`}
      role="status"
      aria-label="Loading BeeStack"
    >
      <div className="loading-content">
        <div className="loading-brand">
          <img
            src="/beestack_logo.png"
            alt="BeeStack"
            className="loading-logo"
            onError={(e) => {
              // Graceful fallback if beestack_logo is missing
              e.currentTarget.src = '/logo.png';
            }}
          />
        </div>
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;

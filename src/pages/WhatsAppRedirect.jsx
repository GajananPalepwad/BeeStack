import { useEffect } from 'react';

const WHATSAPP_URL = 'https://wa.me/919272501599';

const WhatsAppRedirect = () => {
  useEffect(() => {
    // Immediate redirect to WhatsApp
    window.location.replace(WHATSAPP_URL);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '24px',
        textAlign: 'center',
        fontFamily: "'K2D', system-ui, -apple-system, sans-serif",
        backgroundColor: '#F8FAFC',
        color: '#0F172A',
      }}
    >
      <div
        style={{
          background: '#ffffff',
          padding: '40px 32px',
          borderRadius: '24px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
          maxWidth: '420px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '18px',
          border: '1px solid rgba(15, 23, 42, 0.06)',
        }}
      >
        {/* WhatsApp Icon */}
        <div
          style={{
            width: '68px',
            height: '68px',
            borderRadius: '50%',
            backgroundColor: '#25D366',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 24px rgba(37, 211, 102, 0.38)',
          }}
        >
          <svg width="38" height="38" viewBox="0 0 24 24" fill="white">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 17.58c-1.5 0-2.97-.4-4.25-1.16l-.3-.18-3.14.82.84-3.06-.2-.32c-.84-1.34-1.29-2.9-1.29-4.49 0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42 1.56 1.56 2.41 3.63 2.41 5.84 0 4.54-3.7 8.23-8.24 8.23zm4.51-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.78 2.71 4.3 3.8.6.26 1.07.41 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z" />
          </svg>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <h1
            style={{
              fontSize: '1.35rem',
              fontWeight: 800,
              margin: 0,
              color: '#0F172A',
            }}
          >
            Connecting to WhatsApp...
          </h1>
          <p
            style={{
              fontSize: '0.92rem',
              color: '#64748B',
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            Opening chat with BeeStack (+91 92725 01599). If it doesn&apos;t open automatically, click below.
          </p>
        </div>

        <a
          href={WHATSAPP_URL}
          style={{
            marginTop: '6px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            width: '100%',
            boxSizing: 'border-box',
            background: '#25D366',
            color: '#FFFFFF',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '1rem',
            padding: '13px 20px',
            borderRadius: '12px',
            boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)',
            transition: 'all 0.2s ease',
          }}
        >
          <span>Open WhatsApp Chat</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default WhatsAppRedirect;

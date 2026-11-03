import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { sendGetInTouch } from "../api/contact.api";
import "./Form.css";

const SERVICE_OPTIONS = [
  "Web Platform",
  "Mobile App",
  "Institutional ERP",
  "Cloud & DevOps",
  "Technical Consultation",
];

export default function Form() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [statusMessage, setStatusMessage] = useState("");
  const [selectedInterest, setSelectedInterest] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Close success modal on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setStatus(null);
    };
    if (status === "success") {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [status]);

  const handleSelectInterest = (option) => {
    if (selectedInterest === option) {
      setSelectedInterest("");
      setValue("subject", "");
    } else {
      setSelectedInterest(option);
      setValue("subject", `Inquiry: ${option}`);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("business@beestack.in");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    setStatus(null);
    setStatusMessage("");

    // Honeypot check: automated bots will fill this hidden input
    if (data.b_website_hp) {
      await new Promise((r) => setTimeout(r, 600));
      setStatus("success");
      setStatusMessage("Message sent successfully!");
      reset();
      setSelectedInterest("");
      setLoading(false);
      return;
    }

    try {
      const payload = {
        name: data.name,
        email: data.email,
        subject: data.subject || (selectedInterest ? `Inquiry: ${selectedInterest}` : "New Project Inquiry"),
        message: data.phone?.trim()
          ? `${data.message}\n\n[Contact Phone / WhatsApp: ${data.phone.trim()}]`
          : data.message,
      };
      await sendGetInTouch(payload);
      setStatus("success");
      setStatusMessage("Message sent successfully!");
      reset();
      setSelectedInterest("");
    } catch (err) {
      setStatus("error");
      setStatusMessage(err.message || "Failed to send message. Please email business@beestack.in directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bs-contact-wrapper" id="contact-form" aria-label="Contact BeeStack">
      <div className="bs-contact-container">
        {/* Left Column: Direct Inquiries, Trust & Info */}
        <div className="bs-contact-info-col">
          {/* <div className="bs-contact-badge">
            <span className="bs-contact-badge-dot" />
            LET'S TALK
          </div> */}

          <h2 className="bs-contact-headline">
            Let's build something extraordinary together.
          </h2>

          <p className="bs-contact-subtext">
            Have an upcoming software product, campus architecture, or engineering challenge? Drop our architects a note. We turn ambitious visions into high-performing digital realities.
          </p>

          {/* SLA / Availability Badge */}
          <div className="bs-sla-card">
            <div className="bs-sla-pulse">
              <span className="bs-sla-dot" />
              <span className="bs-sla-ping" />
            </div>
            <div className="bs-sla-content">
              <strong>Engineering Capacity Available</strong>
              <span>Average response time: within 24 business hours</span>
            </div>
          </div>

          {/* Quick Connect Cards */}
          <div className="bs-connect-cards">
            {/* Direct Email Card */}
            <div className="bs-connect-card">
              <div className="bs-connect-icon bs-connect-icon--email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="bs-connect-details">
                <span className="bs-connect-label">Project Inquiries</span>
                <a href="mailto:business@beestack.in" className="bs-connect-link">
                  business@beestack.in
                </a>
              </div>
              <button
                type="button"
                className="bs-copy-btn"
                onClick={handleCopyEmail}
                title="Copy email address"
              >
                {copiedEmail ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* Direct WhatsApp / Support Card */}
            <div className="bs-connect-card">
              <div className="bs-connect-icon bs-connect-icon--chat">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <div className="bs-connect-details">
                <span className="bs-connect-label">Fast Collaboration</span>
                <span className="bs-connect-val">Dedicated Slack / WhatsApp Sync</span>
              </div>
            </div>

            {/* Location Card */}
            <div className="bs-connect-card">
              <div className="bs-connect-icon bs-connect-icon--loc">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="bs-connect-details">
                <span className="bs-connect-label">Engineering Hub</span>
                <span className="bs-connect-val">Vishnupuri, Nanded, Maharashtra</span>
              </div>
            </div>
          </div>

          {/* 3-Step Process Indicator */}
          <div className="bs-process-strip">
            <div className="bs-process-step">
              <span className="bs-step-num">01</span>
              <span>Scope & NDA</span>
            </div>
            <span className="bs-process-arrow">&rarr;</span>
            <div className="bs-process-step">
              <span className="bs-step-num">02</span>
              <span>System Design</span>
            </div>
            <span className="bs-process-arrow">&rarr;</span>
            <div className="bs-process-step">
              <span className="bs-step-num">03</span>
              <span>Sprint Delivery</span>
            </div>
          </div>
        </div>

        {/* Right Column: Modern Frosted Glassmorphism Form Card */}
        <div className="bs-contact-form-col">
          <div className="bs-form-card">
            {/* Top Accent Gradient Bar */}
            <div className="bs-form-accent" />

            <div className="bs-form-body">
              <div className="bs-form-header">
                <h3 className="bs-form-title">Send a Project Brief</h3>
                <p className="bs-form-desc">
                  Fill in your requirements below for a customized scope and architecture estimate.
                </p>
              </div>

              {/* Service Interest Chips */}
              <div className="bs-chips-section">
                <span className="bs-chips-label">I'm interested in:</span>
                <div className="bs-chips-group">
                  {SERVICE_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      className={`bs-chip-btn ${
                        selectedInterest === opt ? "bs-chip-btn--active" : ""
                      }`}
                      onClick={() => handleSelectInterest(opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="bs-form" noValidate>
                {/* Honeypot field for bot spam prevention */}
                <div style={{ display: "none", opacity: 0, position: "absolute", zIndex: -10 }} aria-hidden="true">
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    {...register("b_website_hp")}
                  />
                </div>

                {/* Name & Email 2-Column Row on desktop */}
                <div className="bs-form-row">
                  {/* Name Field */}
                  <div className="bs-field-group">
                    <label className="bs-field-label">
                      Full Name <span className="bs-required">*</span>
                    </label>
                    <div className={`bs-input-box ${errors.name ? "bs-input-box--error" : ""}`}>
                      <svg className="bs-input-icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="bs-input"
                        {...register("name", { required: "Name is required" })}
                      />
                    </div>
                    {errors.name && <span className="bs-field-error">{errors.name.message}</span>}
                  </div>

                  {/* Email Field */}
                  <div className="bs-field-group">
                    <label className="bs-field-label">
                      Work Email <span className="bs-required">*</span>
                    </label>
                    <div className={`bs-input-box ${errors.email ? "bs-input-box--error" : ""}`}>
                      <svg className="bs-input-icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        className="bs-input"
                        {...register("email", {
                          required: "Work email is required",
                          pattern: {
                            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                            message: "Please enter a valid email address",
                          },
                        })}
                      />
                    </div>
                    {errors.email && <span className="bs-field-error">{errors.email.message}</span>}
                  </div>
                </div>

                {/* Phone & Subject 2-Column Row on desktop */}
                <div className="bs-form-row">
                  {/* Phone Field */}
                  <div className="bs-field-group">
                    <div className="bs-label-row">
                      <label className="bs-field-label">Phone / WhatsApp</label>
                      <span className="bs-optional-badge">Optional</span>
                    </div>
                    <div className={`bs-input-box ${errors.phone ? "bs-input-box--error" : ""}`}>
                      <svg className="bs-input-icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="bs-input"
                        {...register("phone", {
                          pattern: {
                            value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
                            message: "Enter a valid phone number",
                          },
                        })}
                      />
                    </div>
                    {errors.phone && <span className="bs-field-error">{errors.phone.message}</span>}
                  </div>

                  {/* Subject Field */}
                  <div className="bs-field-group">
                    <label className="bs-field-label">
                      Subject / Topic <span className="bs-required">*</span>
                    </label>
                    <div className={`bs-input-box ${errors.subject ? "bs-input-box--error" : ""}`}>
                      <svg className="bs-input-icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="4" y1="9" x2="20" y2="9" />
                        <line x1="4" y1="15" x2="20" y2="15" />
                        <line x1="10" y1="3" x2="8" y2="21" />
                        <line x1="16" y1="3" x2="14" y2="21" />
                      </svg>
                      <input
                        type="text"
                        placeholder="e.g. Campus LMS Redesign"
                        className="bs-input"
                        {...register("subject", { required: "Subject is required" })}
                      />
                    </div>
                    {errors.subject && <span className="bs-field-error">{errors.subject.message}</span>}
                  </div>
                </div>

                {/* Message Field */}
                <div className="bs-field-group">
                  <label className="bs-field-label">
                    Project Requirements & Scope <span className="bs-required">*</span>
                  </label>
                  <div className={`bs-input-box bs-input-box--textarea ${errors.message ? "bs-input-box--error" : ""}`}>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your goals, current architecture, timeline, and expectations..."
                      className="bs-textarea"
                      {...register("message", { required: "Message is required" })}
                    />
                  </div>
                  {errors.message && <span className="bs-field-error">{errors.message.message}</span>}
                </div>

                {/* Inline Error if backend throws error */}
                {status === "error" && (
                  <div className="bs-error-banner">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <span>{statusMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bs-submit-btn"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="bs-btn-spinner" />
                      <span>Transmitting Brief...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Project Brief</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Confirmation Modal Popup */}
      {status === "success" && (
        <div
          className="bs-success-backdrop"
          onClick={() => setStatus(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bs-success-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bs-success-icon-pod">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>

            <h3 className="bs-success-title">Message Received!</h3>
            <p className="bs-success-text">
              Thank you for reaching out to BeeStack. Our engineering team has received your project brief and will follow up with technical feedback within 24 business hours.
            </p>

            <button
              type="button"
              onClick={() => setStatus(null)}
              className="bs-success-close-btn"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

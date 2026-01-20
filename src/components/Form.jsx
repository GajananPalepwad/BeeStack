import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { sendGetInTouch } from "../api/contact.api";
import "./Form.css";

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error
  const [statusMessage, setStatusMessage] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setStatus(null);
    setStatusMessage("");

    try {
      await sendGetInTouch(data);
      setStatus("success");
      setStatusMessage("Message sent successfully!");
      reset();
    } catch (err) {
      setStatus("error");
      setStatusMessage(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Make sure to include "return"
  return (
    <>
      <section className="contact-section">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="contact-form"
          noValidate
        >
          {/* Name Field */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full p-2 border rounded"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <div className="error">{errors.name.message}</div>}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-2 border rounded"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <div className="error">{errors.email.message}</div>
            )}
          </div>

          {/* Subject Field */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">Subject</label>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-2 border rounded"
              {...register("subject", { required: "Subject is required" })}
            />
            {errors.subject && (
              <div className="error">{errors.subject.message}</div>
            )}
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">Message</label>
            <textarea
              rows={6}
              placeholder="Write your message..."
              className="w-full p-2 border rounded"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <div className="error">{errors.message.message}</div>
            )}
          </div>

          {/* Inline Error Message */}
          {status && status !== "success" && (
            <div className={`status ${status} mb-4`}>{statusMessage}</div>
          )}

          <button
            type="submit"
            className="get-in-touch-btn"
            disabled={loading}
          >
            {loading ? "Sending..." : "Get in touch"}
          </button>
        </form>
      </section>

      {/* Success Modal */}
      {status === "success" && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2> Message Sent Successfully!</h2>
            <p>Thanks for reaching out, we’ll get back to you soon.</p>
            <button
              onClick={() => setStatus(null)}
              className="modal-close-btn"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

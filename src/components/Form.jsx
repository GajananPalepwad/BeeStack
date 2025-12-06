import React from "react";
import { useForm } from "react-hook-form";
import "./Form.css";

const CONTACT_EMAIL = "contact@beestack.com";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, subject, message } = data;
    const body = encodeURIComponent(`From: ${email}\n\n${message}`);
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
    window.location.href = mailto;
  };

  return (
    <section className="contact-section">
      {/* <div className="whatwedo flex flex-col gap-4">
        <h2 className="headingHP">Say Hello!</h2>
        <p>We'd love to hear about your project. Drop us a message.</p>
      </div> */}
      {/* <div className="contact-heading">
        <h2 className="headingC">Say Hello!</h2>
        <p>We'd love to hear about your project. Drop us a message.</p>
      </div> */}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="contact-form"
        noValidate
      >
        <label>
          Email
          <input
            type="email"
            placeholder="you@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "Enter a valid email",
              },
            })}
          />
        </label>
        {errors.email && <div className="error">{errors.email.message}</div>}

        <label>
          Subject
          <input
            type="text"
            placeholder="Subject"
            {...register("subject", { required: "Subject is required" })}
          />
        </label>
        {errors.subject && (
          <div className="error">{errors.subject.message}</div>
        )}

        <label>
          Message
          <textarea
            placeholder="Write your message..."
            rows={6}
            {...register("message", { required: "Message is required" })}
          />
        </label>
        {errors.message && (
          <div className="error">{errors.message.message}</div>
        )}

        <button type="submit" className="get-in-touch-btn">
          Get in touch
        </button>
      </form>
    </section> 

  );
}

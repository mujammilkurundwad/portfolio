import { useState } from "react";
import SectionHeading from "./SectionHeading.jsx";
import { FORMSPREE_ENDPOINT, profile } from "../data/portfolioData.js";

const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// True until the placeholder endpoint is replaced with a real Formspree URL.
const isEndpointConfigured = !FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID");

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email address.";
  else if (!EMAIL_PATTERN.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (!values.subject.trim()) errors.subject = "Please enter a subject.";
  if (!values.message.trim()) errors.message = "Please enter a message.";
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  // status: "idle" | "submitting" | "success" | "error"
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === "submitting") return; // block duplicate submissions

    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    if (!isEndpointConfigured) {
      setStatus("error");
      setErrorMessage(
        "Contact form is not configured yet. Replace FORMSPREE_ENDPOINT in src/data/portfolioData.js with your Formspree endpoint."
      );
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
        }),
      });

      if (response.ok) {
        setStatus("success"); // only after Formspree confirms
        setValues(EMPTY_FORM);
      } else {
        const data = await response.json().catch(() => ({}));
        const detail = data.errors?.map((item) => item.message).join(", ");
        setStatus("error");
        setErrorMessage(
          detail || "Sorry, your message could not be sent. Please try again or email me directly."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network error. Please check your connection and try again, or email me directly."
      );
    }
  };

  const isSubmitting = status === "submitting";

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading id="contact-title" eyebrow="Contact" title="Get In Touch" />
        <div className="contact">
          <div className="contact__info">
            <p>
              I&apos;m open to entry-level opportunities in AI/ML engineering, Generative AI and
              software development. Feel free to reach out — I&apos;d be glad to connect.
            </p>
            <ul className="contact__list">
              <li>
                <span>Email</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <span>LinkedIn</span>
                <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
                  Mujjamil Kurundwad on LinkedIn
                </a>
              </li>
              <li>
                <span>GitHub</span>
                <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
                  github.com/mujammilkurundwad
                </a>
              </li>
            </ul>
          </div>

          <form className="card contact__form" onSubmit={handleSubmit} noValidate>
            {[
              { name: "name", label: "Full Name", type: "text", autoComplete: "name" },
              { name: "email", label: "Email Address", type: "email", autoComplete: "email" },
              { name: "subject", label: "Subject", type: "text", autoComplete: "off" },
            ].map((field) => (
              <div className="form-group" key={field.name}>
                <label htmlFor={`contact-${field.name}`}>{field.label}</label>
                <input
                  id={`contact-${field.name}`}
                  name={field.name}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  value={values[field.name]}
                  onChange={handleChange}
                  required
                  aria-invalid={errors[field.name] ? "true" : "false"}
                  aria-describedby={errors[field.name] ? `error-${field.name}` : undefined}
                />
                {errors[field.name] && (
                  <p className="form-error" id={`error-${field.name}`}>
                    {errors[field.name]}
                  </p>
                )}
              </div>
            ))}

            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                value={values.message}
                onChange={handleChange}
                required
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "error-message" : undefined}
              />
              {errors.message && (
                <p className="form-error" id="error-message">
                  {errors.message}
                </p>
              )}
            </div>

            <button type="submit" className="btn btn--primary" disabled={isSubmitting}>
              {isSubmitting ? "Sending…" : "Send Message"}
            </button>

            <div aria-live="polite" className="form-status">
              {status === "success" && (
                <p className="form-success">Thank you! Your message has been sent.</p>
              )}
              {status === "error" && <p className="form-error">{errorMessage}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

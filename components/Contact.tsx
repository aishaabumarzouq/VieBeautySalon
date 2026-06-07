"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

const SERVICES = [
  "Hair Styling",
  "Hair Coloring",
  "Makeup",
  "Facials & Skin",
  "Nail Treatments",
  "Waxing",
  "Other",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className={styles.section}>
      {/* Info column */}
      <div className={styles.info}>
        <span className="eyebrow">Get in Touch</span>
        <h2 className={`section-title ${styles.title}`}>
          Visit <em>Us</em>
        </h2>

        <div className={styles.detail}>
          <div className={styles.icon}>📍</div>
          <div>
            <div className={styles.label}>Address</div>
            <div className={styles.value}>
              Shaab Al Bahri Building 24, 2nd Floor
              <br />
              Shaab, Hawalli, Kuwait City
            </div>
          </div>
        </div>

        <div className={styles.detail}>
          <div className={styles.icon}>📞</div>
          <div>
            <div className={styles.label}>Phone / WhatsApp</div>
            <div className={styles.value}>
              <a href="tel:+96599012207">+965 9901 2207</a>
            </div>
          </div>
        </div>

        <div className={styles.detail}>
          <div className={styles.icon}>📸</div>
          <div>
            <div className={styles.label}>Instagram</div>
            <div className={styles.value}>
              <a
                href="https://www.instagram.com/vie.kuwait/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @vie.kuwait
              </a>
            </div>
          </div>
        </div>

        <div className={styles.detail}>
          <div className={styles.icon}>🕐</div>
          <div>
            <div className={styles.label}>Hours</div>
            <div className={styles.value}>Open Daily: 10:00 am – 8:00 pm</div>
          </div>
        </div>
      </div>

      {/* Form column */}
      <div className={styles.formSide}>
        <h3 className={styles.formTitle}>Send a Message</h3>

        {submitted ? (
          <div className={styles.thanks}>
            <p>✨ Thank you! We&apos;ll be in touch soon.</p>
            <p>
              You can also reach us directly at{" "}
              <a href="tel:+96599012207">+965 9901 2207</a>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.row}>
              <div className={styles.group}>
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className={styles.group}>
                <input type="tel" placeholder="Phone Number" />
              </div>
            </div>

            <div className={styles.group}>
              <select defaultValue="">
                <option value="" disabled>
                  Select a Service
                </option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.group}>
              <textarea
                placeholder="Tell us about your appointment request or any questions…"
                rows={5}
              />
            </div>

            <button type="submit" className={styles.submit}>
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

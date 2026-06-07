"use client";

import { useEffect } from "react";
import styles from "./InstagramFeed.module.css";

const POSTS = [
  "https://www.instagram.com/p/DKIHXWJMVS_/",
  "https://www.instagram.com/p/DCbdLwdshnO/",
  "https://www.instagram.com/p/C5d3VvXMMgC/",
  "https://www.instagram.com/p/CgyiQLzsODG/",
];

export default function InstagramFeed() {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // If script already loaded, process existing embeds
    script.onload = () => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    };

    return () => {
      // cleanup
      const existing = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
      if (existing) document.body.removeChild(existing);
    };
  }, []);

  return (
    <section id="instagram" className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <span className="eyebrow">Follow Along</span>
        <h2 className="section-title">
          As Seen on <em>Instagram</em>
        </h2>
        <p className={styles.sub}>
          Real results, real clients. Follow us{" "}
          <a
            href="https://www.instagram.com/vie.kuwait/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @vie.kuwait
          </a>{" "}
          for daily inspiration.
        </p>
      </div>

      {/* Grid of embeds */}
      <div className={styles.grid}>
        {POSTS.map((url) => (
          <div key={url} className={styles.embedWrapper}>
            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink={`${url}?utm_source=ig_embed&utm_campaign=loading`}
              data-instgrm-version="14"
            />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        <a
          href="https://www.instagram.com/vie.kuwait/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          View All Posts on Instagram
        </a>
      </div>
    </section>
  );
}

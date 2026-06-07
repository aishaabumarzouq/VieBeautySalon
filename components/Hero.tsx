import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Left — copy */}
      <div className={styles.left}>
        <span className="eyebrow" style={{ animationDelay: "0.3s" }}>
          Kuwait&apos;s Intimate Beauty Sanctuary
        </span>

        <h1 className={styles.title}>
          Where Every<br />
          Visit Feels<br />
          <em>Extraordinary</em>
        </h1>

        <p className={styles.sub}>
          A chic and modern beauty destination in the heart of Shaab, Kuwait.
          Expert care, personalised treatments, and a warm atmosphere where
          your natural beauty truly shines.
        </p>

        <div className={styles.actions}>
          <a className="btn-primary" href="tel:+96599012207">
            📞 +965 9901 2207
          </a>
          <a className="btn-outline" href="#services">
            Explore Services
          </a>
        </div>
      </div>

      {/* Right — visual */}
      <div className={styles.right}>
        <div className={styles.pattern} />
        <div className={styles.textArt}>VIE</div>
        <div className={styles.badge}>
          <div className={styles.badgeCircle}>
            <span className={styles.badgeNumber}>10K</span>
            <span className={styles.badgeLabel}>Instagram Followers</span>
          </div>
        </div>
      </div>
    </section>
  );
}

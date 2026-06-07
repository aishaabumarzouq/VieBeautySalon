import styles from "./About.module.css";

const FEATURES = [
  "Expert Professionals",
  "Personalised Care",
  "Premium Products",
  "Welcoming Atmosphere",
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      {/* Left — visual */}
      <div className={styles.visual}>
        <div className={styles.visualText}>Vie</div>
        <div className={`${styles.floatStat} ${styles.s1}`}>
          <div className={styles.statN}>10K+</div>
          <div className={styles.statL}>Happy Followers</div>
        </div>
        <div className={`${styles.floatStat} ${styles.s2}`}>
          <div className={styles.statN}>Daily</div>
          <div className={styles.statL}>Open 10am – 8pm</div>
        </div>
      </div>

      {/* Right — content */}
      <div className={styles.content}>
        <span className="eyebrow">Our Story</span>
        <h2 className={`section-title ${styles.title}`}>
          About <em>Vie</em>
        </h2>

        <p>
          Vie Beauty Salon is a chic and modern beauty destination committed to
          enhancing your natural charm with expert care and creativity. Nestled
          on the 2nd floor of Shaab Al Bahri Building, we are a beloved corner
          of Hawalli&apos;s beauty scene.
        </p>
        <p>
          Our team of skilled professionals is passionate about delivering
          exceptional results in a warm, welcoming atmosphere. Whether you&apos;re
          preparing for a special occasion or simply indulging in well-deserved
          self-care, Vie ensures a luxurious experience that leaves you feeling
          confident and refreshed.
        </p>

        <div className={styles.features}>
          {FEATURES.map((f) => (
            <div key={f} className={styles.pill}>
              {f}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

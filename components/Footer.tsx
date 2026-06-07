import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        VIE <span>·</span> BEAUTY SALON
      </div>
      <div className={styles.copy}>
        © {new Date().getFullYear()} Vie Beauty Salon. Shaab, Hawalli, Kuwait.
      </div>
      <div className={styles.social}>
        <a
          href="https://www.instagram.com/vie.kuwait/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a href="tel:+96599012207">WhatsApp</a>
      </div>
    </footer>
  );
}

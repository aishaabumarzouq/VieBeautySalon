import styles from "./MapSection.module.css";

export default function MapSection() {
  return (
    <div className={styles.wrapper}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.9!2d48.0284688!3d29.3510857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDIxJzA0LjAiTiA0OMKwMDEnNDIuNSJF!5e0!3m2!1sen!2skw!4v1700000000000"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Vie Beauty Salon Location"
      />
      <div className={styles.badge}>
        <span className={styles.badgeSub}>Our Location</span>
        <div className={styles.badgeAddr}>
          Shaab Al Bahri
          <br />
          Building 24, 2nd Floor
          <br />
          Hawalli, Kuwait
        </div>
      </div>
    </div>
  );
}

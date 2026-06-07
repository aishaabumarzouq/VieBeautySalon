import styles from "./Services.module.css";

const SERVICES = [
  {
    icon: "✂️",
    name: "Hair Styling",
    desc: "From precision cuts to blowouts and detox treatments — every strand cared for with expert technique and creativity.",
  },
  {
    icon: "🎨",
    name: "Hair Coloring",
    desc: "Balayage, full color, highlights and toning — our colorists craft shades that frame your face and express your personality.",
  },
  {
    icon: "💄",
    name: "Makeup",
    desc: "Bridal to everyday glam — professional makeup artistry that enhances your features and lasts all day.",
  },
  {
    icon: "✨",
    name: "Facials & Skin",
    desc: "Tailored facial treatments that nourish, brighten and restore your skin's natural radiance.",
  },
  {
    icon: "💅",
    name: "Nail Treatments",
    desc: "Manicures, pedicures and nail art designed with meticulous attention to detail for a polished, lasting finish.",
  },
  {
    icon: "🌿",
    name: "Waxing & More",
    desc: "Gentle, effective hair removal and a range of body treatments in a clean and welcoming environment.",
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className="section-header">
        <span className="eyebrow">What We Offer</span>
        <h2 className="section-title">
          Our <em>Services</em>
        </h2>
      </div>

      <div className={styles.grid}>
        {SERVICES.map((s) => (
          <div key={s.name} className={styles.card}>
            <span className={styles.icon}>{s.icon}</span>
            <h3 className={styles.name}>{s.name}</h3>
            <p className={styles.desc}>{s.desc}</p>
            <div className={styles.line} />
          </div>
        ))}
      </div>
    </section>
  );
}

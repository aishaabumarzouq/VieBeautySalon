import styles from "./Hours.module.css";

const HOURS = [
  { day: "Sunday",    time: "10:00 am – 8:00 pm" },
  { day: "Monday",    time: "10:00 am – 8:00 pm" },
  { day: "Tuesday",   time: "10:00 am – 8:00 pm" },
  { day: "Wednesday", time: "10:00 am – 8:00 pm" },
  { day: "Thursday",  time: "10:00 am – 8:00 pm" },
  { day: "Friday",    time: "10:00 am – 8:00 pm" },
  { day: "Saturday",  time: "10:00 am – 8:00 pm" },
];

export default function Hours() {
  return (
    <section id="hours" className={styles.section}>
      <div className={styles.left}>
        <h2 className={styles.heading}>
          Open <em>Every Day</em>
          <br />for You
        </h2>
        <p className={styles.sub}>
          Walk-ins welcome. Appointments recommended
          <br />to guarantee your preferred time slot.
        </p>
        <a className="btn-primary" href="tel:+96599012207" style={{ marginTop: "2rem" }}>
          Call to Book: +965 9901 2207
        </a>
      </div>

      <div className={styles.table}>
        {HOURS.map(({ day, time }) => (
          <div key={day} className={styles.row}>
            <span className={styles.day}>{day}</span>
            <span className={styles.time}>{time}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

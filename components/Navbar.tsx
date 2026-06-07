"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
      <a className={styles.logo} href="#hero">
        VIE <span>·</span> BEAUTY
      </a>

      <ul className={styles.links}>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#hours">Hours</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a className={styles.cta} href="tel:+96599012207">
        Book Now
      </a>
    </nav>
  );
}

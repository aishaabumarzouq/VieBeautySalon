import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Hours from "@/components/Hours";
import Contact from "@/components/Contact";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Hours />
        <Contact />
        <MapSection />
      </main>
      <Footer />
    </>
  );
}

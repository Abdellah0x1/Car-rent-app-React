import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./About.module.css";

function About() {
  return (
    <>
      <Navbar />
      <main>
        {/* SECTION 1: HERO */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>About DriveAway</h1>
            <p>Your journey through Morocco starts here.</p>
          </div>
        </section>

        {/* SECTION 2: THE STORY */}
        <section className={styles.storySection}>
          <div className={styles.container}>
            <div className={styles.storyGrid}>
              <div className={styles.textColumn}>
                <h2>Driven by Passion, <span className={styles.highlight}>Fueled by Trust.</span></h2>
                <p>
                  DriveAway was born from a simple idea: Renting a car in Morocco should be as beautiful as the drive itself.
                </p>
                <p>
                  We noticed that finding a reliable car often meant endless phone calls, unclear pricing, and uncertainty. We decided to change that.
                </p>
                <p>
                  Today, we connect travelers with trusted local agencies across the kingdom, from the bustling streets of Casablanca to the serene roads of the Atlas Mountains.
                </p>
              </div>
              <div className={styles.imageColumn}>
                <img 
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop" 
                  alt="Traveler with car" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHY US (STATS) */}
        <section className={styles.statsSection}>
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              <div className={styles.statBox}>
                <h3>500+</h3>
                <p>Verified Cars</p>
              </div>
              <div className={styles.statBox}>
                <h3>12</h3>
                <p>Cities Covered</p>
              </div>
              <div className={styles.statBox}>
                <h3>24/7</h3>
                <p>Customer Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: CALL TO ACTION */}
        <section className={styles.ctaSection}>
          <h2>Ready to hit the road?</h2>
          <p>Find the perfect car for your next adventure.</p>
          <Link to="/fleet" className={styles.ctaBtn}>
            Browse Our Fleet
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default About;
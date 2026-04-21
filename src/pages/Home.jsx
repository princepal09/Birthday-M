import Loader from "../components/loader/Loader";
import Hero from "../components/hero/Hero";
import StarField from "../components/common/StarField";

/**
 * Home page — Landing / Intro screen.
 * Flow: Loader → Typewriter → Name Reveal → CTA Button
 */
export default function Home() {
  return (
    <main id="home-page" className="relative min-h-screen overflow-hidden">
      <StarField />
      <Loader />
      <Hero />
    </main>
  );
}

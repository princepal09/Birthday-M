import Loader from "../components/loader/Loader";
import Hero from "../components/hero/Hero";
import BackgroundMusic from "../components/common/BackgroundMusic";

export default function Home() {
  return (
    <main id="home-page" className="relative min-h-screen overflow-hidden">
      <Loader />
      <Hero />
      <BackgroundMusic />
    </main>
  );
}

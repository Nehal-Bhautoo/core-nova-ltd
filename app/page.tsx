import { About } from "./components/about";
import { Cta } from "./components/cta";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero";
import { Services } from "./components/services";
import { Solutions } from "./components/solution";

export default function Page() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <HeroSection />
        <Services />
        <Solutions />
        <About />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

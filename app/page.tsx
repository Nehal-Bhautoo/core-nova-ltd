import {
  About,
  Cta,
  Footer,
  Header,
  HeroSection,
  Services,
  Solutions,
} from "@/app/components";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <HeroSection />
      <Services />
      <Solutions />
      <About />
      <Cta />
      <Footer />
    </div>
  );
}

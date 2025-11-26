import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Performance from "@/components/sections/Performance";
import CTA from "@/components/sections/CTA";
import Ticker from "@/components/common/Ticker";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Ticker />
      <Hero />
      <Problem />
      <Solution />
      <Performance />
      <CTA />
      <Footer />
    </main>
  );
}

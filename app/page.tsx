import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PortfolioAnalyser from "@/components/PortfolioAnalyser";
import SmartTools from "@/components/SmartTools";
import Testimonials from "@/components/Testimonials";
import TrustBadges from "@/components/TrustBadges";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <SmartTools />
      <PortfolioAnalyser />
      <Testimonials />
      <FAQ />
      <TrustBadges />
      <Footer />
    </div>
  );
}

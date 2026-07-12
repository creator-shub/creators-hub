import StudioCards from "@/components/dashboard/StudioCards";
import TrustedBy from "@/components/TrustedBy";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Login from "@/components/Login";
import Platforms from "@/components/Platforms";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Statistics from "../components/Statistics";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white">

      <Navbar />
     <Features />
      <Hero />
      <Statistics />
      <Footer />
      <CTA />
      <FAQ />
      <Platforms />
      <TrustedBy />
      <Testimonials />
      <Login />

    </main>
  );
}
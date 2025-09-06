import { Suspense, lazy } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Hero from "../sections/Hero";

const SupportedVehicles = lazy(() => import("../sections/SupportedVehicles"));
const WhyChooseUs = lazy(() => import("../sections/WhyChooseUs"));
const HowWeServeYou = lazy(() => import("../sections/HowWeServeYou"));
const Testimonials = lazy(() => import("../sections/Testimonials"));
const AddToHomeScreen = lazy(() => import("../sections/AddToHomeScreen"));
const FAQ = lazy(() => import("../sections/FAQ"));
const Pricing = lazy(() => import("../sections/Pricing"));
const Contact = lazy(() => import("../sections/Contact"));

const LandingPage = () => {
  return (
    <main className="min-h-screen w-full overflow-x-hidden pt-16 md:pt-20">
      <Header />

      {/* Hero loads immediately */}
      <section id="hero">
        <Hero />
      </section>

      {/* Below-the-fold sections load lazily */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <section id="supported-vehicles">
          <SupportedVehicles />
        </section>
        <section id="why-choose-us">
          <WhyChooseUs />
        </section>
        <section id="how-we-serve-you">
          <HowWeServeYou />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="add-to-home-screen">
          <AddToHomeScreen />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </Suspense>

      <Footer />
    </main>
  );
};

export default LandingPage;

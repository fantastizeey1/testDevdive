import Footer from "../layout/Footer";
import Header from "../layout/Header";
import AddToHomeScreen from "../sections/AddToHomeScreen";
import Contact from "../sections/Contact";
import FAQ from "../sections/FAQ";
import Hero from "../sections/Hero";
import HowWeServeYou from "../sections/HowWeServeYou";
import Pricing from "../sections/Pricing";
import SupportedVehicles from "../sections/SupportedVehicles";
import Testimonials from "../sections/Testimonials";
import WhyChooseUs from "../sections/WhyChooseUs";

const LandingPage = () => {
  return (
    <main className="min-h-screen max-w-full pt-16  md:pt-20">
      <Header />
      <Hero />
      <SupportedVehicles />
      <WhyChooseUs />
      <HowWeServeYou />
      <Testimonials />
      <AddToHomeScreen />
      <FAQ />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
};

export default LandingPage;

import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Hero from "../sections/Hero";
import SupportedVehicles from "../sections/SupportedVehicles";
import WhyChooseUs from "../sections/WhyChooseUs";

const LandingPage = () => {
  return (
    <main className="min-h-screen pt-16 md:pt-20">
      <Header />
      <Hero />
      <SupportedVehicles />
      <WhyChooseUs />
      <Footer />
    </main>
  );
};

export default LandingPage;

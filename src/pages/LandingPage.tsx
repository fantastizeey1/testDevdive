import Footer from "../layout/Footer";
import Header from "../layout/Header";
import AddToHomeScreen from "../sections/AddToHomeScreen";
import Hero from "../sections/Hero";
import HowWeServeYou from "../sections/HowWeServeYou";
import SupportedVehicles from "../sections/SupportedVehicles";
import Testimonials from "../sections/Testimonials";
import WhyChooseUs from "../sections/WhyChooseUs";

const LandingPage = () => {
  return (
    <main className="min-h-screen pt-16  md:pt-20">
      <Header />
      <Hero />
      <SupportedVehicles />
      <WhyChooseUs />
      <HowWeServeYou />
      <Testimonials />
      <AddToHomeScreen />

      <Footer />
    </main>
  );
};

export default LandingPage;

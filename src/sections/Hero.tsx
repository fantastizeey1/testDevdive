import { Container } from "../components/Container";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden text-white bg-[#00265F] min-h-[600px] flex items-center pt-24 pb-20">
      {/* Background for Desktop (full image) */}
      <div
        className="
          hidden lg:block absolute inset-0 
          bg-cover bg-center bg-no-repeat
          bg-[url('/bridge.png')]
        "
        style={{ backgroundBlendMode: "overlay" }}
      ></div>

      {/* Background for Mobile/Tablet (only bottom half) */}
      <div
        className="
          block lg:hidden absolute bottom-0 left-0 right-0 h-1/2
          bg-cover bg-center bg-no-repeat
          bg-[url('/bridge.png')]
        "
        style={{ backgroundBlendMode: "overlay" }}
      ></div>

      {/* Overlay tint */}
      <div className="absolute inset-0 bg-[#00265F]/70"></div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="xl:text-[90px] md:text-6xl text-4xl font-bold mb-6">
            Renew Your Vehicle Papers Online
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Skip the long queues and renew your vehicle documents from the
            comfort of your home. Fast, secure, and hassle-free service with
            complete paperwork assistance.
          </p>
          <Button size="lg" className="bg-[#0065FF] py-2 px-4 rounded-md">
            Get Started
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;

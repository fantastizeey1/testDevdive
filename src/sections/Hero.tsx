import { Container } from "../components/Container";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className=" w-full relative overflow-hidden overflow-x-hidden text-white bg-[#00265F] min-h-[700px] flex items-center pt-24 pb-20">
      {/* Background Video for Desktop (full video) */}
      <video
        className="hidden lg:block absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/bridge.mp4" type="video/mp4" />
        <source src="/bridge.webm" type="video/webm" />
        {/* Fallback image for browsers that don't support video */}
        <img
          src="/bridge.png"
          alt="Bridge background"
          className="w-full h-full object-cover"
        />
      </video>

      {/* Background Video for Mobile/Tablet (only bottom half) */}
      <video
        className="block lg:hidden absolute bottom-0 left-0 right-0 h-1/2 w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/bridge.mp4" type="video/mp4" />
        <source src="/bridge.webm" type="video/webm" />
        {/* Fallback image for mobile */}
        <img
          src="/bridge.png"
          alt="Bridge background"
          className="w-full h-full object-cover"
        />
      </video>

      {/* Overlay tint */}
      <div className="absolute inset-0 bg-[#00265F]/70"></div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto -mt-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[90px] font-bold mb-6 leading-tight">
            Renew Your Vehicle Papers Online
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-blue-100 max-w-lg mx-auto">
            Skip the long queues and renew your vehicle documents from the
            comfort of your home. Fast, secure, and hassle-free service with
            complete paperwork assistance.
          </p>
          <Button
            size="lg"
            className="bg-[#0065FF] hover:bg-[#0056E0] transition-colors py-3 px-6 rounded-md"
          >
            Get Started
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;

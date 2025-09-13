import Button from "../components/Button";
import { Container } from "../components/Container";

const Pricing = () => {
  return (
    <section className="bg-[#fffbef]">
      <Container className="flex flex-col lg:flex-row w-full items-start lg:items-center justify-between gap-8 lg:gap-20 py-12 sm:py-16 lg:py-20">
        {/* Heading */}
        <h1 className="w-full lg:max-w-xl text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-black">
          Competitive prices made for you.
        </h1>

        {/* Description + Button */}
        <div className="flex flex-col items-start gap-6 flex-1">
          <p className="text-[#333333] text-base sm:text-lg leading-relaxed max-w-2xl">
            Lorem ipsum dolor sit amet consectetur. Tortor ipsum turpis blandit
            a congue platea tristique tellus. Lacus amet viverra gravida amet.
            Risus sed quis molestie ac turpis in nunc. Metus augue molestie
            elementum pharetra. Posuere id pellentesque consectetur dolor
          </p>

          <Button className="px-6 py-3 bg-[#0065ff] rounded-lg text-white text-base sm:text-lg font-medium hover:bg-[#0052cc] transition-colors">
            Check Estimate
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;

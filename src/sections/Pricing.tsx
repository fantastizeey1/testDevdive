import Button from "../components/Button";

const Pricing = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full items-start lg:items-center justify-between gap-8 lg:gap-20 px-6 sm:px-12 lg:px-24 py-12 sm:py-16 lg:py-20 bg-[#fffbef]">
      {/* Heading */}
      <h1 className="w-full lg:max-w-xl font-bold text-5xl text-left sm:text-6xl lg:text-5xl text-black leading-tight  lg:text-left">
        Competitive prices made for you.
      </h1>

      {/* Description + Button */}
      <div className="flex flex-col items-start lg:items-start gap-6 flex-1">
        <p className="text-[#333333] text-base sm:text-lg leading-6 sm:leading-7 text-left lg:text-left max-w-2xl">
          Lorem ipsum dolor sit amet consectetur. Tortor ipsum turpis blandit a
          congue platea tristique tellus. Lacus amet viverra gravida amet. Risus
          sed quis molestie ac turpis in nunc. Metus augue molestie elementum
          pharetra. Posuere id pellentesque consectetur dolor
        </p>

        <Button className="inline-flex items-left justify-left px-6 py-3 bg-[#0065ff] rounded-lg text-white text-base sm:text-lg font-medium hover:bg-[#0052cc] transition-colors">
          Check Estimate
        </Button>
      </div>
    </section>
  );
};

export default Pricing;

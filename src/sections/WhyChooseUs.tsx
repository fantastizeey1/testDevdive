import { Card, CardContent } from "../components/Card";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Convenience",
      description:
        "No more taking time off work or waiting in long queues. Access our platform 24/7 from any device.",
    },
    {
      title: "Fast and Secure",
      description:
        "Enjoy a seamless, reliable, and secure experience every time you use our platform.",
    },
    {
      title: "Trusted by Thousands",
      description:
        "We’ve helped thousands of customers simplify their processes and save time.",
    },
    {
      title: "Transparent Pricing",
      description:
        "No hidden fees — our pricing is clear and upfront, so you know what to expect.",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-12 pt-12 pb-24 px-4 md:px-8 relative">
      {/* Heading */}
      <h2 className="text-h1 text-[48px] font-heading font-bold text-black text-center">
        Why Choose Us
      </h2>

      {/* Feature Cards */}
      <div className="flex flex-wrap justify-center max-w-6xl   relative">
        {features.map((feature, index) => (
          <Card
            key={index}
            className={`group relative flex flex-col items-start gap-6 p-6 md:p-8 w-[280px] h-[320px] rounded-xl border border-white shadow-xl transform transition-all duration-500 ease-out -rotate-2
              hover:-translate-y-1/6 hover:bg-[#fafaef] hover:shadow-2xl`}
          >
            <CardContent className="p-0 w-full">
              {/* Icon */}
              <img
                src="/checkmark.svg"
                className="w-10 h-10 mb-6 rotate-2 transition-transform duration-500 group-hover:rotate-0"
                alt="checkmark"
              />

              {/* Text */}
              <div className="flex flex-col gap-3">
                <h3 className="font-sans font-bold text-xl text-black leading-snug">
                  {feature.title}
                </h3>
                <p className="font-sans text-base text-[#2d2d2d] leading-6">
                  {feature.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;

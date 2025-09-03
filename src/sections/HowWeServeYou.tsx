import Button from "../components/Button";

export const HowWeServeYou = () => {
  //   const steps = [
  //     {
  //       icon: "/icons/how-we-serve.svg",
  //       title: "Create an Account",
  //       description: "Sign up with your email and vehicle details.",
  //       position: "top-[61px] left-[20px] lg:top-[61px] lg:left-[648px]",
  //       rotation: "rotate-[-15deg]",
  //       iconRotation: "rotate-[15deg]",
  //       iconSize: "w-[48.99px] h-[48.99px]",
  //       iconMargin: "ml-[-4.49px]",
  //     },
  //     {
  //       icon: "/icons/how-we-serve.svg",
  //       title: "Verify Your Details",
  //       description: "Secure your account with simple verification.",
  //       position: "top-[170px] left-[20px] lg:top-[170px] lg:left-[674px]",
  //       rotation: "rotate-[-7.98deg]",
  //       iconRotation: "rotate-[7.98deg]",
  //       iconSize: "w-[45.17px] h-[45.17px]",
  //       iconMargin: "ml-[-2.58px]",
  //     },
  //     {
  //       icon: "/icons/how-we-serve.svg",
  //       title: "Add Your Vehicle",
  //       description: "Register your vehicle information in a few steps.",
  //       position: "top-[263px] left-[20px] lg:top-[263px] lg:left-[674px]",
  //       rotation: "",
  //       iconRotation: "",
  //       iconSize: "w-10 h-10",
  //       iconMargin: "",
  //     },
  //     {
  //       icon: "/icons/how-we-serve.svg",
  //       title: "Get Matched",
  //       description: "We connect you with services tailored to your needs.",
  //       position: "top-[368px] left-[20px] lg:top-[368px] lg:left-[679px]",
  //       rotation: "rotate-[6.28deg]",
  //       iconRotation: "rotate-[-6.28deg]",
  //       iconSize: "w-[44.14px] h-[44.14px]",
  //       iconMargin: "ml-[-2.07px]",
  //     },
  //     {
  //       icon: "/icons/how-we-serve.svg",
  //       title: "Enjoy the Service",
  //       description: "Start experiencing seamless vehicle support.",
  //       position: "top-[464px] left-[20px] lg:top-[464px] lg:left-[655px]",
  //       rotation: "rotate-[15deg]",
  //       iconRotation: "rotate-[-15deg]",
  //       iconSize: "w-[48.99px] h-[48.99px]",
  //       iconMargin: "ml-[-4.49px]",
  //     },
  //   ];

  return (
    <div className="w-full bg-[#003e9c]">
      <section className="w-full bg-[#003e9c]  px-8 pt-12 pb-24 md:pb-4  flex flex-col lg:flex-row items-start gap-12 h-screen md:h-[150%] lg:h-[600px] relative lg:px-[150px] mx-auto max-w-[1440px]">
        {/* Left Content */}
        <div
          className="flex flex-col md:justify-between md:flex-row lg:flex-col 
                      w-full lg:w-[406px] items-start gap-8 relative z-10"
        >
          <h2 className="lg:text-h1 text-[40px] md:text-[56px] text-white">
            How We <br /> Serve You
          </h2>

          <img
            src="/arrow.svg"
            alt="arrow"
            className="absolute top-[355px] left-[15px] md:top-[255px] md:left-[15px] lg:top-[135px] lg:left-[205px] w-[150px] "
          />

          <div className="w-full md:w-[40%] lg:mt-36 lg:w-full">
            <p className="text-body-main mb-5 text-white">
              Lorem ipsum dolor sit amet consectetur. Tortor ipsum turpis
              blandit a congue platea tristique tellus. Lacus amet viverra
              gravida amet. Risus sed quis molestie ac turpis in nunc. Metus
              augue molestie elementum pharetra. Posuere id pellentesque
              consectetur dolor
            </p>
            <Button className="px-6 py-3 bg-button rounded-lg text-body-button text-white">
              Get Started
            </Button>
          </div>
        </div>

        {/* Steps Image */}
        <div className="flex-1 xl:w-[50%] relative flex justify-center lg:justify-start">
          <img
            src="/Frame.png"
            alt="steps"
            className="w-full max-w-[650px] 
              mt-6 md:mt-8 lg:mt-0 h-auto lg:h-[660px] lg:absolute lg:left-[96px] lg:-top-18"
          />
        </div>

        {/* Steps container */}
        {/* <div className="relative flex-1 h-[700px] w-full lg:w-[650px]">
        {steps.map((step, index) => (
          <Card
            key={index}
            className={`absolute w-[90%] max-w-[612px] h-[85px] 
        items-center gap-6 px-6 py-4 
        bg-white/80 rounded-lg shadow-md backdrop-blur-[6px]
        ${step.position} ${step.rotation}`}
          >
            <CardContent className="p-0 flex items-center gap-6 w-full">
              <img
                className={`relative ${step.iconSize} ${step.iconMargin} ${step.iconRotation}`}
                alt="Icon"
                src={step.icon}
              />
              <div className="flex flex-col items-start gap-0.5 flex-1">
                <h3 className="text-h6 text-black">{step.title}</h3>
                <p className="text-body-small text-[#333333]">
                  {step.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div> */}
      </section>
    </div>
  );
};

export default HowWeServeYou;

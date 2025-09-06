import Button from "../components/Button";

const AddToHomeScreen = () => {
  return (
    <section className="relative w-full h-[501px] bg-black overflow-hidden">
      {/* Background image */}
      <img
        src="/Group-left.svg"
        alt="Background pattern"
        className="absolute inset-0  "
      />
      <img
        src="/Group-right.svg"
        alt="Isometric view"
        className="absolute bottom-0 right-0 "
      />
      <img
        src="/g1.svg"
        alt="Isometric view"
        className="absolute md:left-[35%] bottom-0 z-30"
      />
      <img
        src="/Left view.png"
        alt="Isometric view"
        className="absolute bottom-6 left-[50%] "
      />{" "}
      <img
        src="/Right view.png"
        alt="Isometric view"
        className="absolute bottom-6 right-[50%] "
      />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-6 px-6 py-12">
        <h1 className="text-h1 text-white">Add to Home Screen</h1>

        <p className="text-body-main text-white max-w-xl">
          Lorem ipsum dolor sit amet consectetur. Fermentum sed nisl amet ornare
          mauris tellus. Gravida aliquam iaculis dictum a feugiat malesuada mi
          turpis. Eu magna id.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button className="px-6 py-3 bg-[#0065ff] hover:bg-[#0052cc] rounded-lg">
            <span className="text-body-button text-white">Get Started Now</span>
          </Button>

          <Button
            variant="secondary"
            className="px-6 py-3 bg-[#e6f0ff] hover:bg-[#d1e7ff] rounded-lg"
          >
            <span className="text-body-button text-[#0065ff]">
              Add To Home Screen
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AddToHomeScreen;

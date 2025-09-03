import { Card, CardContent } from "../components/Card";

const vehicleCategories = [
  {
    id: "motorcycles",
    title: "Motorcycles",
    description:
      "Lorem ipsum dolor sit amet consectetur. Fermentum sed nisl amet ornare mauris tellus. Gravida aliquam iaculis dictum a feugiat malesuada mi turpis. Eu magna id.",
    icon: "/icons/bike-icon.svg",
    image: "/bike.png",
    imagePosition: "left",
  },
  {
    id: "cars",
    title: "Cars",
    description:
      "Lorem ipsum dolor sit amet consectetur. Fermentum sed nisl amet ornare mauris tellus. Gravida aliquam iaculis dictum a feugiat malesuada mi turpis. Eu magna id.",
    icon: "/icons/car-icon.svg",
    image: "/car.png",
    imagePosition: "right",
  },
  {
    id: "trucks",
    title: "Trucks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Fermentum sed nisl amet ornare mauris tellus. Gravida aliquam iaculis dictum a feugiat malesuada mi turpis. Eu magna id.",
    icon: "/icons/truck-icon.svg",
    image: "/truck.png",
    imagePosition: "left",
  },
];

const SupportedVehicles = () => {
  return (
    <section className="flex flex-col w-full items-start gap-8 pt-24 px-4 md:px-10 xl:px-[157px] pb-12 relative">
      {/* Heading */}
      <h2 className="text-h1 font-heading font-bold text-black tracking-tight leading-[1.1]">
        Supported Vehicles
      </h2>

      {/* Categories */}
      <div className="flex flex-col gap-8 w-full">
        {vehicleCategories.map((category) => (
          <div
            key={category.id}
            className={`flex flex-col md:flex-row items-center gap-6 w-full ${
              category.imagePosition === "right" ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="flex-[2] w-full h-auto md:h-[366px] rounded-3xl bg-neutral-50 flex items-center justify-center">
              <img
                className="max-h-full max-w-full object-contain"
                alt={category.title}
                src={category.image}
              />
            </div>

            {/* Text Card */}
            <Card className="flex flex-col flex-[1] w-full h-auto md:h-[366px] justify-center gap-4 p-6 md:p-8 bg-neutral-50 rounded-3xl border-0">
              <CardContent className="flex flex-col gap-6 p-0">
                <div className="flex flex-col gap-2 w-fit">
                  <img
                    src={category.icon}
                    alt={`${category.title} icon`}
                    className="w-10 h-8"
                  />
                  <div className="font-sans font-bold text-2xl text-black">
                    {category.title}
                  </div>
                </div>
                <p className="font-sans text-body-main text-[#333] leading-6">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportedVehicles;

import { StarIcon } from "lucide-react";
import React from "react";
import { Separator } from "../components/separator";
import { Card, CardContent } from "../components/Card";

const Testimonials = () => {
  const testimonials = [
    {
      rating: 5,
      quote:
        "I renewed my car papers in less than 10 minutes. The process was smooth and stress-free. Highly recommended!",
      author: "- JD Jakes",
      vehicle: "Honda Accord, 2028",
    },
    {
      rating: 5,
      quote:
        "Great customer service and very fast process. I’ll definitely use this again!",
      author: "- Anita Bose",
      vehicle: "Toyota Camry, 2021",
    },
    {
      rating: 5,
      quote:
        "Super easy platform. Everything was clear and transparent from start to finish.",
      author: "- John Smith",
      vehicle: "Lexus RX350, 2023",
    },
    {
      rating: 5,
      quote:
        "Honestly the best way I’ve ever renewed papers. No queues, no stress.",
      author: "- Amina Yusuf",
      vehicle: "Mercedes C-Class, 2022",
    },
  ];

  const renderStars = (rating: number) => (
    <div className="flex gap-1">
      {Array.from({ length: rating }, (_, index) => (
        <StarIcon
          key={index}
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />
      ))}
    </div>
  );

  // Duplicate testimonials for infinite loop
  const looped = [...testimonials, ...testimonials];

  return (
    <section className="w-full py-[50px] px-4 md:px-20 overflow-hidden">
      <div className="flex flex-col items-start gap-8">
        {/* Heading + Intro */}
        <header className="flex flex-col items-start justify-center gap-2.5 max-w-2xl">
          <h1 className="md:text-h1 leading-14 font-bold text-[50px]  text-black">
            What Our Customers Are Saying
          </h1>
          <p className="text-body-main text-[#333333]">
            Lorem ipsum dolor sit amet consectetur. Tortor ipsum turpis blandit
            a congue platea tristique tellus. Lacus amet viverra gravida amet.
            Risus sed quis molestie ac turpis in.
          </p>
        </header>

        {/* Infinite Scrolling Testimonials with Separators */}
        <div
          className="flex w-max animate-[marquee_25s_linear_infinite]"
          style={{ "--gap": "2rem" } as React.CSSProperties}
        >
          {looped.map((testimonial, index) => (
            <React.Fragment key={index}>
              <Card className="flex-shrink-0 w-[296px] border-none  bg-white/90 rounded-xl backdrop-none shadow-none mx-4">
                <CardContent className="flex flex-col items-start gap-4 p-4">
                  {renderStars(testimonial.rating)}

                  <blockquote className="text-body-big text-black">
                    {testimonial.quote}
                  </blockquote>

                  <div className="flex flex-col items-start gap-1">
                    <cite className="text-body-small text-black not-italic">
                      {testimonial.author}
                    </cite>
                    <span className="text-body-caption text-[#545454]">
                      {testimonial.vehicle}
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Add separator between cards */}
              {index < looped.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="h-[203px] bg-[#ebedf0] my-auto"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

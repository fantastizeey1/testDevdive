import React from "react";
import { Card, CardContent } from "../components/Card";
import Button from "../components/Button";
import { Separator } from "../components/separator";
import { Input } from "../components/Input";
import { Textarea } from "../components/textarea";

const Contact = () => {
  const contactOptions = [
    {
      title: "Wanna Chat?",
      description:
        "Connect with us on WhatsApp, we look forward to your message.",
      buttonText: "Chat With Us",
      buttonAction: "chat",
    },
    {
      title: "Wanna Call?",
      description:
        "You can reach us through our hot line. We would love to hear from you.",
      buttonText: "+23480300011145",
      buttonAction: "call",
    },
  ];

  const formFields = [
    { placeholder: "Name", type: "text" },
    { placeholder: "Last name", type: "text" },
    { placeholder: "Email address", type: "email" },
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full items-start lg:items-center justify-center gap-12 lg:gap-20 px-6 sm:px-12 md:px-[107px] lg:px-20 py-12 sm:py-16 lg:py-24 relative">
      {/* Left Contact Options */}
      <Card className="w-full  bg-[#FAFAFA] rounded-2xl shadow-non border-0">
        <CardContent className="flex flex-col items-start justify-start gap-6 px-6 sm:px-10 py-10 sm:py-16 h-full">
          <h1 className="font-headings-h1 text-[48px] text-black font-bold text-left sm:text-left">
            Contact Us
          </h1>

          <div className="flex flex-col items-start gap-6 w-full">
            {contactOptions.map((option, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-start gap-4 p-6 w-full rounded-2xl shadow-none">
                  <div className="flex flex-col items-start gap-3 w-full">
                    <div className="font-bold text-black text-base">
                      {option.title}
                    </div>
                    <div className="text-sm text-[#333333]">
                      {option.description}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="h-auto inline-flex px-6 py-3 bg-[#e6f0ff] items-center justify-center rounded-lg hover:bg-[#e6f0ff]/80"
                  >
                    <div
                      className={`${
                        option.buttonAction === "chat"
                          ? "font-body-button"
                          : "font-ios-body-emphasized"
                      } text-[#0065ff] whitespace-nowrap`}
                    >
                      {option.buttonText}
                    </div>
                  </Button>
                </div>

                {index === 0 && (
                  <Separator className="w-1/2 sm:block lg:w-full h-[1px]  bg-[#5E5E5E]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Right Form */}
      <div className="flex flex-col w-full max-w-xl items-start gap-8">
        <div className="flex flex-col items-start gap-4 w-full">
          <h2 className="font-headings-h1 text-[38px] text-black font-bold text-left sm:text-left">
            Send Us A Message
          </h2>
          <p className="font-body-main-body text-[#333333]">
            Or you can leave us a message, we will get back to you within 24
            hours.
          </p>
        </div>

        <form className="flex flex-col items-start gap-4 w-full">
          {formFields.map((field, index) => (
            <Input
              key={index}
              type={field.type}
              placeholder={field.placeholder}
              className="h-[58px] w-full bg-white rounded-lg border border-[#545454]/60 px-4 text-[#333333] font-body-main-body"
            />
          ))}

          <Textarea
            placeholder="Type your message here"
            className="h-40 w-full bg-white rounded-lg border border-[#545454]/60 p-4 text-[#333333] font-body-main-body resize-none"
          />
        </form>

        <Button className="w-full px-6 py-3 bg-[#0065ff] text-white rounded-lg hover:bg-[#0065ff]/90">
          <span className="font-body-button">Send Message</span>
        </Button>
      </div>
    </div>
  );
};

export default Contact;

import Button from "../components/Button";
import { Input } from "../components/Input";
import { Separator } from "../components/separator";

const footerLinks = {
  product: ["How it works", "Testimonials", "Why Choose Us", "Delivery"],
  information: ["Privacy policy", "Terms and conditions", "Support", "FAQ"],
  contact: ["support@Renewly.com", "Instagram", "Twitter", "Facebook"],
};

const Footer = () => {
  return (
    <footer className="flex flex-col w-full items-center justify-center gap-10 pt-[50px] pb-5 px-6 sm:px-12 lg:px-[150px] bg-[#f2f2f2] rounded-[24px_24px_0px_0px] overflow-hidden">
      <div className="flex flex-col w-full max-w-[1190px] gap-20">
        {/* Newsletter */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col items-start gap-2">
            <h2 className="font-headings-h6 text-black">
              Subscribe to our Newsletter
            </h2>
            <p className="font-body-main-body text-[#333333]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="flex items-center gap-5 w-full md:w-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-[266px] px-4 py-0 bg-white border border-[#545454]/50 font-body-main-body text-[#333333]"
            />
            <Button
              aria-label="Subscribe"
              className="px-6 h-12 bg-black text-white font-body-button rounded-lg hover:bg-[#222]"
            >
              Subscribe
            </Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo + Description */}
          <div className="flex flex-col items-start gap-5">
            <img
              className="w-[206px] h-10"
              src="/logob.svg"
              alt="Renewly Logo"
            />
            <p className="font-body-main-body text-[#333333]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <Button className="px-6 py-3 bg-[#ec5730] text-white font-body-button rounded-lg hover:bg-[#d24e2b]">
              Add To Homescreen
            </Button>
          </div>

          {/* Product Links */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-body-bold-body text-black">Product</h3>
            {footerLinks.product.map((link, index) => (
              <a
                key={index}
                href="#"
                className="font-body-main-body text-[#333333] hover:text-black transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Information Links */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-body-bold-body text-black">Information</h3>
            {footerLinks.information.map((link, index) => (
              <a
                key={index}
                href="#"
                className="font-body-main-body text-[#333333] hover:text-black transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Contact Links */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-body-bold-body text-black">Contact</h3>
            {footerLinks.contact.map((link, index) => (
              <a
                key={index}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body-main-body text-[#333333] hover:text-black transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col w-full max-w-[1284px] items-center gap-4">
        <Separator className="w-full h-px bg-[#b0b0b0]" />
        <div className="flex flex-wrap items-center justify-center gap-1 text-center">
          <img
            className="w-[18px] h-[18px]"
            src="/copyright.svg"
            alt="Copyright"
          />
          <span className="font-body-small-body text-[#545454]">
            Renewly.com...
          </span>
          <span className="font-body-small-body text-[#545454]">
            All Rights Reserved, 2025.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

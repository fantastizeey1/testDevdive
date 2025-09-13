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
    <footer className="flex flex-col w-full items-center justify-center gap-10 pt-[50px] pb-5 px-6 sm:px-12 xl:px-[150px] bg-[#f2f2f2] rounded-t-3xl overflow-hidden">
      <div className="flex flex-col w-full max-w-[1350px] gap-20">
        {/* Newsletter */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-2xl font-bold text-black">
              Subscribe to our Newsletter
            </h2>
            <p className="text-[#333333] text-base leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-[266px] px-4 py-3 bg-white border border-[#545454]/50 text-[#333333] rounded-lg"
            />
            <Button
              aria-label="Subscribe"
              className="px-6 h-12 bg-black text-white rounded-lg hover:bg-[#222]"
            >
              Subscribe
            </Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo + Description */}
          <div className="md:col-span-4 lg:col-span-1 flex flex-col items-start gap-5">
            <img
              className="w-[206px] h-10"
              src="/logob.svg"
              alt="Renewly Logo"
            />
            <p className="text-[#333333] text-base md:w-1/2 lg:w-full leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <Button className="xl:px-6 xl:py-3 px-4 py-2 bg-[#ec5730] text-white rounded-lg hover:bg-[#d24e2b]">
              Add To Homescreen
            </Button>
          </div>

          {/* Three link columns side by side at md */}
          <div className="md:col-span-4 lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Product Links */}
            <div className="flex flex-col items-start gap-4">
              <h3 className="font-semibold text-black">Product</h3>
              {footerLinks.product.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-[#333333] hover:text-black transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Information Links */}
            <div className="flex flex-col items-start gap-4">
              <h3 className="font-semibold text-black">Information</h3>
              {footerLinks.information.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-[#333333] hover:text-black transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Contact Links */}
            <div className="flex flex-col items-start gap-4">
              <h3 className="font-semibold text-black">Contact</h3>
              {footerLinks.contact.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#333333] hover:text-black transition-colors"
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
            <span className="text-[#545454] text-sm">Renewly.com...</span>
            <span className="text-[#545454] text-sm">
              All Rights Reserved, 2025.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

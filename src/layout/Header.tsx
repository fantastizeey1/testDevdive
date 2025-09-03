import { useState } from "react";
import Button from "../components/Button";
import { X } from "lucide-react";
import { Container } from "../components/Container";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#00265F] py-1 fixed w-full top-0 z-50">
      <Container>
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.svg" alt="logo" />
          </div>

          {/* Desktop Nav (lg and up only) */}
          <nav className="hidden lg:flex items-center space-x-8 text-white">
            <a href="#services">Services</a>
            <a href="#vehicles">Vehicles</a>
            <a href="#process">How it Works</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* Buttons - visible on md and up */}
          <div className="hidden md:flex items-center relative space-x-[6px]">
            <div className="bg-white p-[6px] rounded-xl">
              <Button
                className="bg-white py-1 px-3
               text-button shadow-none hover:bg-white hover:shadow-none"
              >
                Check Estimate
              </Button>
            </div>
            <img
              src="/join.svg"
              alt="join vector"
              className="w-20 h-10 absolute left-[110px] "
            />
            <div className="bg-white p-[6px] rounded-xl">
              <Button className="text-white py-1 px-3 bg-button">
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle (only < md) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <img src="/icons/menu.svg" alt="menu" className="w-6 h-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu (only < md) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <Container className="h-screen">
            <div className="flex flex-col justify-between h-[80vh] py-6">
              <nav className="py-4 space-y-3">
                <a href="#services" className="block py-2 text-gray-700">
                  Services
                </a>
                <a href="#vehicles" className="block py-2 text-gray-700">
                  Vehicles
                </a>
                <a href="#process" className="block py-2 text-gray-700">
                  How it Works
                </a>
                <a href="#pricing" className="block py-2 text-gray-700">
                  Pricing
                </a>
                <a href="#contact" className="block py-2 text-gray-700">
                  Contact
                </a>
              </nav>
              <div className=" flex flex-row pt-4 space-x-7 itenc-center">
                <div className="bg-white border-2 border-blue-600 p-[6px] rounded-xl">
                  <Button
                    className="bg-white py-1 px-3
               text-blue-600 shadow-none hover:bg-white hover:shadow-none"
                  >
                    Check Estimate
                  </Button>
                </div>

                <Button className="text-white rounded-xl py-1 px-5 bg-button">
                  Get Started
                </Button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;

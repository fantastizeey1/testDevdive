import { useState } from "react";
import Button from "../components/Button";
import { X } from "lucide-react";
import { Container } from "../components/Container";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-blue shadow-sm fixed w-full top-0 z-50">
      <Container>
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center">
            <img src="/logo.svg" alt="logo" />
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-white">
            <a href="#services">Services</a>
            <a href="#vehicles">Vehicles</a>
            <a href="#process">How it Works</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="hidden md:flex items-center relative space-x-4">
            <div className="bg-white p-2 rounded-2xl">
              <Button className="bg-white text-blue-600 shadow-none hover:bg-white hover:shadow-none">
                Check Estimate
              </Button>
            </div>
            <img
              src="/join.svg"
              alt="join vector"
              className="w-20 h-12 absolute left-[143px] top-2"
            />
            <div className="bg-white p-2 rounded-2xl">
              <Button className="text-white bg-blue-600 px-6 py-2">
                Get Started
              </Button>
            </div>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <img src="/menu.svg" alt="menu" className="w-6 h-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <Container>
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
              <div className="pt-4 space-y-2">
                <Button variant="outline" size="sm" className="w-full">
                  Sign In
                </Button>
                <Button size="sm" className="w-full">
                  Get Started
                </Button>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;

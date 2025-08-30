import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { Container } from "../components/Container";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-3">
              <img src="/logo.svg" alt="logo" />
            </div>
            <p className="text-gray-400">
              Your trusted partner for vehicle document renewal services.
            </p>
            <div className="flex space-x-3 mt-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-400" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-blue-400" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-blue-400" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-blue-400" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  License Renewal
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Registration
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Insurance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Permits
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" /> +234 123 456 7890
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" /> support@renewly.com
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" /> Lagos, Nigeria
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 Renewly. All rights reserved. | Privacy Policy | Terms
            of Service
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

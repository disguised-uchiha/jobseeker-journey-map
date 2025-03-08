
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Send, MapPin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="hr-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo variant="light" />
            <p className="text-gray-400 mt-4 text-sm">
              We are recruitment agency that help you
              find more talents to develop business
            </p>
            <div className="flex items-center mt-6">
              <Input
                type="email"
                placeholder="Enter email"
                className="rounded-r-none bg-gray-800 border-gray-700 text-white"
              />
              <Button
                type="submit"
                size="icon"
                className="rounded-l-none bg-gray-800 border border-gray-700 hover:bg-gray-700"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">/Core</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/jobs" className="text-gray-400 hover:text-white transition-colors">
                  Jobs
                </Link>
              </li>
              <li>
                <Link to="/for-companies" className="text-gray-400 hover:text-white transition-colors">
                  For Companies
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-gray-400 hover:text-white transition-colors">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400">
              <div className="flex items-start mb-2">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <p>
                  Flat No. 204, "Shanti Nilaya" Apartments, 12th Cross, Model Colony, Indiranagar, Bengaluru - 560038
                </p>
              </div>
            </address>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800">
        <div className="hr-container py-6">
          <p className="text-gray-400 text-sm text-center">
            Copyright © {new Date().getFullYear()} HR Stream. All right reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

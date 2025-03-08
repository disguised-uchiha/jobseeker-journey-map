
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/Logo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="hr-container flex items-center justify-between">
        <Logo variant={isScrolled ? "dark" : "dark"} />

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/") ? "text-primary" : "text-gray-700"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/about-us") ? "text-primary" : "text-gray-700"
            }`}
          >
            About Us
          </Link>
          <Link
            to="/for-companies"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/for-companies") ? "text-primary" : "text-gray-700"
            }`}
          >
            For Companies
          </Link>
          <Link
            to="/jobs"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/jobs") ? "text-primary" : "text-gray-700"
            }`}
          >
            /Jobs
          </Link>
          <Link
            to="/contact-us"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/contact-us") ? "text-primary" : "text-gray-700"
            }`}
          >
            Contact Us
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button
            className="bg-gray-900 hover:bg-black text-white rounded-full"
            asChild
          >
            <a href="mailto:info@hrstreams.com">Login/Register</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-slide-down">
          <div className="hr-container py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-base font-medium transition-colors hover:text-primary ${
                  isActive("/") ? "text-primary" : "text-gray-700"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className={`text-base font-medium transition-colors hover:text-primary ${
                  isActive("/about-us") ? "text-primary" : "text-gray-700"
                }`}
              >
                About Us
              </Link>
              <Link
                to="/for-companies"
                className={`text-base font-medium transition-colors hover:text-primary ${
                  isActive("/for-companies") ? "text-primary" : "text-gray-700"
                }`}
              >
                For Companies
              </Link>
              <Link
                to="/jobs"
                className={`text-base font-medium transition-colors hover:text-primary ${
                  isActive("/jobs") ? "text-primary" : "text-gray-700"
                }`}
              >
                /Jobs
              </Link>
              <Link
                to="/contact-us"
                className={`text-base font-medium transition-colors hover:text-primary ${
                  isActive("/contact-us") ? "text-primary" : "text-gray-700"
                }`}
              >
                Contact Us
              </Link>
            </nav>
            <Button
              className="w-full bg-gray-900 hover:bg-black text-white rounded-full"
              asChild
            >
              <a href="mailto:info@hrstreams.com">Login/Register</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

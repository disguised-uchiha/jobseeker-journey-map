import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "dark" | "light";
}

export const Logo = ({ variant = "dark" }: LogoProps) => {
  return (
    <Link 
      to="/" 
      className="flex items-center space-x-2 transition-transform duration-300 transform hover:scale-105"
    >
      <img 
        src="./HR-Streams-logo.svg" 
        alt="HR Streams Logo"
        className={`h-12 w-auto ${variant === 'light' ? 'brightness-0 invert' : ''}`}
      />
    </Link>
  );
};

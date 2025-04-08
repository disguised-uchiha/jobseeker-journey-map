
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
      <div className="relative">
        <svg width="40" height="30" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M10 30C10 30 20 20 40 20C60 20 70 30 90 30C110 30 120 20 120 20" 
            stroke={variant === "dark" ? "#3054f2" : "#ffffff"} 
            strokeWidth="5"
            className="animate-[wave_5s_ease-in-out_infinite]"
          />
          <path 
            d="M0 40C0 40 10 30 30 30C50 30 60 40 80 40C100 40 110 30 110 30" 
            stroke={variant === "dark" ? "#4b79dd" : "#ffffff"} 
            strokeWidth="5"
            className="animate-[wave_5s_ease-in-out_infinite]"
            style={{ animationDelay: "0.5s" }}
          />
        </svg>
      </div>
      <div className="font-bold text-2xl">
        <span className={variant === "dark" ? "text-gray-900" : "text-white"}>HR</span>
        <span className="text-primary"> STREAM</span>
      </div>
      <div className="text-xs text-gray-600 mt-1">TALENT ACQUISITION PARTNER</div>
    </Link>
  );
};

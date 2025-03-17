
import { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useJob } from "@/context/JobContext";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  showButton?: boolean;
  onSearch?: (value: string) => void;
  redirectToJobs?: boolean;
  variant?: "primary" | "white";
  value?: string;
}

export const SearchBar = ({
  placeholder = "Enter Designation/Skills",
  className = "",
  showButton = true,
  onSearch,
  redirectToJobs = true,
  variant = "white",
  value = "",
}: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState(value);
  const navigate = useNavigate();
  const { setFilters } = useJob();

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm);
    }

    if (redirectToJobs) {
      setFilters((prev) => ({ ...prev, search: searchTerm }));
      navigate("/jobs");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={`flex w-full max-w-xl ${className}`}>
      <div className="relative w-full">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={`w-full px-4 py-3 ${
            showButton ? "rounded-l-md" : "rounded-md"
          } border ${
            variant === "white" ? "bg-white" : "bg-gray-50"
          } focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 pr-10 h-full`}
        />
        {!showButton && (
          <div 
            className="absolute top-0 right-0 h-full flex items-center pr-3 cursor-pointer"
            onClick={handleSearch}
          >
            <Search className="h-5 w-5 text-gray-400" />
          </div>
        )}
      </div>
      {showButton && (
        <Button
          type="button"
          onClick={handleSearch}
          className={`px-6 rounded-l-none h-auto ${
            variant === "white" ? "bg-primary" : "bg-primary"
          } text-white hover:bg-primary-700 transition-all duration-200`}
        >
          Search
        </Button>
      )}
    </div>
  );
};

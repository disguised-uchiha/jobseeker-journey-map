
import { Button } from "@/components/ui/button";
import { useJob } from "@/context/JobContext";

export const NoResults = () => {
  const { resetFilters } = useJob();
  
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-60 h-60 mb-6">
        <svg className="w-full h-full" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="150" r="100" fill="#f5f7ff" />
          <path 
            d="M222 120L180 162M180 120L222 162" 
            stroke="#3054f2" 
            strokeWidth="8" 
            strokeLinecap="round" 
          />
          <circle 
            cx="200" 
            cy="140" 
            r="60" 
            stroke="#3054f2" 
            strokeWidth="4" 
            strokeDasharray="5 5" 
          />
          <path 
            d="M90 180L120 150M120 180L90 150" 
            stroke="#4b79dd" 
            strokeWidth="6" 
            strokeLinecap="round" 
          />
          <circle 
            cx="105" 
            cy="165" 
            r="40" 
            stroke="#4b79dd" 
            strokeWidth="3" 
            strokeDasharray="4 4" 
          />
          <path 
            d="M165 240L185 220M185 240L165 220" 
            stroke="#93b8f3" 
            strokeWidth="5" 
            strokeLinecap="round" 
          />
          <circle 
            cx="175" 
            cy="230" 
            r="25" 
            stroke="#93b8f3" 
            strokeWidth="2" 
            strokeDasharray="3 3" 
          />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">No results found</h2>
      <p className="text-gray-600 mb-6 max-w-md">
        Adjust your search parameters to find more suitable job opportunities.
      </p>
      <Button 
        onClick={resetFilters}
        className="bg-primary hover:bg-primary-600 text-white"
      >
        Clear All Filters
      </Button>
    </div>
  );
};

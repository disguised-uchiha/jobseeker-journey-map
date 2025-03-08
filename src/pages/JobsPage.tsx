
import { useState, useEffect } from "react";
import { FilterAccordion } from "@/components/ui/FilterAccordion";
import { JobCard } from "@/components/ui/JobCard";
import { NoResults } from "@/components/ui/NoResults";
import { SearchBar } from "@/components/ui/SearchBar";
import { Loader2 } from "lucide-react";
import { useJob } from "@/context/JobContext";

const JobsPage = () => {
  const { filteredJobs, filters, setFilters, loading } = useJob();
  const [searchInput, setSearchInput] = useState(filters.search);

  useEffect(() => {
    // Set the search input value to match the filter
    setSearchInput(filters.search);
  }, [filters.search]);

  const handleSearch = (value: string) => {
    setFilters((prev) => ({ ...prev, search: value }));
  };

  return (
    <div className="pt-24 bg-gray-50 min-h-screen">
      <div className="hr-container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Your Perfect Job</h1>
          <p className="text-gray-600">
            Browse through our curated list of job opportunities or use the search and filters to find your dream job.
          </p>
        </div>

        <div className="mb-8">
          <SearchBar 
            value={searchInput}
            onSearch={handleSearch}
            redirectToJobs={false}
            variant="primary"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <FilterAccordion />
          </div>
          
          <div className="md:col-span-3">
            {loading ? (
              <div className="flex items-center justify-center py-24">
                <Loader2 className="h-8 w-8 text-primary animate-spin" />
                <span className="ml-2 text-gray-600">Loading jobs...</span>
              </div>
            ) : filteredJobs.length > 0 ? (
              <div>
                <div className="mb-4 flex justify-between items-center">
                  <p className="text-gray-600">
                    Showing {filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'}
                  </p>
                </div>
                
                <div className="space-y-4">
                  {filteredJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              </div>
            ) : (
              <NoResults />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;

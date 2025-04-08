import { Link } from "react-router-dom";
import { SearchBar } from "@/components/ui/SearchBar";
import { Button } from "@/components/ui/button";
import { JobCard } from "@/components/ui/JobCard";
import { useJob } from "@/context/JobContext";
import { SuccessMessage } from "@/components/ui/SuccessMessage";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ChevronRight, ArrowRight } from "lucide-react";

const Index = () => {
  const { jobs, setFilters } = useJob();
  const featuredJobs = jobs.slice(0, 4);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Add email subscription logic here
    setEmail("");
    setIsSubmitted(true);
  };

  const handleCategoryClick = (category: string) => {
    setSearchInput(category);
    setFilters((prevFilters) => ({
      ...prevFilters,
      search: category,
    }));
    // Trigger search logic
    setFilters((prev) => ({ ...prev, search: category }));
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="hr-container md:h-[700px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Connecting Talent to
                <span className="text-primary block mt-2">Endless Opportunities</span>
              </h1>
              <p className="text-gray-600 text-lg max-w-md">
                Partner with an industry leader dedicated to bridging the gap between job seekers and top employers. Discover career-defining opportunities and
                take the next step toward success.
              </p>
              <div className="pt-4">
                <Button className="rounded-full px-8 py-6 bg-primary hover:bg-primary-600 text-white font-medium flex items-center gap-2" asChild>
                  <Link to="/jobs">
                    Explore jobs
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <section className="bg-white">
                <div className="hr-container">
                  <h3 className="text-xl text-gray-700 mb-8 text-center"># Trusted by over 10K+ users</h3>
                  <div className="grid grid-cols-3 md:grid-cols-3 gap-4 text-center">
                    <div className="p-4">
                      <p className="text-3xl font-bold text-primary">10+</p>
                      <p className="text-gray-500 text-sm">Wide range of industries</p>
                    </div>
                    <div className="p-4">
                      <p className="text-3xl font-bold text-gray-900">12K+</p>
                      <p className="text-gray-500 text-sm">Employed</p>
                    </div>
                    <div className="p-4">
                      <p className="text-3xl font-bold text-yellow-500">1500+</p>
                      <p className="text-gray-500 text-sm">Jobs Posted</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="hidden md:flex animate-fade-in h-full gap-16" style={{ animationDelay: "0.2s" }}>
              <div className="flex flex-1 flex-col gap-4 items-center justify-start">
                <img src="./hp-1.png" alt="Hero Image" className="w-44 h-fit object-cover" />
                <div className="border-l border-gray-200 h-6"></div>
                <div className="relative w-32 h-32 flex flex-col items-center justify-center">
                  <div
                    className="absolute inset-0 bg-[#FAFAFA] border border-[#F0F0F0] rounded-2xl"
                    style={{
                      clipPath: "polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)",
                      borderRadius: "8px"
                    }}></div>
                  <img src="./job.svg" alt="Job opportunities" className="w-8 h-8 relative z-10 mb-1" />
                  <p className="text-xs text-center font-medium relative z-10 mt-1">
                    Job <br />
                    opportunities
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col-reverse gap-4 items-center justify-start">
                <img src="./hp-2.png" alt="Hero Image" className="w-44 h-fit" />
                <div className="border-l border-gray-200 h-6"></div>
                <div className="relative w-32 h-32 flex flex-col items-center justify-center">
                  <div
                    className="absolute inset-0 bg-[#FAFAFA] border border-[#F0F0F0] rounded-2xl"
                    style={{
                      clipPath: "polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)",
                      borderRadius: "8px"
                    }}></div>
                  <img src="./search.svg" alt="Job opportunities" className="w-8 h-8 relative z-10 mb-1" />
                  <p className="text-xs text-center font-medium relative z-10 mt-1">
                    We are <br />
                    hiring
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-4 items-center justify-start">
                <img src="./hp-3.png" alt="Hero Image" className="w-44 h-fit object-cover" />
                <div className="border-l border-gray-200 h-6"></div>
                <div className="relative w-32 h-32 flex flex-col items-center justify-center">
                  <div
                    className="absolute inset-0 bg-[#FAFAFA] border border-[#F0F0F0] rounded-2xl"
                    style={{
                      clipPath: "polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)",
                      borderRadius: "8px"
                    }}></div>
                  <img src="./hand.svg" alt="Job opportunities" className="w-8 h-8 relative z-10 mb-1" />
                  <p className="text-xs text-center font-medium relative z-10 mt-1">
                    I am looking
                    <br />
                    for a job
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gray-100">
        <div className="hr-container">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Search your dream job</h2>
          </div>
          <div className="flex justify-center mb-8">
            <SearchBar className="w-full max-w-2xl" value={searchInput} onChange={(value: string) => setSearchInput(value)} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="rounded-md border border-gray-200 hover:border-primary hover:text-primary" onClick={() => handleCategoryClick('Remote jobs')}>
              Remote jobs
            </Button>
            <Button variant="outline" className="rounded-md border border-gray-200 hover:border-primary hover:text-primary" onClick={() => handleCategoryClick('Tech jobs')}>
              Tech jobs
            </Button>
            <Button variant="outline" className="rounded-md border border-gray-200 hover:border-primary hover:text-primary" onClick={() => handleCategoryClick('Marketing')}>
              Marketing
            </Button>
            <Button variant="outline" className="rounded-md border border-gray-200 hover:border-primary hover:text-primary" onClick={() => handleCategoryClick('Management')}>
              Management
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-16 bg-white">
        <div className="hr-container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Job Openings</h2>
            <Link to="/jobs" className="text-primary hover:underline font-medium">
              View all jobs →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {featuredJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="hr-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Your Trusted Partner in Recruitment</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We offer comprehensive recruitment solutions tailored to meet your specific needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-blue-50 w-12 h-12 rounded-md flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Recruitment Services</h3>
              <p className="text-gray-600">End-to-end recruitment solutions to find the best talent for your organization.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-blue-50 w-12 h-12 rounded-md flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Personnel Outsourcing</h3>
              <p className="text-gray-600">Flexible staffing solutions that scale with your business needs.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-blue-50 w-12 h-12 rounded-md flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Security</h3>
              <p className="text-gray-600">Protecting your data and ensuring privacy throughout the recruitment process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="hr-container">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Find The Best Talents & Build Relationship</h2>
              <Button className="mt-4 bg-white text-gray-900 hover:bg-gray-100" asChild>
                <Link to="/contact-us">Contact Us</Link>
              </Button>
            </div>
            <div className="text-right">
              {isSubmitted ? (
                <SuccessMessage title="Thank you for subscribing!" message="We'll keep you updated with the latest job opportunities and industry insights." />
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col space-y-4 md:items-end">
                  <h3 className="text-xl font-medium mb-2 md:text-right">Subscribe to our newsletter</h3>
                  <div className="flex w-full max-w-md">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                      className="rounded-r-none text-gray-800 h-12"
                    />
                    <Button type="submit" className="rounded-l-none h-12 px-4 bg-primary hover:bg-primary-600">
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;



import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Calendar, DollarSign, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Job } from "@/context/JobContext";

interface JobCardProps {
  job: Job;
}
export const JobCard = ({ job }: JobCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card
      className={`mb-4 overflow-hidden border-gray-100 transition-all duration-300 ${
        isHovered ? "shadow-md transform -translate-y-1" : "shadow-sm"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-5">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 p-2 bg-primary/10 rounded-md">
              <svg 
                className="w-8 h-8 text-primary"
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" />
                <path 
                  d="M20 7H4C3.44772 7 3 7.44772 3 8V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V8C21 7.44772 20.5523 7 20 7Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
                <path 
                  d="M16 19V5C16 4.44772 15.5523 4 15 4H9C8.44772 4 8 4.44772 8 5V19" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 hover:text-primary transition-colors">
                <Link to={`/jobs/${job.id}`}>{job.title}</Link>
              </h3>
              <p className="text-sm text-gray-500">{job.company}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>{`${job.experienceMin}-${job.experienceMax} Years`}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <DollarSign className="mr-1 h-4 w-4" />
                  <span>{job.salary || 'Not Disclosed'}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="mr-1 h-4 w-4" />
                  <span>{job.location}</span>
                </div>
              </div>
            </div>
          </div>
          <Button 
            variant="outline" 
            className="md:mt-0 mt-4"
            asChild
          >
            <Link to={`/jobs/${job.id}`}>
              <span>View Details</span>
              <ExternalLink className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-4">
          <p className="text-gray-600 text-sm line-clamp-2">{job.description}</p>
        </div>
      </div>
    </Card>
  );
};

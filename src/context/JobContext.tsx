
import React, { createContext, useState, useContext, useEffect } from 'react';
import { jobs as initialJobs } from '../data/jobs';

export type JobLocation = 'Bangalore' | 'Mumbai' | 'Delhi' | 'Remote' | 'Hyderabad' | 'Pune' | 'WFH';

export interface Job {
  id: string;
  title: string;
  company: string;
  location: JobLocation;
  experienceMin: number;
  experienceMax: number;
  salary: string | null;
  description: string;
  qualifications: string[];
  responsibilities: string[];
  skills: string[];
  department: string;
  workMode: 'Remote' | 'Work from office' | 'Hybrid';
}

interface JobFilters {
  search: string;
  experience: [number, number];
  salary: string[];
  department: string[];
  workMode: string[];
  duration: string[];
  vacancyType: string[];
}

interface JobContextType {
  jobs: Job[];
  filteredJobs: Job[];
  filters: JobFilters;
  setFilters: React.Dispatch<React.SetStateAction<JobFilters>>;
  loading: boolean;
  getJobById: (id: string) => Job | undefined;
  resetFilters: () => void;
}

const defaultFilters: JobFilters = {
  search: '',
  experience: [0, 30],
  salary: [],
  department: [],
  workMode: [],
  duration: [],
  vacancyType: [],
};

const JobContext = createContext<JobContextType | undefined>(undefined);

export const JobProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [jobs] = useState<Job[]>(initialJobs);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(initialJobs);
  const [filters, setFilters] = useState<JobFilters>(defaultFilters);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    
    // Simple delay to simulate API call
    const timer = setTimeout(() => {
      const filtered = jobs.filter((job) => {
        // Search filter
        if (filters.search && !job.title.toLowerCase().includes(filters.search.toLowerCase())) {
          return false;
        }
        
        // Experience filter
        if (
          job.experienceMin < filters.experience[0] ||
          job.experienceMax > filters.experience[1]
        ) {
          return false;
        }
        
        // Department filter
        if (
          filters.department.length > 0 &&
          !filters.department.includes(job.department)
        ) {
          return false;
        }
        
        // Work mode filter
        if (
          filters.workMode.length > 0 &&
          !filters.workMode.includes(job.workMode)
        ) {
          return false;
        }
        
        return true;
      });
      
      setFilteredJobs(filtered);
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [filters, jobs]);

  const getJobById = (id: string) => {
    return jobs.find((job) => job.id === id);
  };

  const resetFilters = () => {
    setFilters(defaultFilters);
  };

  return (
    <JobContext.Provider
      value={{
        jobs,
        filteredJobs,
        filters,
        setFilters,
        loading,
        getJobById,
        resetFilters,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export const useJob = () => {
  const context = useContext(JobContext);
  if (context === undefined) {
    throw new Error('useJob must be used within a JobProvider');
  }
  return context;
};

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
  category: string;
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
  setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
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

const mockJobs: Job[] = [
  {
    id: "1",
    title: "Remote Software Engineer",
    company: "Tech Corp",
    location: "Remote",
    experienceMin: 2,
    experienceMax: 5,
    salary: "₹45,000 - ₹65,000",
    description: "Work from anywhere as a software engineer.",
    qualifications: ["Bachelor's degree in Computer Science"],
    responsibilities: ["Develop software solutions"],
    skills: ["JavaScript", "React"],
    department: "Engineering",
    workMode: "Remote",
    category: "Remote jobs",
  },
  {
    id: "2",
    title: "Remote Product Designer",
    company: "DesignHub",
    location: "Remote",
    experienceMin: 3,
    experienceMax: 7,
    salary: "₹50,000 - ₹75,000",
    description: "Join our remote design team and create amazing user experiences.",
    qualifications: ["Bachelor's degree in Design or related field"],
    responsibilities: ["Create user interfaces", "Conduct user research"],
    skills: ["UI/UX", "Figma", "Design Systems"],
    department: "Design",
    workMode: "Remote",
    category: "Remote jobs",
  },
  {
    id: "3",
    title: "Remote Content Writer",
    company: "ContentCraft",
    location: "Remote",
    experienceMin: 1,
    experienceMax: 4,
    salary: "₹25,000 - ₹40,000",
    description: "Create engaging content from anywhere in the world.",
    qualifications: ["Bachelor's degree in English or Journalism"],
    responsibilities: ["Write blog posts", "Create marketing copy"],
    skills: ["Content Writing", "SEO", "Copywriting"],
    department: "Content",
    workMode: "Remote",
    category: "Remote jobs",
  },
  {
    id: "4",
    title: "Senior Frontend Developer",
    company: "Innovatech",
    location: "Remote",
    experienceMin: 5,
    experienceMax: 10,
    salary: "₹70,000 - ₹95,000",
    description: "Lead frontend development for innovative web applications.",
    qualifications: ["Bachelor's degree in Computer Science"],
    responsibilities: ["Lead development teams", "Architect solutions"],
    skills: ["React", "TypeScript", "Next.js"],
    department: "Engineering",
    workMode: "Hybrid",
    category: "Tech jobs",
  },
  {
    id: "5",
    title: "Backend Engineer",
    company: "TechGrowth",
    location: "Remote",
    experienceMin: 3,
    experienceMax: 7,
    salary: "₹55,000 - ₹80,000",
    description: "Build scalable backend systems and APIs.",
    qualifications: ["Bachelor's degree in Computer Science"],
    responsibilities: ["Design and implement APIs", "Optimize database performance"],
    skills: ["Node.js", "Python", "AWS"],
    department: "Engineering",
    workMode: "Remote",
    category: "Tech jobs",
  },
  {
    id: "6",
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Remote",
    experienceMin: 4,
    experienceMax: 8,
    salary: "₹60,000 - ₹85,000",
    description: "Manage and improve our cloud infrastructure.",
    qualifications: ["Bachelor's degree in Computer Science or related field"],
    responsibilities: ["Manage CI/CD pipelines", "Cloud infrastructure"],
    skills: ["Docker", "Kubernetes", "AWS"],
    department: "Engineering",
    workMode: "Hybrid",
    category: "Tech jobs",
  },
  {
    id: "7",
    title: "Marketing Manager",
    company: "MarketGurus",
    location: "Remote",
    experienceMin: 5,
    experienceMax: 10,
    salary: "₹65,000 - ₹90,000",
    description: "Lead our marketing initiatives and drive growth.",
    qualifications: ["Bachelor's degree in Marketing"],
    responsibilities: ["Develop marketing strategies", "Lead campaigns"],
    skills: ["Digital Marketing", "Team Leadership", "Analytics"],
    department: "Marketing",
    workMode: "Work from office",
    category: "Marketing",
  },
  {
    id: "8",
    title: "Digital Marketing Specialist",
    company: "GrowthLabs",
    location: "Remote",
    experienceMin: 2,
    experienceMax: 5,
    salary: "₹35,000 - ₹50,000",
    description: "Execute digital marketing campaigns across multiple channels.",
    qualifications: ["Bachelor's degree in Marketing or related field"],
    responsibilities: ["Manage social media", "Run paid campaigns"],
    skills: ["Social Media Marketing", "Google Ads", "Analytics"],
    department: "Marketing",
    workMode: "Remote",
    category: "Marketing",
  },
  {
    id: "9",
    title: "Content Marketing Manager",
    company: "ContentFirst",
    location: "Remote",
    experienceMin: 4,
    experienceMax: 8,
    salary: "₹45,000 - ₹70,000",
    description: "Lead our content marketing strategy and team.",
    qualifications: ["Bachelor's degree in Marketing or Communications"],
    responsibilities: ["Content strategy", "Team management"],
    skills: ["Content Strategy", "SEO", "Editorial Planning"],
    department: "Marketing",
    workMode: "Hybrid",
    category: "Marketing",
  },
  {
    id: "10",
    title: "Project Manager",
    company: "ManageIt",
    location: "Remote",
    experienceMin: 4,
    experienceMax: 8,
    salary: "₹60,000 - ₹85,000",
    description: "Manage projects and coordinate with teams.",
    qualifications: ["Bachelor's degree in Business Administration"],
    responsibilities: ["Oversee project execution", "Team coordination"],
    skills: ["Project Management", "Communication", "Agile"],
    department: "Management",
    workMode: "Hybrid",
    category: "Management",
  },
  {
    id: "11",
    title: "Product Manager",
    company: "ProductPro",
    location: "Remote",
    experienceMin: 5,
    experienceMax: 10,
    salary: "₹70,000 - ₹1,00,000",
    description: "Lead product strategy and development.",
    qualifications: ["Bachelor's degree in Business or related field"],
    responsibilities: ["Product strategy", "Feature prioritization"],
    skills: ["Product Management", "User Research", "Agile"],
    department: "Management",
    workMode: "Remote",
    category: "Management",
  },
  {
    id: "12",
    title: "Operations Manager",
    company: "OptiOps",
    location: "Remote",
    experienceMin: 6,
    experienceMax: 12,
    salary: "₹65,000 - ₹95,000",
    description: "Oversee daily operations and optimize processes.",
    qualifications: ["Bachelor's degree in Business Management"],
    responsibilities: ["Process optimization", "Team management"],
    skills: ["Operations Management", "Process Improvement", "Leadership"],
    department: "Management",
    workMode: "Work from office",
    category: "Management",
  }
];

export const JobProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [jobs, setJobs] = useState<Job[]>(mockJobs);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(mockJobs);
  const [filters, setFilters] = useState<JobFilters>(defaultFilters);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    
    // Simple delay to simulate API call
    const timer = setTimeout(() => {
      const filtered = jobs.filter((job) => {
        // Search filter - check both title and category
        if (filters.search && 
            !job.title.toLowerCase().includes(filters.search.toLowerCase()) && 
            !job.category.toLowerCase().includes(filters.search.toLowerCase())) {
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
        setJobs,
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

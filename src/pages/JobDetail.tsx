
import { useParams } from "react-router-dom";
import { useJob } from "@/context/JobContext";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Building, MapPin, Clock, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const JobDetail = () => {
  const { id } = useParams();
  const { getJobById } = useJob();
  const job = getJobById(id || "");

  if (!job) {
    return (
      <div className="pt-24 min-h-screen bg-gray-50">
        <div className="hr-container py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Job Not Found</h1>
          <p className="text-gray-600 mb-8">The job you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/jobs">Browse All Jobs</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 bg-gray-50 min-h-screen">
      <div className="hr-container py-8">
        <div className="mb-6">
          <Link to="/jobs" className="flex items-center text-primary hover:text-primary-600 transition">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Jobs
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{job.title}</h1>
            <div className="flex flex-wrap gap-4 text-gray-600">
              <div className="flex items-center">
                <Building className="h-4 w-4 mr-2 text-gray-400" />
                {job.company}
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                {job.location}
              </div>
              <div className="flex items-center">
                <Briefcase className="h-4 w-4 mr-2 text-gray-400" />
                {job.experienceMin}-{job.experienceMax} years
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-gray-400" />
                {job.workMode}
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-3">
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">About the Role</h2>
                <p className="text-gray-600 whitespace-pre-line">{job.description}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Key Responsibilities</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {job.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Qualifications</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {job.qualifications.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Required Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-blue-50 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm sticky top-24">
                <h3 className="text-lg font-semibold mb-4">Apply for this position</h3>
                <p className="text-gray-600 mb-6">
                  Interested in this role? Send your resume and we'll get back to you.
                </p>
                <Button 
                  className="w-full"
                  asChild
                >
                  <a href="mailto:info@hrstreams.com?subject=Application for Job: {job.title}">
                    Apply Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;

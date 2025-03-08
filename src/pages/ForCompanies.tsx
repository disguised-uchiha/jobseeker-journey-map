
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const ForCompanies = () => {
  return (
    <div className="pt-24 bg-gray-50 min-h-screen">
      <div className="hr-container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">HR Solutions for Growing Companies</h1>
          <p className="text-gray-600 max-w-2xl">
            Find top talent faster with our end-to-end recruitment services. We help companies of all sizes hire the right people.
          </p>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Streamline Your Hiring Process</h2>
              <p className="text-gray-600 mb-6">
                At HR Stream, we understand that hiring the right talent is critical to your business success. Our comprehensive recruitment solutions are designed to simplify the hiring process, reduce time-to-hire, and connect you with qualified candidates who match your requirements.
              </p>
              <Button asChild size="lg">
                <Link to="/contact-us">Get Started</Link>
              </Button>
            </div>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-400 italic">Company image placeholder</p>
            </div>
          </div>
        </div>

        {/* Our Services */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Our Recruitment Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-blue-50 w-12 h-12 rounded-md flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Full-Cycle Recruitment</h3>
              <p className="text-gray-600">
                End-to-end recruitment process from job posting to onboarding. We handle everything so you can focus on your business.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-blue-50 w-12 h-12 rounded-md flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Executive Search</h3>
              <p className="text-gray-600">
                Specialized recruitment for senior leadership and executive positions. We find top-tier talent for critical roles.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-blue-50 w-12 h-12 rounded-md flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Contract Staffing</h3>
              <p className="text-gray-600">
                Flexible staffing solutions for project-based needs. Get qualified professionals for short-term assignments.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Why Companies Choose HR Stream</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                {[
                  "Industry expertise across tech, finance, healthcare, and more",
                  "Extensive network of pre-screened candidates",
                  "Customized recruitment strategies tailored to your needs",
                  "Reduced time-to-hire and recruitment costs"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                {[
                  "Advanced candidate assessment techniques",
                  "Dedicated account managers for seamless communication",
                  "Regular progress updates and transparent reporting",
                  "Post-placement follow-up and support"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing/Packages */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Recruitment Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Standard", "Premium", "Enterprise"].map((tier, i) => (
              <div key={i} className={`border rounded-lg p-6 ${i === 1 ? "border-primary bg-primary-50" : "border-gray-200"}`}>
                <h3 className="text-xl font-semibold mb-2">{tier}</h3>
                <p className="text-gray-600 mb-4">
                  {i === 0 ? "For small businesses" : i === 1 ? "For growing companies" : "For large organizations"}
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Job posting and promotion",
                    "Candidate screening",
                    "Interview scheduling",
                    i !== 0 && "Skill assessment",
                    i !== 0 && "Background verification",
                    i === 2 && "Dedicated account manager",
                    i === 2 && "Custom reporting"
                  ].filter(Boolean).map((feature, j) => (
                    <li key={j} className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className={`w-full ${i === 1 ? "" : "bg-gray-800 hover:bg-gray-700"}`}>
                  <Link to="/contact-us">Get a Quote</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Streamline Your Hiring?</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Contact us today to discuss your recruitment needs and learn how HR Stream can help you find the perfect talent for your organization.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact-us">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ForCompanies;

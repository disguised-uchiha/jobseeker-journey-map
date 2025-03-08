
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="pt-24 bg-gray-50 min-h-screen">
      <div className="hr-container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">About HR Stream</h1>
          <p className="text-gray-600">
            We're on a mission to connect talented professionals with forward-thinking companies.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 mb-4">
                Founded in 2018, HR Stream began with a simple goal: to transform the recruitment process for both companies and candidates. We recognized the inefficiencies and frustrations in traditional hiring methods and set out to create a more streamlined, transparent, and effective approach.
              </p>
              <p className="text-gray-600">
                What started as a small team of recruitment specialists has grown into a comprehensive platform that leverages technology and human expertise to deliver exceptional recruitment solutions. Today, we're proud to have helped hundreds of businesses find the talent they need and thousands of professionals advance their careers.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-400 italic">Company image placeholder</p>
            </div>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <div className="grid grid-cols-1 gap-6">
            <p className="text-gray-600">
              At HR Stream, our mission is to create meaningful connections between talented individuals and forward-thinking organizations. We believe that the right job match can transform lives and drive business success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">For Candidates</h3>
                <p className="text-gray-600">We help professionals find roles that align with their skills, values, and career aspirations.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">For Companies</h3>
                <p className="text-gray-600">We provide access to quality talent that can drive innovation and growth.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">For Society</h3>
                <p className="text-gray-600">We contribute to economic progress by facilitating productive employment relationships.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Team Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center">
                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold text-lg">Leadership Name</h3>
                <p className="text-gray-500">Position</p>
                <p className="text-gray-600 mt-2">
                  Brief description about the team member and their expertise.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Join Our Network</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Whether you're looking for your next career move or seeking talent for your organization, we're here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="default">
              <Link to="/jobs">Browse Jobs</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact-us">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

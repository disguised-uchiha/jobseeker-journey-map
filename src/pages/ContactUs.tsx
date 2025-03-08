
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="pt-24 bg-gray-50 min-h-screen">
      <div className="hr-container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600">
            Have questions or want to learn more about our services? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-xl font-semibold mb-6">Get in Touch</h2>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>
                
                <Button 
                  asChild
                  className="px-8 py-2"
                >
                  <a href="mailto:info@hrstreams.com">Send Message</a>
                </Button>
              </form>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-start mb-2">
                    <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <h3 className="font-medium">Our Office</h3>
                  </div>
                  <p className="text-gray-600 pl-7">
                    123 Business Avenue<br />
                    Suite 456<br />
                    New York, NY 10001
                  </p>
                </div>
                
                <div>
                  <div className="flex items-start mb-2">
                    <Phone className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <h3 className="font-medium">Phone</h3>
                  </div>
                  <p className="text-gray-600 pl-7">
                    +1 (555) 123-4567
                  </p>
                </div>
                
                <div>
                  <div className="flex items-start mb-2">
                    <Mail className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <h3 className="font-medium">Email</h3>
                  </div>
                  <p className="text-gray-600 pl-7">
                    <a href="mailto:info@hrstreams.com" className="text-primary hover:underline">
                      info@hrstreams.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium mb-2">Business Hours</h3>
                <ul className="text-gray-600 space-y-1">
                  <li className="grid grid-cols-2">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="grid grid-cols-2">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="grid grid-cols-2">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-xl font-semibold mb-6">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "How does your recruitment process work?",
                a: "Our recruitment process involves understanding your requirements, searching our database for suitable candidates, conducting initial screenings, and presenting you with a shortlist of qualified candidates."
              },
              {
                q: "What industries do you specialize in?",
                a: "We specialize in technology, finance, healthcare, marketing, and administrative roles, but our services extend to various other industries as well."
              },
              {
                q: "How long does the recruitment process typically take?",
                a: "The timeline varies depending on the complexity of the role and your specific requirements, but we typically present candidates within 1-2 weeks of initiating the search."
              },
              {
                q: "Do you offer any guarantees for your placements?",
                a: "Yes, we offer replacement guarantees for our placements. If a candidate doesn't work out within a specified period, we'll find a replacement at no additional cost."
              }
            ].map((item, i) => (
              <div key={i}>
                <h3 className="font-medium mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

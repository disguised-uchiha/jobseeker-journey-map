
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SuccessMessage } from "@/components/ui/SuccessMessage";
import { toast } from "@/components/ui/use-toast";

interface ContactFormProps {
  title?: string;
  jobTitle?: string;
}

export const ContactForm = ({ 
  title = "Got Something to talk about?",
  jobTitle 
}: ContactFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      // Construct mailto link
      let mailtoSubject = encodeURIComponent(jobTitle ? `Inquiry about ${jobTitle}` : "Website Inquiry");
      let mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
      let mailtoLink = `mailto:info@hrstreams.com?subject=${mailtoSubject}&body=${mailtoBody}`;
      
      // For demo purposes, we'll open the mailto link
      window.open(mailtoLink);
      
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
    }, 1000);
  };

  if (isSuccess) {
    return <SuccessMessage />;
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full"
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Enter Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
          />
        </div>
        <div>
          <Textarea
            placeholder="Enter Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full min-h-[120px]"
          />
        </div>
        <Button
          type="submit"
          className="w-full md:w-auto bg-gray-900 hover:bg-black text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </Button>
      </form>
    </div>
  );
};

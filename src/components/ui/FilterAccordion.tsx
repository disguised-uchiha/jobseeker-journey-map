
import { useState } from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { useJob } from "@/context/JobContext";

export const FilterAccordion = () => {
  const { filters, setFilters } = useJob();
  const [experienceValue, setExperienceValue] = useState<number[]>([0, 30]);

  const handleExperienceChange = (value: number[]) => {
    setExperienceValue(value);
    setFilters(prev => ({
      ...prev,
      experience: [value[0], value[1]]
    }));
  };

  const handleCheckboxChange = (category: string, value: string) => {
    setFilters(prev => {
      const currentValues = prev[category as keyof typeof prev] as string[];
      
      if (currentValues.includes(value)) {
        return {
          ...prev,
          [category]: currentValues.filter(item => item !== value)
        };
      } else {
        return {
          ...prev,
          [category]: [...currentValues, value]
        };
      }
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
      <h2 className="text-lg font-semibold mb-4">All Filters</h2>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="experience" className="border-b">
          <AccordionTrigger className="py-4 text-base font-medium">Experience</AccordionTrigger>
          <AccordionContent>
            <div className="py-4">
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>{experienceValue[0]} Yrs</span>
                <span>{experienceValue[1]} Yrs</span>
              </div>
              <Slider 
                defaultValue={[0, 30]} 
                min={0} 
                max={30} 
                step={1} 
                value={experienceValue}
                onValueChange={handleExperienceChange}
                className="my-4"
              />
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="salary" className="border-b">
          <AccordionTrigger className="py-4 text-base font-medium">Salary (In Rs)</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 py-2">
              {['0-15000', '15000 - 20000', '20000 - 30000', '30000 - 40000', '40000+'].map((range) => (
                <div key={range} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`salary-${range}`} 
                    checked={filters.salary.includes(range)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        handleCheckboxChange('salary', range);
                      } else {
                        handleCheckboxChange('salary', range);
                      }
                    }}
                  />
                  <Label htmlFor={`salary-${range}`} className="text-sm">{range}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="department" className="border-b">
          <AccordionTrigger className="py-4 text-base font-medium">Department</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 py-2">
              {[
                'Engineering - Software & QA', 
                'Data Science & Analytics', 
                'IT & Information Security',
                'Product Management',
                'Consulting'
              ].map((dept) => (
                <div key={dept} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`dept-${dept}`} 
                    checked={filters.department.includes(dept)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        handleCheckboxChange('department', dept);
                      } else {
                        handleCheckboxChange('department', dept);
                      }
                    }}
                  />
                  <Label htmlFor={`dept-${dept}`} className="text-sm">{dept}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="workMode" className="border-b">
          <AccordionTrigger className="py-4 text-base font-medium">Work mode</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 py-2">
              {['Work from office', 'Remote', 'Hybrid'].map((mode) => (
                <div key={mode} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`mode-${mode}`} 
                    checked={filters.workMode.includes(mode)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        handleCheckboxChange('workMode', mode);
                      } else {
                        handleCheckboxChange('workMode', mode);
                      }
                    }}
                  />
                  <Label htmlFor={`mode-${mode}`} className="text-sm">{mode}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="duration" className="border-b">
          <AccordionTrigger className="py-4 text-base font-medium">Duration</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 py-2">
              {['1 Month', '2 Months', '3 Months', '4 Months', 'Flexible'].map((duration) => (
                <div key={duration} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`duration-${duration}`} 
                    checked={filters.duration.includes(duration)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        handleCheckboxChange('duration', duration);
                      } else {
                        handleCheckboxChange('duration', duration);
                      }
                    }}
                  />
                  <Label htmlFor={`duration-${duration}`} className="text-sm">{duration}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="vacancyType" className="border-b">
          <AccordionTrigger className="py-4 text-base font-medium">Vacancy Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 py-2">
              {['Full Time', 'Internship', 'Parttime', 'Temporary'].map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`type-${type}`} 
                    checked={filters.vacancyType.includes(type)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        handleCheckboxChange('vacancyType', type);
                      } else {
                        handleCheckboxChange('vacancyType', type);
                      }
                    }}
                  />
                  <Label htmlFor={`type-${type}`} className="text-sm">{type}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

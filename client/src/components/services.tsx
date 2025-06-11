import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Code, CheckCircle } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export default function Services() {
  const manpowerFeatures = [
    "Executive Search & Recruitment",
    "Temporary & Contract Staffing",
    "HR Consulting & Workforce Planning",
    "Talent Assessment & Screening",
  ];

  const softwareFeatures = [
    "Custom Web Application Development",
    "Mobile App Development (iOS/Android)",
    "Cloud Solutions & DevOps",
    "Legacy System Modernization",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Discovery",
      description: "Understanding your needs and requirements",
    },
    {
      number: "2",
      title: "Strategy", 
      description: "Developing customized solutions and approach",
    },
    {
      number: "3",
      title: "Execution",
      description: "Implementing solutions with precision",
    },
    {
      number: "4",
      title: "Support",
      description: "Ongoing support and continuous improvement",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive solutions to help your business thrive in today's competitive landscape
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Manpower Consultancy Service */}
          <Card className="hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mr-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Manpower Consultancy</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Connect with top-tier professionals across various industries. Our extensive network and rigorous screening process ensure you get the right talent for your organization.
              </p>
              <ul className="space-y-3 mb-8">
                {manpowerFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="w-full bg-primary text-white hover:bg-blue-700 transition-colors"
              >
                Request Consultation
              </Button>
            </CardContent>
          </Card>

          {/* Software Development Service */}
          <Card className="hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mr-4">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Software Development</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Custom software solutions tailored to your business needs. From web applications to mobile apps, we deliver scalable and innovative technology solutions.
              </p>
              <ul className="space-y-3 mb-8">
                {softwareFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="w-full bg-accent text-white hover:bg-yellow-500 transition-colors"
              >
                Get Free Quote
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Service Process */}
        <Card>
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Our Proven Process</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{step.number}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

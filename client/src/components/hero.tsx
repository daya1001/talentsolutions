import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";

export default function Hero() {
  const stats = [
    { value: "500+", label: "Happy Clients" },
    { value: "1000+", label: "Projects Completed" },
    { value: "10+", label: "Years Experience" },
  ];

  return (
    <section id="home" className="bg-gradient-to-br from-primary to-primary-light text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Business with{" "}
              <span className="text-accent">Expert Talent</span> &{" "}
              <span className="text-accent">Technology</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Leading provider of manpower consultancy and custom software development solutions. 
              We connect businesses with top talent and cutting-edge technology to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("services")}
                className="bg-accent text-white hover:bg-yellow-500 transition-colors px-8 py-4 text-lg font-semibold"
              >
                Our Services
              </Button>
              <Button 
                onClick={() => scrollToSection("portfolio")}
                className="bg-white text-primary border-2 border-white hover:bg-transparent hover:text-white transition-colors px-8 py-4 text-lg font-semibold"
              >
                View Portfolio
              </Button>
            </div>
            <div className="flex items-center space-x-8 text-blue-100">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional business team collaboration" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

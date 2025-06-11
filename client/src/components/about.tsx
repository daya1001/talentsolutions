export default function About() {
  const stats = [
    { value: "95%", label: "Successful Placements" },
    { value: "98%", label: "Client Retention" },
    { value: "30", label: "Days Avg. Delivery" },
    { value: "15+", label: "Industries Served" },
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Building Success Through{" "}
              <span className="text-primary">Innovation</span> &{" "}
              <span className="text-primary">Excellence</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over a decade of experience in talent acquisition and software development, 
              TalentSolutions has established itself as a trusted partner for businesses seeking 
              to scale and innovate. Our commitment to excellence and deep industry expertise 
              drives measurable results for our clients.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To bridge the gap between talent and opportunity while delivering innovative technology 
                solutions that drive business transformation and sustainable growth.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" 
              alt="Modern office environment with professionals" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
            
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
              alt="Software development workspace setup" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

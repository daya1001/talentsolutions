import { db } from "./db";
import { testimonials, portfolioItems } from "@shared/schema";

async function seedDatabase() {
  console.log("Seeding database with sample data...");

  // Sample testimonials
  const sampleTestimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechCorp",
      content: "TalentSolutions transformed our hiring process completely. They found us exceptional candidates in record time and their software solution streamlined our entire workflow.",
      rating: 5,
      isActive: true
    },
    {
      name: "Michael Chen",
      position: "CTO",
      company: "InnovateLabs",
      content: "The custom software they developed exceeded our expectations. Their team understood our complex requirements and delivered a solution that increased our efficiency by 40%.",
      rating: 5,
      isActive: true
    },
    {
      name: "Emma Rodriguez",
      position: "HR Director",
      company: "GlobalFinance",
      content: "Professional, reliable, and results-driven. TalentSolutions helped us scale our team globally while maintaining the highest quality standards.",
      rating: 5,
      isActive: true
    }
  ];

  // Sample portfolio items
  const samplePortfolioItems = [
    {
      title: "Fortune 500 Talent Acquisition",
      description: "Successfully placed 200+ executives across multiple departments, reducing hiring time by 60%.",
      category: "Consultancy",
      industry: "Technology Sector",
      duration: "6 months",
      imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      isActive: true
    },
    {
      title: "E-commerce Platform Redesign",
      description: "Built scalable e-commerce solution resulting in 300% increase in online sales and improved user experience.",
      category: "Development",
      industry: "Retail Industry",
      duration: "4 months",
      imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      isActive: true
    },
    {
      title: "Digital Transformation Initiative",
      description: "Combined talent acquisition and custom software development to modernize legacy systems.",
      category: "Hybrid",
      industry: "Healthcare",
      duration: "8 months",
      imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      isActive: true
    }
  ];

  try {
    // Insert testimonials
    await db.insert(testimonials).values(sampleTestimonials);
    console.log("✓ Testimonials seeded successfully");

    // Insert portfolio items
    await db.insert(portfolioItems).values(samplePortfolioItems);
    console.log("✓ Portfolio items seeded successfully");

    console.log("Database seeding completed!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

export { seedDatabase };

// Auto-run seeding
seedDatabase().then(() => process.exit(0));
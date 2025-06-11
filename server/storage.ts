import { 
  users, 
  contacts, 
  testimonials, 
  portfolioItems,
  type User, 
  type InsertUser,
  type Contact,
  type InsertContact,
  type Testimonial,
  type InsertTestimonial,
  type PortfolioItem,
  type InsertPortfolioItem
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  getActiveTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  getActivePortfolioItems(): Promise<PortfolioItem[]>;
  createPortfolioItem(item: InsertPortfolioItem): Promise<PortfolioItem>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private testimonials: Map<number, Testimonial>;
  private portfolioItems: Map<number, PortfolioItem>;
  private currentId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.testimonials = new Map();
    this.portfolioItems = new Map();
    this.currentId = 1;
    
    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample testimonials
    const sampleTestimonials: InsertTestimonial[] = [
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

    sampleTestimonials.forEach(testimonial => {
      this.createTestimonial(testimonial);
    });

    // Sample portfolio items
    const samplePortfolioItems: InsertPortfolioItem[] = [
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

    samplePortfolioItems.forEach(item => {
      this.createPortfolioItem(item);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentId++;
    const contact: Contact = { 
      ...insertContact, 
      id,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getActiveTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).filter(t => t.isActive);
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentId++;
    const testimonial: Testimonial = { ...insertTestimonial, id };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  async getActivePortfolioItems(): Promise<PortfolioItem[]> {
    return Array.from(this.portfolioItems.values()).filter(item => item.isActive);
  }

  async createPortfolioItem(insertPortfolioItem: InsertPortfolioItem): Promise<PortfolioItem> {
    const id = this.currentId++;
    const portfolioItem: PortfolioItem = { ...insertPortfolioItem, id };
    this.portfolioItems.set(id, portfolioItem);
    return portfolioItem;
  }
}

export const storage = new MemStorage();

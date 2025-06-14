import https from 'https';
import { storage } from '../storage';
import axios from 'axios';

// Configure HTTPS agent
const httpsAgent = new https.Agent({
  rejectUnauthorized: false // Only use this in development
});

class ApiService {
  private static instance: ApiService;
  private readonly baseUrl: string;

  private constructor() {
    this.baseUrl = 'https://talentsolutionss.com/v2';
  }

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  private async makeRequest<T>(endpoint: string): Promise<T> {
    try {
      const response = await axios.get(`${this.baseUrl}/${endpoint}`, {
        httpsAgent,
        timeout: 10000
      });
      return response.data;
    } catch (error: any) {
      console.error("Error in makeRequest:", error.message);
      throw error;
    }
  }

  public async fetchPortfolioItems() {
    try {
      // First try to get from database
      const items = await storage.getActivePortfolioItems();

      //  console.log('items',items)
      if (items && items.length > 0) {
        return items;
      }
      
      // If database is empty, try API
      return await this.makeRequest('portfolio');
    } catch (error) {
      console.error('Error fetching portfolio items:', error);
      // Return empty array instead of throwing
      return [];
    }
  }

  public async fetchTestimonials() {
    try {
      // First try to get from database
      const items = await storage.getActiveTestimonials();
      if (items && items.length > 0) {
        return items;
      }
      
      // If database is empty, try API
      return await this.makeRequest('testimonials');
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      // Return empty array instead of throwing
      return [];
    }
  }
}

export const apiService = ApiService.getInstance(); 
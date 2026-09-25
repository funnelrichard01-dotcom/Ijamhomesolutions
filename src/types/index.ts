export interface ServiceItem {
  id: string;
  title: string;
  category: 'residential' | 'multifamily' | 'specialized';
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  tag: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Kitchens' | 'Bathrooms' | 'Interior Renovations' | 'Home Projects' | 'Multi-Family Projects';
  description: string;
  image: string;
  highlight: string;
  details?: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  location?: string;
  rating: number;
  highlight: string;
}

export interface SolutionFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  serviceCategory: string;
  urgency: 'Asap' | 'Next Week' | 'Next Month' | '';
  problemDescription: string;
  files: { name: string; size: number; type: string; dataUrl?: string }[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  quickAction?: {
    type: 'quote' | 'whatsapp' | 'call' | 'services';
    label: string;
  };
}

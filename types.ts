export interface Hotel {
  id: string;
  name: string;
  location: string;
  pricePerNight: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  amenities: string[];
  type: 'Luxury' | 'Boutique' | 'Resort' | 'Business';
  coordinates?: { lat: number; lng: number };
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  preferences: string[];
}

export interface Booking {
  id: string;
  hotelId: string;
  userId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
  status: 'confirmed' | 'pending' | 'cancelled';
  dateBooked: string;
}

export interface SearchParams {
  location: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

export interface AiRecommendation {
  summary: string;
  highlights: string[];
  bestFor: string;
}
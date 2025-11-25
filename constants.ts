import { Hotel, User } from './types';

export const FEATURED_HOTELS: Hotel[] = [
  {
    id: 'h1',
    name: 'The Grand Oakhaven',
    location: 'New York, NY',
    pricePerNight: 450,
    rating: 4.8,
    reviews: 1240,
    image: 'https://picsum.photos/id/164/800/600',
    description: 'Experience the pinnacle of luxury in the heart of Manhattan. Steps away from Central Park.',
    amenities: ['Spa', 'Pool', 'Rooftop Bar', 'Free Wi-Fi', 'Gym'],
    type: 'Luxury'
  },
  {
    id: 'h2',
    name: 'Azure Coast Resort',
    location: 'Miami, FL',
    pricePerNight: 320,
    rating: 4.6,
    reviews: 850,
    image: 'https://picsum.photos/id/10/800/600',
    description: 'Oceanfront paradise with private beach access and world-class dining.',
    amenities: ['Beach Access', 'Infinity Pool', 'Cocktail Lounge', 'Valet'],
    type: 'Resort'
  },
  {
    id: 'h3',
    name: 'The Ironworks Hotel',
    location: 'Chicago, IL',
    pricePerNight: 280,
    rating: 4.7,
    reviews: 530,
    image: 'https://picsum.photos/id/402/800/600',
    description: 'Industrial chic meets modern comfort in the trendy West Loop district.',
    amenities: ['Coworking Space', 'Craft Coffee', 'Gym', 'Pet Friendly'],
    type: 'Boutique'
  },
  {
    id: 'h4',
    name: 'Silicon Valley Stay',
    location: 'San Francisco, CA',
    pricePerNight: 390,
    rating: 4.5,
    reviews: 2100,
    image: 'https://picsum.photos/id/369/800/600',
    description: 'Tech-enabled rooms for the modern traveler. High-speed fiber internet included.',
    amenities: ['Smart Rooms', 'Conference Center', 'Free Breakfast', 'Gym'],
    type: 'Business'
  },
  {
    id: 'h5',
    name: 'Alpine Lodge & Spa',
    location: 'Aspen, CO',
    pricePerNight: 650,
    rating: 4.9,
    reviews: 420,
    image: 'https://picsum.photos/id/235/800/600',
    description: 'Cozy fireplace suites with ski-in/ski-out access.',
    amenities: ['Ski Valet', 'Heated Pool', 'Spa', 'Fireplaces'],
    type: 'Resort'
  },
   {
    id: 'h6',
    name: 'The Modernist',
    location: 'Austin, TX',
    pricePerNight: 210,
    rating: 4.4,
    reviews: 320,
    image: 'https://picsum.photos/id/201/800/600',
    description: 'Eclectic style in the heart of the music city.',
    amenities: ['Live Music', 'Bar', 'Pool', 'Bike Rentals'],
    type: 'Boutique'
  }
];

export const AMENITY_ICONS: Record<string, string> = {
  'Spa': 'sparkles',
  'Pool': 'waves',
  'Gym': 'dumbbell',
  'Free Wi-Fi': 'wifi',
  'Bar': 'wine',
  'Restaurant': 'utensils',
  'Coworking Space': 'briefcase',
  'Beach Access': 'sun',
};

export const PREFERENCE_OPTIONS = [
  'Luxury', 'Business', 'Resort', 'Boutique', 'Spa', 'Nature', 'Nightlife', 'Family'
];

export const MOCK_USER: User = {
  id: 'u1',
  email: 'demo@staysuitely.com',
  name: 'Alex Traveler',
  avatar: 'https://picsum.photos/id/64/100/100',
  preferences: ['Business', 'Luxury']
};
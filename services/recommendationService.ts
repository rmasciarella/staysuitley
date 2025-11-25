import { Hotel, User } from '../types';

export const getRecommendedHotels = (user: User, hotels: Hotel[]): Hotel[] => {
  if (!user.preferences || user.preferences.length === 0) return [];

  // Create a shallow copy to sort
  const scoredHotels = hotels.map(hotel => {
    let score = 0;
    
    // 1. Direct Type Match (High Priority)
    if (user.preferences.includes(hotel.type)) {
        score += 10;
    }

    // 2. Direct Amenity Match
    hotel.amenities.forEach(amenity => {
        if (user.preferences.includes(amenity)) {
            score += 3;
        }
    });

    // 3. Implicit Logic
    // Business travelers like Coworking, Wifi, Coffee
    if (user.preferences.includes('Business')) {
        if (hotel.amenities.includes('Coworking Space')) score += 5;
        if (hotel.amenities.includes('Free Wi-Fi')) score += 2;
        if (hotel.amenities.includes('Smart Rooms')) score += 3;
    }

    // Luxury travelers like Spa, Valet, Fine Dining
    if (user.preferences.includes('Luxury')) {
        if (hotel.amenities.includes('Spa')) score += 4;
        if (hotel.amenities.includes('Valet')) score += 2;
        if (hotel.pricePerNight > 400) score += 2; // Price signal
    }

    // Family travelers like Pools, Kitchens (if we had them), Breakfast
    if (user.preferences.includes('Family')) {
        if (hotel.amenities.includes('Pool') || hotel.amenities.includes('Heated Pool')) score += 5;
        if (hotel.amenities.includes('Free Breakfast')) score += 3;
    }
    
    // Boutique lovers like unique vibes
    if (user.preferences.includes('Boutique') && hotel.type === 'Boutique') {
        score += 5;
    }

    return { hotel, score };
  });

  // Sort by score descending and take top 3
  return scoredHotels
    .sort((a, b) => b.score - a.score)
    .filter(item => item.score > 0)
    .map(item => item.hotel)
    .slice(0, 3);
};
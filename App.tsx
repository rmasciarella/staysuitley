import React, { useState, useEffect, useMemo } from 'react';
import { HashRouter, Routes, Route, useNavigate, useSearchParams, useParams, Link } from 'react-router-dom';
import { Layout } from './components/Layout';
import { SearchWidget } from './components/SearchWidget';
import { AuthModal } from './components/Auth';
import { Checkout } from './components/Checkout';
import { FEATURED_HOTELS, MOCK_USER, AMENITY_ICONS } from './constants';
import { User, Hotel, AiRecommendation } from './types';
import { Star, MapPin, ArrowRight, ShieldCheck, Sparkles, Wifi, Check, Loader2, CheckCircle, ThumbsUp } from 'lucide-react';
import { getDestinationAdvice } from './services/geminiService';
import { getRecommendedHotels } from './services/recommendationService';
import { 
  AboutPage, CareersPage, PressPage, BlogPage, 
  HelpCenterPage, SafetyPage, CancellationPage, ContactPage,
  PrivacyPage, TermsPage, SitemapPage 
} from './components/StaticPages';

// --- Page Components ---

const HomePage: React.FC<{ user: User | null }> = ({ user }) => {
  const recommendedHotels = useMemo(() => {
    if (!user) return [];
    return getRecommendedHotels(user, FEATURED_HOTELS);
  }, [user]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Luxury Hotel Lobby" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-[-50px]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium uppercase tracking-wider mb-6 animate-in slide-in-from-bottom-4 duration-700">
            <Sparkles size={12} className="text-yellow-400" />
            <span>Rediscover True Hospitality</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-in slide-in-from-bottom-6 duration-700 delay-100">
            Don't Just Stay.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-white">Stay Suitley.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto animate-in slide-in-from-bottom-8 duration-700 delay-200">
            Experience the consistency, security, and service of world-class hotels. No chore lists. No hidden fees. Just relaxation.
          </p>
        </div>
      </section>

      {/* Search Widget Container (Overlapping Hero) */}
      <div className="px-4 -mt-32 relative z-20 mb-20">
        <SearchWidget />
      </div>

      {/* Personalized Recommendations Section */}
      {user && recommendedHotels.length > 0 && (
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-brand-100 rounded-lg">
                <ThumbsUp className="text-brand-600" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Selected for You, {user.name.split(' ')[0]}</h2>
                <p className="text-gray-500 text-sm">Based on your preference for {user.preferences.slice(0, 2).join(' & ')}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recommendedHotels.map(hotel => (
                <HotelCard key={hotel.id} hotel={hotel} highlightReason={true} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Value Props */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Travelers Are Returning to Hotels</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Skip the cleaning fees and awkward check-ins. Stay Suitley brings you the best of professional hospitality.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                icon: ShieldCheck, 
                title: "Guaranteed Safety", 
                desc: "24/7 security, front desk support, and verified safety standards for peace of mind." 
              },
              { 
                icon: Star, 
                title: "Consistent Quality", 
                desc: "No surprises. Premium linens, daily housekeeping, and professional amenities every time." 
              },
              { 
                icon: Sparkles, 
                title: "Zero Chores", 
                desc: "You're on vacation. Don't take out the trash or strip the beds. We handle everything." 
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center text-brand-600 mb-6">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Trending Destinations</h2>
              <p className="text-gray-600">Hand-picked properties for your next getaway.</p>
            </div>
            <Link to="/search" className="hidden md:flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700">
              View All Hotels <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_HOTELS.slice(0, 3).map(hotel => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
           <div className="mt-8 text-center md:hidden">
            <Link to="/search" className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700">
              View All Hotels <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const HotelCard: React.FC<{ hotel: Hotel; highlightReason?: boolean }> = ({ hotel, highlightReason }) => {
  const navigate = useNavigate();
  return (
    <div 
      onClick={() => navigate(`/hotel/${hotel.id}`)}
      className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border flex flex-col h-full ${highlightReason ? 'border-brand-200 ring-1 ring-brand-100' : 'border-gray-100'}`}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={hotel.image} 
          alt={hotel.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gray-800">
          {hotel.type}
        </div>
        {highlightReason && (
           <div className="absolute top-4 right-4 bg-brand-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
             Top Pick
           </div>
        )}
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-1">
          <Star size={14} className="text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-bold text-gray-900">{hotel.rating}</span>
          <span className="text-xs text-gray-500">({hotel.reviews})</span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-2">
          <div>
             <h3 className="text-xl font-bold text-gray-900 line-clamp-1 group-hover:text-brand-600 transition-colors">{hotel.name}</h3>
             <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
               <MapPin size={14} />
               {hotel.location}
             </div>
          </div>
        </div>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4 flex-grow">{hotel.description}</p>
        <div className="flex items-center gap-3 mb-6">
           {hotel.amenities.slice(0, 3).map((amenity, i) => (
             <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{amenity}</span>
           ))}
           {hotel.amenities.length > 3 && <span className="text-xs text-gray-400">+{hotel.amenities.length - 3}</span>}
        </div>
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-brand-600">${hotel.pricePerNight}</span>
            <span className="text-gray-400 text-sm"> / night</span>
          </div>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold group-hover:bg-brand-600 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const locationQuery = searchParams.get('location');
  const typeQuery = searchParams.get('type');
  
  // Filter Logic
  const filteredHotels = FEATURED_HOTELS.filter(h => {
    const matchesLocation = !locationQuery || locationQuery === 'All Locations' || h.location.toLowerCase().includes(locationQuery.toLowerCase());
    const matchesType = !typeQuery || h.type === typeQuery;
    return matchesLocation && matchesType;
  });

  const displayTitle = locationQuery 
    ? `${filteredHotels.length} Properties in ${locationQuery}`
    : typeQuery 
      ? `${typeQuery} Hotels`
      : 'All Hotels';

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white shadow-sm sticky top-20 z-30 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <SearchWidget compact />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
           {/* Filters Sidebar (Static for demo) */}
           <div className="w-full lg:w-64 flex-shrink-0 space-y-8 hidden lg:block">
             <div>
               <h3 className="font-bold text-gray-900 mb-4">Price Range</h3>
               <div className="space-y-2">
                 <label className="flex items-center gap-2"><input type="checkbox" className="rounded text-brand-600" /> <span className="text-sm text-gray-600">Under $200</span></label>
                 <label className="flex items-center gap-2"><input type="checkbox" className="rounded text-brand-600" /> <span className="text-sm text-gray-600">$200 - $400</span></label>
                 <label className="flex items-center gap-2"><input type="checkbox" className="rounded text-brand-600" /> <span className="text-sm text-gray-600">$400+</span></label>
               </div>
             </div>
             <div>
               <h3 className="font-bold text-gray-900 mb-4">Amenities</h3>
               <div className="space-y-2">
                 {Object.keys(AMENITY_ICONS).slice(0,5).map(a => (
                   <label key={a} className="flex items-center gap-2"><input type="checkbox" className="rounded text-brand-600" /> <span className="text-sm text-gray-600">{a}</span></label>
                 ))}
               </div>
             </div>
           </div>

           {/* Results */}
           <div className="flex-grow">
             <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">{displayTitle}</h1>
                <p className="text-gray-500 text-sm">Prices include taxes and fees</p>
             </div>
             
             {filteredHotels.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredHotels.map(hotel => (
                    <HotelCard key={hotel.id} hotel={hotel} />
                  ))}
                </div>
             ) : (
               <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                 <h3 className="text-lg font-medium text-gray-900">No hotels found.</h3>
                 <p className="text-gray-500">Try adjusting your search criteria or clear your filters.</p>
                 <button onClick={() => window.location.href = '#/search'} className="mt-4 text-brand-600 font-medium hover:underline">Clear Filters</button>
               </div>
             )}
           </div>
        </div>
      </div>
    </div>
  );
};

const HotelDetailsPage: React.FC<{ onBook: (hotel: Hotel) => void }> = ({ onBook }) => {
  const { id } = useParams();
  const hotel = FEATURED_HOTELS.find(h => h.id === id);
  const [aiAdvice, setAiAdvice] = useState<AiRecommendation | null>(null);
  const [loadingAi, setLoadingAi] = useState(false);

  useEffect(() => {
    if (hotel) {
      setLoadingAi(true);
      getDestinationAdvice(hotel.location, hotel.name)
        .then(data => setAiAdvice(data))
        .finally(() => setLoadingAi(false));
    }
  }, [hotel]);

  if (!hotel) return <div className="p-12 text-center">Hotel not found</div>;

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Gallery Header */}
      <div className="h-[400px] md:h-[500px] relative">
         <img src={hotel.image} className="w-full h-full object-cover" alt={hotel.name} />
         <div className="absolute inset-0 bg-black/20"></div>
         <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 bg-gradient-to-t from-black/80 to-transparent text-white">
           <div className="max-w-7xl mx-auto">
             <h1 className="text-4xl md:text-5xl font-bold mb-2">{hotel.name}</h1>
             <div className="flex items-center gap-4 text-gray-200">
               <span className="flex items-center gap-1"><MapPin size={18} /> {hotel.location}</span>
               <span className="flex items-center gap-1"><Star size={18} className="text-yellow-400 fill-yellow-400" /> {hotel.rating} Stars</span>
             </div>
           </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* AI Concierge Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-brand-100 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Sparkles size={100} className="text-brand-600" />
              </div>
              <div className="flex items-center gap-2 mb-4">
                 <div className="bg-brand-100 p-2 rounded-lg text-brand-600">
                   <Sparkles size={20} />
                 </div>
                 <h3 className="text-lg font-bold text-gray-900">StaySuitley AI Concierge</h3>
              </div>
              
              {loadingAi ? (
                <div className="space-y-3 animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              ) : aiAdvice ? (
                <div className="space-y-4">
                  <p className="text-gray-700 font-medium italic">"{aiAdvice.summary}"</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Perfect for:</span>
                    <span className="text-xs bg-brand-50 text-brand-700 px-2 py-0.5 rounded-full font-semibold border border-brand-100">{aiAdvice.bestFor}</span>
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Highlights:</span>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {aiAdvice.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check size={14} className="text-green-500" /> {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <p>Unable to load recommendations.</p>
              )}
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">About this Hotel</h2>
              <p className="text-gray-600 leading-relaxed mb-8">{hotel.description}</p>
              
              <h3 className="text-lg font-bold mb-4 text-gray-900">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {hotel.amenities.map(amenity => (
                  <div key={amenity} className="flex items-center gap-3 text-gray-600 p-3 bg-gray-50 rounded-lg">
                    {/* Basic icon mapping */}
                    <Wifi size={18} />
                    <span className="text-sm font-medium">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
             <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-24">
               <div className="flex items-baseline justify-between mb-6">
                 <div>
                   <span className="text-3xl font-bold text-gray-900">${hotel.pricePerNight}</span>
                   <span className="text-gray-500"> / night</span>
                 </div>
                 <div className="flex items-center gap-1 text-sm font-medium text-gray-700">
                   <Star size={14} className="fill-yellow-400 text-yellow-400" />
                   {hotel.rating}
                 </div>
               </div>

               <div className="space-y-4 mb-6">
                 <div className="grid grid-cols-2 gap-2">
                   <div className="border border-gray-200 rounded-lg p-3">
                     <label className="text-xs font-bold text-gray-500 uppercase">Check-in</label>
                     <div className="text-gray-900 font-medium">Dec 12</div>
                   </div>
                   <div className="border border-gray-200 rounded-lg p-3">
                     <label className="text-xs font-bold text-gray-500 uppercase">Check-out</label>
                     <div className="text-gray-900 font-medium">Dec 15</div>
                   </div>
                 </div>
                 <div className="border border-gray-200 rounded-lg p-3">
                   <label className="text-xs font-bold text-gray-500 uppercase">Guests</label>
                   <div className="text-gray-900 font-medium">2 Adults</div>
                 </div>
               </div>
               
               <div className="space-y-3 mb-6">
                 <div className="flex justify-between text-gray-600">
                   <span>${hotel.pricePerNight} x 3 nights</span>
                   <span>${hotel.pricePerNight * 3}</span>
                 </div>
                 <div className="flex justify-between text-gray-600">
                   <span>Service Fee</span>
                   <span>$45</span>
                 </div>
                 <div className="flex justify-between text-gray-600">
                   <span>Cleaning Fee</span>
                   <span className="text-green-600 font-bold">$0</span>
                 </div>
                 <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-lg text-gray-900">
                   <span>Total</span>
                   <span>${hotel.pricePerNight * 3 + 45}</span>
                 </div>
               </div>

               <button 
                 onClick={() => onBook(hotel)}
                 className="w-full bg-brand-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-500 transition-all shadow-lg shadow-brand-500/20"
               >
                 Reserve
               </button>
               <p className="text-center text-xs text-gray-400 mt-4">You won't be charged yet</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckoutPage: React.FC<{ hotel: Hotel }> = ({ hotel }) => {
  const [success, setSuccess] = useState(false);
  const total = hotel.pricePerNight * 3 + 45;

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="bg-white p-12 rounded-2xl shadow-xl text-center max-w-md w-full animate-in zoom-in-95 duration-500">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-8">You're all set for your stay at {hotel.name}. A confirmation email has been sent.</p>
          <a href="#/" className="block w-full bg-brand-600 text-white py-3 rounded-lg font-bold hover:bg-brand-500 transition-colors">
            Return Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Secure Checkout</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
           {/* Trip Summary */}
           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-fit">
             <div className="flex gap-4 mb-4">
               <img src={hotel.image} className="w-20 h-20 object-cover rounded-lg" alt="Hotel" />
               <div>
                 <h3 className="font-bold text-gray-900">{hotel.name}</h3>
                 <p className="text-gray-500 text-sm">{hotel.location}</p>
                 <div className="flex items-center gap-1 text-xs text-yellow-500 mt-1">
                   <Star size={12} className="fill-current" /> {hotel.rating}
                 </div>
               </div>
             </div>
             <div className="border-t border-gray-100 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Dates</span>
                  <span className="font-medium text-gray-900">Dec 12 - Dec 15</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Guests</span>
                  <span className="font-medium text-gray-900">2 Guests</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-100 mt-2">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
             </div>
           </div>

           {/* Pay Form */}
           <Checkout total={total} onSuccess={() => setSuccess(true)} />
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [bookingHotel, setBookingHotel] = useState<Hotel | null>(null);

  // Restore session
  useEffect(() => {
    const saved = localStorage.getItem('stay_suitley_user');
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse user session");
      }
    }
  }, []);

  const handleLogin = (loggedInUser: User) => {
    setUser(loggedInUser);
    localStorage.setItem('stay_suitley_user', JSON.stringify(loggedInUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('stay_suitley_user');
  };

  const initiateBooking = (hotel: Hotel) => {
    if (!user) {
      setIsAuthOpen(true);
    } else {
      setBookingHotel(hotel);
      window.location.hash = `/checkout`;
    }
  };

  return (
    <HashRouter>
      <Layout 
        user={user} 
        onLogout={handleLogout} 
        onOpenAuth={() => setIsAuthOpen(true)}
      >
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/hotel/:id" element={<HotelDetailsPage onBook={initiateBooking} />} />
          <Route 
            path="/checkout" 
            element={
              user && bookingHotel ? (
                <CheckoutPage hotel={bookingHotel} />
              ) : (
                <div className="p-20 text-center">Redirecting...</div>
              )
            } 
          />
          
          {/* Static Pages Routes */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/press" element={<PressPage />} />
          <Route path="/blog" element={<BlogPage />} />
          
          <Route path="/help" element={<HelpCenterPage />} />
          <Route path="/safety" element={<SafetyPage />} />
          <Route path="/cancellation" element={<CancellationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          
        </Routes>
      </Layout>

      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        onLogin={handleLogin} 
      />
    </HashRouter>
  );
};

export default App;

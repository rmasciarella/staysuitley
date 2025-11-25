import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchWidgetProps {
  compact?: boolean;
}

export const SearchWidget: React.FC<SearchWidgetProps> = ({ compact = false }) => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [dates, setDates] = useState({ checkIn: '', checkOut: '' });
  const [guests, setGuests] = useState(2);
  const [activeTab, setActiveTab] = useState<'All' | 'Resort' | 'Business'>('All');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location) params.append('location', location);
    params.append('guests', guests.toString());
    if (activeTab !== 'All') params.append('type', activeTab);
    
    navigate(`/search?${params.toString()}`);
  };

  if (compact) {
    return (
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-2 w-full">
        <div className="relative flex-grow">
          <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
          <input 
            type="text" 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-gray-800 font-medium"
            placeholder="Where to?"
          />
        </div>
        <button type="submit" className="bg-brand-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-brand-500 transition-colors">
          Update
        </button>
      </form>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-4xl mx-auto relative z-20 -mt-10 md:-mt-20">
      <div className="mb-6 flex gap-6 text-sm font-semibold border-b border-gray-100 pb-4">
        <button 
          type="button"
          onClick={() => setActiveTab('All')}
          className={`${activeTab === 'All' ? 'text-brand-600 border-b-2 border-brand-600 pb-4 -mb-4.5' : 'text-gray-500 hover:text-gray-800 transition-colors'}`}
        >
          Hotels & Suites
        </button>
        <button 
          type="button"
          onClick={() => setActiveTab('Resort')}
          className={`${activeTab === 'Resort' ? 'text-brand-600 border-b-2 border-brand-600 pb-4 -mb-4.5' : 'text-gray-500 hover:text-gray-800 transition-colors'}`}
        >
          Resorts
        </button>
        <button 
          type="button"
          onClick={() => setActiveTab('Business')}
          className={`${activeTab === 'Business' ? 'text-brand-600 border-b-2 border-brand-600 pb-4 -mb-4.5' : 'text-gray-500 hover:text-gray-800 transition-colors'}`}
        >
          Business Travel
        </button>
      </div>
      
      <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
        {/* Location */}
        <div className="md:col-span-4 space-y-1">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Location</label>
          <div className="relative group">
            <MapPin className="absolute left-3 top-3.5 text-gray-400 group-hover:text-brand-500 transition-colors" size={20} />
            <input 
              type="text" 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-10 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-gray-900 font-semibold text-lg transition-all"
              placeholder="Where are you going?"
            />
          </div>
        </div>

        {/* Dates */}
        <div className="md:col-span-4 space-y-1">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Check-in / Out</label>
          <div className="relative group">
            <Calendar className="absolute left-3 top-3.5 text-gray-400 group-hover:text-brand-500 transition-colors" size={20} />
            <div className="grid grid-cols-2 gap-0 bg-gray-50 border border-gray-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-brand-500">
              <input 
                type="text" 
                placeholder="Check In"
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => e.target.type = 'text'}
                className="w-full pl-10 pr-2 py-3.5 bg-transparent outline-none text-gray-900 font-medium border-r border-gray-200"
              />
              <input 
                 type="text" 
                placeholder="Check Out"
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => e.target.type = 'text'}
                className="w-full pl-4 pr-2 py-3.5 bg-transparent outline-none text-gray-900 font-medium"
              />
            </div>
          </div>
        </div>

        {/* Guests */}
        <div className="md:col-span-2 space-y-1">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Guests</label>
          <div className="relative group">
            <Users className="absolute left-3 top-3.5 text-gray-400 group-hover:text-brand-500 transition-colors" size={20} />
            <select 
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full pl-10 pr-8 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-gray-900 font-semibold appearance-none cursor-pointer"
            >
              <option value={1}>1 Guest</option>
              <option value={2}>2 Guests</option>
              <option value={3}>3 Guests</option>
              <option value={4}>4+ Guests</option>
            </select>
            <div className="absolute right-3 top-4 pointer-events-none">
              <ChevronRight className="rotate-90 text-gray-400" size={16} />
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="md:col-span-2">
          <button 
            type="submit" 
            className="w-full h-[54px] bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
          >
            <Search size={22} strokeWidth={3} />
            <span>Search</span>
          </button>
        </div>
      </form>

      {/* Trust Badges */}
      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-center gap-6 md:gap-12 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2 text-gray-500 min-w-max">
           <div className="w-2 h-2 rounded-full bg-green-500"></div>
           <span className="text-xs font-medium uppercase tracking-wide">Best Price Guarantee</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500 min-w-max">
           <div className="w-2 h-2 rounded-full bg-blue-500"></div>
           <span className="text-xs font-medium uppercase tracking-wide">No Hidden Cleaning Fees</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500 min-w-max">
           <div className="w-2 h-2 rounded-full bg-purple-500"></div>
           <span className="text-xs font-medium uppercase tracking-wide">24/7 Concierge Support</span>
        </div>
      </div>
    </div>
  );
};
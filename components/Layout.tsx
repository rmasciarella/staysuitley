import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User as UserIcon, LogOut, Briefcase, Search, Globe, ShieldCheck, Facebook } from 'lucide-react';
import { User } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  user: User | null;
  onLogout: () => void;
  onOpenAuth: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, user, onLogout, onOpenAuth }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isAuthPage = location.pathname === '/login';

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-brand-600 text-white p-2 rounded-lg group-hover:bg-brand-500 transition-colors">
                <Briefcase size={24} strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold tracking-tight text-luxury-900">
                Stay<span className="text-brand-600">Suitley</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">Home</Link>
              <Link to="/search" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">Hotels</Link>
              <Link to="/search?type=Business" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">Business</Link>
              
              <div className="h-6 w-px bg-gray-200 mx-2"></div>
              
              {user ? (
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-700">Hi, {user.name.split(' ')[0]}</span>
                  <button 
                    onClick={onLogout}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-full transition-colors"
                  >
                    <LogOut size={16} />
                    Sign Out
                  </button>
                </div>
              ) : (
                <button 
                  onClick={onOpenAuth}
                  className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-500 rounded-full shadow-lg shadow-brand-500/20 transition-all hover:-translate-y-0.5"
                >
                  <UserIcon size={18} />
                  Sign In
                </button>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
            <div className="px-4 py-6 space-y-4">
              <Link to="/" className="block text-lg font-medium text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/search" className="block text-lg font-medium text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Hotels</Link>
              <Link to="/search?type=Business" className="block text-lg font-medium text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Business</Link>
              <div className="h-px bg-gray-100 my-2"></div>
              {user ? (
                <button onClick={() => { onLogout(); setIsMobileMenuOpen(false); }} className="block w-full text-left text-lg font-medium text-red-600">
                  Sign Out
                </button>
              ) : (
                <button onClick={() => { onOpenAuth(); setIsMobileMenuOpen(false); }} className="block w-full text-left text-lg font-medium text-brand-600">
                  Sign In / Sign Up
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      {!isAuthPage && (
        <footer className="bg-luxury-900 text-white pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <Briefcase size={20} className="text-white" />
                  </div>
                  <span className="text-xl font-bold">StaySuitley</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Rediscover the joy of full-service hospitality. We curate the best hotel experiences worldwide, offering a consistent, premium alternative to rental roulette.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                  <li><Link to="/press" className="hover:text-white transition-colors">Press</Link></li>
                  <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Support</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                  <li><Link to="/safety" className="hover:text-white transition-colors">Safety Information</Link></li>
                  <li><Link to="/cancellation" className="hover:text-white transition-colors">Cancellation Options</Link></li>
                  <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Trust & Safety</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="text-emerald-500 mt-1" size={20} />
                    <p className="text-gray-400 text-sm">Verified hotels with 24/7 front desk security and standardized cleaning protocols.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="text-brand-500 mt-1" size={20} />
                    <p className="text-gray-400 text-sm">Global support network available in 30+ languages.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">© 2024 Stay Suitley Inc. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <div className="flex gap-6 text-gray-500 text-sm">
                  <Link to="/privacy" className="hover:text-white">Privacy</Link>
                  <Link to="/terms" className="hover:text-white">Terms</Link>
                  <Link to="/sitemap" className="hover:text-white">Sitemap</Link>
                </div>
                <a 
                  href="https://www.facebook.com/profile.php?id=61575114435134" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-500 hover:text-[#1877F2] transition-colors"
                  aria-label="Visit us on Facebook"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

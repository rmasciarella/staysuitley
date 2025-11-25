import React, { useState } from 'react';
import { User, Lock, Mail, Loader2, CheckCircle, X, Sparkles } from 'lucide-react';
import { User as UserType } from '../types';
import { MOCK_USER, PREFERENCE_OPTIONS } from '../constants';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: UserType) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [preferences, setPreferences] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const togglePreference = (pref: string) => {
    if (preferences.includes(pref)) {
      setPreferences(preferences.filter(p => p !== pref));
    } else {
      if (preferences.length < 3) {
        setPreferences([...preferences, pref]);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      if (email.includes('error')) {
        setError('Invalid credentials. Please try again.');
        return;
      }
      
      // Construct user object
      const user: UserType = isLogin ? {
        ...MOCK_USER,
        email: email || MOCK_USER.email,
        preferences: MOCK_USER.preferences // Use mock preferences for login demo
      } : {
        id: `u-${Date.now()}`,
        email,
        name: name || 'Traveler',
        avatar: `https://ui-avatars.com/api/?name=${name || 'Traveler'}&background=0ea5e9&color=fff`,
        preferences: preferences.length > 0 ? preferences : ['Business']
      };

      onLogin(user);
      onClose();
    }, 1500);
  };

  return (
    <div 
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-all z-20"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="bg-brand-600 p-8 text-center">
          <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mx-auto mb-4">
             <User className="text-white" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-1">
            {isLogin ? 'Welcome Back' : 'Join Stay Suitley'}
          </h2>
          <p className="text-brand-100 text-sm">
            {isLogin ? 'Access your trips and rewards' : 'Start your premium travel journey'}
          </p>
        </div>

        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex Traveler"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                />
              </div>
            )}

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                />
              </div>
            </div>

            {!isLogin && (
              <div className="space-y-2 pt-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Sparkles size={14} className="text-brand-500" />
                  Customize Your Feed (Pick up to 3)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {PREFERENCE_OPTIONS.map(opt => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => togglePreference(opt)}
                      className={`text-xs px-3 py-2 rounded-lg border transition-all ${
                        preferences.includes(opt) 
                          ? 'bg-brand-50 border-brand-500 text-brand-700 font-medium' 
                          : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {error && (
              <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg flex items-center gap-2">
                 <X size={14} /> {error}
              </div>
            )}

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-brand-600 text-white py-3 rounded-lg font-semibold shadow-lg shadow-brand-500/20 hover:bg-brand-500 transition-all flex items-center justify-center gap-2 mt-4"
            >
              {loading ? (
                <><Loader2 size={18} className="animate-spin" /> Processing...</>
              ) : (
                isLogin ? 'Sign In' : 'Create Account'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="text-brand-600 font-semibold hover:underline"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

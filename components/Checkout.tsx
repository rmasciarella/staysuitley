import React, { useState } from 'react';
import { CreditCard, Lock, Loader2, CheckCircle, Shield } from 'lucide-react';

interface CheckoutProps {
  total: number;
  onSuccess: () => void;
}

export const Checkout: React.FC<CheckoutProps> = ({ total, onSuccess }) => {
  const [processing, setProcessing] = useState(false);
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);

    // Simulate Stripe Processing
    setTimeout(() => {
      setProcessing(false);
      onSuccess();
    }, 2000);
  };

  // Basic formatting for visual realism
  const formatCardNumber = (val: string) => {
    return val.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim().slice(0, 19);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900">Payment Details</h3>
        <div className="flex gap-2">
            {/* Payment Method Icons (Simulated) */}
            <div className="bg-gray-100 rounded px-2 py-1 text-xs font-bold text-gray-600">VISA</div>
            <div className="bg-gray-100 rounded px-2 py-1 text-xs font-bold text-gray-600">MC</div>
            <div className="bg-gray-100 rounded px-2 py-1 text-xs font-bold text-gray-600">AMEX</div>
        </div>
      </div>

      <form onSubmit={handlePayment} className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Cardholder Name</label>
          <input 
            type="text" 
            required
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none transition-all"
            placeholder="John Doe"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Card Number</label>
          <div className="relative">
            <CreditCard className="absolute left-3 top-3 text-gray-400" size={20} />
            <input 
              type="text" 
              required
              value={cardNumber}
              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none transition-all font-mono"
              placeholder="0000 0000 0000 0000"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Expiration</label>
            <input 
              type="text" 
              required
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none transition-all text-center"
              placeholder="MM/YY"
              maxLength={5}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">CVC</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={16} />
              <input 
                type="password" 
                required
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                placeholder="123"
                maxLength={4}
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3">
          <Shield className="text-green-600 flex-shrink-0" size={20} />
          <p className="text-xs text-gray-500">
            Payments are processed securely via Stripe. Your card information is encrypted and never stored on our servers.
          </p>
        </div>

        <button 
          type="submit" 
          disabled={processing}
          className="w-full bg-brand-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-brand-500/25 hover:bg-brand-500 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {processing ? (
            <><Loader2 size={24} className="animate-spin" /> Processing Payment...</>
          ) : (
            `Pay $${total}`
          )}
        </button>
      </form>
    </div>
  );
};
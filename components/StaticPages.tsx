import React, { useState } from 'react';
import { Shield, Users, Globe, Clock, MapPin, Mail, Phone, ChevronRight, CheckCircle, FileText, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// --- Company Pages ---

export const AboutPage = () => (
  <div className="bg-white">
    <div className="relative h-[400px] bg-gray-900 flex items-center justify-center">
      <img 
        src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1600&q=80" 
        alt="Hotel Lobby" 
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="relative z-10 text-center text-white max-w-2xl px-4">
        <h1 className="text-5xl font-bold mb-6">Redefining Hospitality</h1>
        <p className="text-xl text-gray-200">We are on a mission to bring the magic back to hotel stays.</p>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Stay Suitley was born from a simple observation: the "home sharing" revolution had lost its way. What started as a way to connect with locals turned into a landscape of chore lists, hidden cleaning fees, and inconsistent quality.
            </p>
            <p>
              We realized that travelers missed the feeling of being taken care of. They missed crisp sheets they didn't have to wash themselves, 24/7 concierge support, and the safety of professional establishments.
            </p>
            <p>
              Our platform aggregates the world's finest hotels, resorts, and boutique stays, using AI to match you with the perfect room for your style. No chores. No surprises. Just travel.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80" className="rounded-2xl shadow-lg mt-8" alt="Luxury Pool" />
          <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80" className="rounded-2xl shadow-lg" alt="Resort View" />
        </div>
      </div>
    </div>
  </div>
);

export const CareersPage = () => (
  <div className="bg-gray-50 min-h-screen py-20 px-4">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Join the Team</h1>
        <p className="text-xl text-gray-600">Help us build the future of travel tech.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
        <div className="p-8 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900">Why Stay Suitley?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <div className="p-8 text-center">
            <div className="bg-brand-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-600">
              <Globe size={24} />
            </div>
            <h3 className="font-bold mb-2">Remote First</h3>
            <p className="text-sm text-gray-500">Work from anywhere. We believe in output, not hours in a chair.</p>
          </div>
          <div className="p-8 text-center">
            <div className="bg-brand-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-600">
              <Users size={24} />
            </div>
            <h3 className="font-bold mb-2">Diverse Team</h3>
            <p className="text-sm text-gray-500">We are builders from 15+ countries bringing unique perspectives.</p>
          </div>
          <div className="p-8 text-center">
            <div className="bg-brand-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-600">
              <Shield size={24} />
            </div>
            <h3 className="font-bold mb-2">Great Benefits</h3>
            <p className="text-sm text-gray-500">Full health coverage, travel stipends, and competitive equity.</p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-6">Open Positions</h3>
      <div className="space-y-4">
        {[
          { role: 'Senior Frontend Engineer', dept: 'Engineering', loc: 'Remote (US/EU)' },
          { role: 'Product Designer', dept: 'Design', loc: 'New York, NY' },
          { role: 'Head of Partnerships', dept: 'Business', loc: 'London, UK' },
          { role: 'Customer Success Lead', dept: 'Support', loc: 'Remote' },
        ].map((job, i) => (
          <div
            key={i}
            onClick={() => alert(`Apply for ${job.role} position. Full application system coming soon!`)}
            className="bg-white p-6 rounded-xl border border-gray-200 hover:border-brand-300 hover:shadow-md transition-all flex justify-between items-center cursor-pointer group"
          >
            <div>
              <h4 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors">{job.role}</h4>
              <p className="text-sm text-gray-500">{job.dept} · {job.loc}</p>
            </div>
            <ArrowRight className="text-gray-300 group-hover:text-brand-600" size={20} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const PressPage = () => (
  <div className="bg-white min-h-screen py-20 px-4">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-12 border-b border-gray-100 pb-8">Newsroom</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Latest News</h2>
          <div className="space-y-8">
            {[
              { date: 'Oct 24, 2024', title: 'Stay Suitley Raises Series B to Expand AI Concierge' },
              { date: 'Sep 10, 2024', title: 'New Partnership with Global Luxury Hotel Group Announced' },
              { date: 'Aug 05, 2024', title: 'Travel Trends Report: The Return of the Hotel Service' },
            ].map((news, i) => (
              <div
                key={i}
                onClick={() => alert(`Full press release: ${news.title}`)}
                className="group cursor-pointer"
              >
                <span className="text-sm text-brand-600 font-semibold">{news.date}</span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:underline mt-1">{news.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">Read the full press release <ArrowRight size={14} className="inline" /></p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-2xl h-fit">
          <h2 className="text-xl font-bold mb-4">Media Inquiries</h2>
          <p className="text-gray-600 mb-6">For interviews, brand assets, or general press questions, please contact our communications team.</p>
          <a href="mailto:press@staysuitely.com" className="text-brand-600 font-bold hover:underline flex items-center gap-2">
            <Mail size={18} /> press@staysuitely.com
          </a>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="font-bold mb-2">Brand Assets</h3>
            <button
              onClick={() => alert('Downloading media kit... (Demo mode)')}
              className="text-sm bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 font-medium"
            >
              Download Media Kit (ZIP)
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const BlogPage = () => (
  <div className="bg-gray-50 min-h-screen py-20 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">The Suitcase</h1>
        <p className="text-xl text-gray-600">Travel tips, destination guides, and hotel stories.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80', cat: 'Destinations', title: '10 Hidden Gems in the South of France' },
          { img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80', cat: 'Tips', title: 'How to Maximize Your Credit Card Points for Upgrades' },
          { img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80', cat: 'Lifestyle', title: 'Why "Bleisure" Travel is Taking Over 2024' },
          { img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80', cat: 'Hotels', title: 'The World\'s Most Historic Hotel Bars' },
          { img: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80', cat: 'Destinations', title: 'A Weekend Guide to Kyoto' },
          { img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80', cat: 'Wellness', title: 'Top 5 Spa Resorts for Digital Detox' },
        ].map((post, i) => (
          <div
            key={i}
            onClick={() => alert(`Read full article: ${post.title}`)}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group"
          >
            <div className="h-48 overflow-hidden">
              <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <span className="text-xs font-bold text-brand-600 uppercase tracking-wide">{post.cat}</span>
              <h3 className="text-xl font-bold text-gray-900 mt-2 group-hover:text-brand-600 transition-colors">{post.title}</h3>
              <p className="text-gray-500 text-sm mt-3 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center text-sm text-gray-400">
                <span>5 min read</span>
                <span className="mx-2">•</span>
                <span>Oct {10 + i}, 2024</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- Support Pages ---

export const HelpCenterPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      alert(`Searching for: "${searchQuery}"\n\nResults would appear here with relevant help articles.`);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-brand-600 py-20 text-center px-4">
        <h1 className="text-4xl font-bold text-white mb-6">How can we help?</h1>
        <div className="max-w-2xl mx-auto relative">
          <input
            type="text"
            placeholder="Search for articles (e.g., cancellation, payment, check-in)"
            className="w-full pl-6 pr-4 py-4 rounded-full shadow-lg outline-none text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button
            onClick={handleSearch}
            className="absolute right-2 top-2 bg-brand-800 text-white px-6 py-2 rounded-full font-medium hover:bg-brand-900"
          >
            Search
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: FileText, title: 'Booking & Payments' },
            { icon: Shield, title: 'Safety & Security' },
            { icon: Users, title: 'Account Settings' },
          ].map((cat, i) => (
            <div
              key={i}
              onClick={() => alert(`Showing ${cat.title} articles...`)}
              className="border border-gray-200 p-6 rounded-xl hover:border-brand-500 hover:shadow-md transition-all cursor-pointer text-center"
            >
              <div className="bg-brand-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-600">
                <cat.icon size={24} />
              </div>
              <h3 className="font-bold text-gray-900">{cat.title}</h3>
            </div>
          ))}
        </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          { q: 'What is your cancellation policy?', a: 'Most hotels on Stay Suitley offer free cancellation up to 48 hours before check-in. Specific policies are listed on the booking page.' },
          { q: 'Do you charge booking fees?', a: 'We pride ourselves on transparency. The price you see includes all taxes and service fees. No hidden "cleaning fees" ever.' },
          { q: 'How do I modify my reservation?', a: 'You can modify dates or guests from your "My Trips" dashboard. Changes are subject to hotel availability.' },
          { q: 'Is my payment information secure?', a: 'Yes. We use industry-standard encryption and process payments via Stripe. We never store your full card details.' },
        ].map((faq, i) => (
          <details key={i} className="group bg-gray-50 rounded-xl p-4 cursor-pointer">
            <summary className="flex justify-between items-center font-bold text-gray-900 list-none">
              {faq.q}
              <ChevronRight className="transform group-open:rotate-90 transition-transform text-gray-400" size={20} />
            </summary>
            <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
          </details>
        ))}
      </div>
    </div>
  </div>
  );
};

export const SafetyPage = () => (
  <div className="bg-white min-h-screen py-16 px-4">
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Shield size={40} className="text-brand-600" />
        <h1 className="text-4xl font-bold text-gray-900">Trust & Safety</h1>
      </div>
      <p className="text-xl text-gray-600 mb-12">
        Your safety is non-negotiable. Here is how we ensure every stay is secure, clean, and professional.
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Verified Properties Only</h2>
          <p className="text-gray-600 mb-4">
            Unlike peer-to-peer rental platforms, we strictly partner with licensed, professional hotels and resorts. 
            Every property on Stay Suitley undergoes a 50-point verification check including:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {['24/7 Front Desk Staff', 'Professional Security', 'Fire Safety Certification', 'Electronic Key Card Access', 'Background Checked Staff', 'Safe Deposit Boxes'].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700">
                <CheckCircle size={16} className="text-green-500" /> {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cleanliness Promise</h2>
          <p className="text-gray-600">
            Professional housekeeping is standard. Linens are industrially laundered at high temperatures. High-touch surfaces are sanitized daily. 
            You will never be asked to do laundry or take out trash before you leave.
          </p>
        </section>

        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex items-start gap-4">
           <Phone className="text-blue-600 mt-1" size={24} />
           <div>
             <h3 className="font-bold text-blue-900">24/7 Safety Line</h3>
             <p className="text-blue-700 text-sm mt-1">
               In the unlikely event of an emergency, our global safety team is available round-the-clock to assist you, coordinate with local authorities, and ensure your well-being.
             </p>
             <div className="mt-3 font-bold text-blue-800">+1 (888) STAY-SAFE</div>
           </div>
        </div>
      </div>
    </div>
  </div>
);

export const CancellationPage = () => (
  <div className="bg-gray-50 min-h-screen py-16 px-4">
    <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Cancellation Options</h1>
      <p className="text-gray-600 mb-8">
        Life happens. We believe you shouldn't be penalized for changing plans. 
        That's why 95% of our bookings are fully refundable.
      </p>

      <div className="space-y-6">
        <div className="border border-green-200 bg-green-50 p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
             <CheckCircle className="text-green-600" />
             <h3 className="text-xl font-bold text-green-900">Flexible Rate (Recommended)</h3>
          </div>
          <p className="text-green-800 mb-4">
            Free cancellation until 24-48 hours before check-in. No questions asked. Refund processed immediately to your original payment method.
          </p>
          <ul className="text-sm text-green-700 space-y-1 ml-9 list-disc">
             <li>Cancel in-app with one tap</li>
             <li>Full refund including service fees</li>
             <li>Modify dates without penalty</li>
          </ul>
        </div>

        <div className="border border-gray-200 p-6 rounded-xl opacity-75">
          <div className="flex items-center gap-3 mb-2">
             <Clock className="text-gray-500" />
             <h3 className="text-xl font-bold text-gray-700">Non-Refundable Rate</h3>
          </div>
          <p className="text-gray-600 mb-4">
            A slightly lower price for travelers with fixed plans. 
          </p>
          <ul className="text-sm text-gray-500 space-y-1 ml-9 list-disc">
             <li>No refund upon cancellation</li>
             <li>Dates cannot be changed</li>
             <li>Typically saves 10-15%</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-gray-100">
        <h4 className="font-bold text-gray-900 mb-2">Extenuating Circumstances</h4>
        <p className="text-gray-500 text-sm">
          If you need to cancel due to documented emergencies (e.g., jury duty, travel bans, severe illness), please contact our support team for review.
        </p>
      </div>
    </div>
  </div>
);

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      }, 3000);
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="bg-white min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-gray-600 mb-12">
            Have a question about a booking, or interested in partnering with us? Fill out the form and we'll be in touch.
          </p>

        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="bg-brand-50 p-3 rounded-lg text-brand-600">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Headquarters</h3>
              <p className="text-gray-600">123 Hospitality Lane<br/>Suite 400<br/>San Francisco, CA 94105</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-brand-50 p-3 rounded-lg text-brand-600">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Email</h3>
              <p className="text-gray-600">support@staysuitely.com<br/>partners@staysuitely.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-brand-50 p-3 rounded-lg text-brand-600">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Phone</h3>
              <p className="text-gray-600">+1 (888) 123-4567<br/><span className="text-sm text-gray-400">Mon-Fri, 9am - 6pm PST</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
        {submitted ? (
          <div className="text-center py-12">
            <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
            <p className="text-gray-600">We'll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-bold text-gray-700 block mb-1">First Name</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 outline-none"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-bold text-gray-700 block mb-1">Last Name</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 outline-none"
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-1">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-1">Message</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 outline-none"
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition-colors">
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  </div>
  );
};

// --- Legal Pages ---

export const PrivacyPage = () => (
  <div className="bg-gray-50 min-h-screen py-16 px-4">
    <div className="max-w-3xl mx-auto bg-white p-12 rounded-2xl shadow-sm">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-gray-500 text-sm mb-8">Last Updated: October 1, 2024</p>
      
      <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
        <p>At Stay Suitley, we take your privacy seriously. This policy describes how we collect, use, and protect your personal data.</p>
        
        <h3 className="text-gray-900 font-bold text-lg">1. Information We Collect</h3>
        <p>We collect information you provide directly to us, such as when you create an account, make a booking, or contact support. This includes:</p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Contact information (name, email, phone number)</li>
          <li>Payment information (processed securely via Stripe)</li>
          <li>Travel preferences and history</li>
        </ul>

        <h3 className="text-gray-900 font-bold text-lg">2. How We Use Your Data</h3>
        <p>We use your data to:</p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Facilitate bookings with our hotel partners</li>
          <li>Provide AI-powered recommendations</li>
          <li>Send booking confirmations and updates</li>
        </ul>

        <h3 className="text-gray-900 font-bold text-lg">3. Data Sharing</h3>
        <p>We do not sell your personal data. We only share data with:</p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Hotels (for the purpose of your reservation)</li>
          <li>Service providers (hosting, payment processing)</li>
          <li>Legal authorities when required by law</li>
        </ul>
      </div>
    </div>
  </div>
);

export const TermsPage = () => (
  <div className="bg-gray-50 min-h-screen py-16 px-4">
    <div className="max-w-3xl mx-auto bg-white p-12 rounded-2xl shadow-sm">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
      <p className="text-gray-500 text-sm mb-8">Last Updated: October 1, 2024</p>
      
      <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
        <p>Welcome to Stay Suitley. By accessing our platform, you agree to these terms.</p>
        
        <h3 className="text-gray-900 font-bold text-lg">1. Scope of Service</h3>
        <p>Stay Suitley acts as an agent to facilitate hotel bookings. The contract for the stay is directly between you and the hotel property.</p>

        <h3 className="text-gray-900 font-bold text-lg">2. User Responsibilities</h3>
        <p>You agree to provide accurate information and conduct yourself respectfully during your stays. Any damage caused to hotel property is your sole responsibility.</p>

        <h3 className="text-gray-900 font-bold text-lg">3. Cancellations and Refunds</h3>
        <p>Cancellations are governed by the policy selected at the time of booking. We are not responsible for refunds on non-refundable rates unless specified by law.</p>

        <h3 className="text-gray-900 font-bold text-lg">4. Limitation of Liability</h3>
        <p>Stay Suitley is not liable for acts, errors, omissions, representations, warranties, breaches, or negligence of any hotel suppliers.</p>
      </div>
    </div>
  </div>
);

export const SitemapPage = () => (
  <div className="bg-white min-h-screen py-20 px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-12">Sitemap</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h3 className="font-bold text-gray-900 border-b border-gray-100 pb-2">Main</h3>
          <ul className="space-y-2 text-brand-600">
             <li><Link to="/" className="hover:underline">Home</Link></li>
             <li><Link to="/search" className="hover:underline">All Hotels</Link></li>
             <li><Link to="/search?type=Business" className="hover:underline">Business Travel</Link></li>
             <li><Link to="/search?type=Resort" className="hover:underline">Resorts</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold text-gray-900 border-b border-gray-100 pb-2">Company</h3>
          <ul className="space-y-2 text-brand-600">
             <li><Link to="/about" className="hover:underline">About Us</Link></li>
             <li><Link to="/careers" className="hover:underline">Careers</Link></li>
             <li><Link to="/press" className="hover:underline">Press</Link></li>
             <li><Link to="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold text-gray-900 border-b border-gray-100 pb-2">Support</h3>
          <ul className="space-y-2 text-brand-600">
             <li><Link to="/help" className="hover:underline">Help Center</Link></li>
             <li><Link to="/safety" className="hover:underline">Safety Information</Link></li>
             <li><Link to="/cancellation" className="hover:underline">Cancellation Options</Link></li>
             <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold text-gray-900 border-b border-gray-100 pb-2">Legal</h3>
          <ul className="space-y-2 text-brand-600">
             <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
             <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
             <li><Link to="/sitemap" className="hover:underline">Sitemap</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

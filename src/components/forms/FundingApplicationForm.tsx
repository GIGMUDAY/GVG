import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { X, Star } from 'lucide-react';

interface FundingApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const FundingApplicationForm: React.FC<FundingApplicationFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    business_name: '',
    contact_name: '',
    business_email: '',
    phone: '',
    business_type: '',
    business_sector: '',
    funding_amount: '',
    business_location: '',
    number_of_employees: '',
    business_description: '',
    funding_purpose: '',
    sustainability_impact: '',
    additional_info: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, 'funding_applications'), {
        ...formData,
        timestamp: new Date()
      });
      alert('Funding application submitted successfully!');
      setFormData({
        business_name: '',
        contact_name: '',
        business_email: '',
        phone: '',
        business_type: '',
        business_sector: '',
        funding_amount: '',
        business_location: '',
        number_of_employees: '',
        business_description: '',
        funding_purpose: '',
        sustainability_impact: '',
        additional_info: ''
      });
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-black/90 backdrop-blur-xl border border-white/20 rounded-lg max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl">
        <div className="flex justify-between items-center p-6 border-b border-white/10 flex-shrink-0">
          <h2 className="text-2xl font-bold text-white">Apply for Business Funding</h2>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="overflow-y-auto flex-1">
          <form onSubmit={handleSubmit} className="p-8 space-y-4">
              <div>
                <input
                  type="text"
                  name="business_name"
                  placeholder="Your Businessname"
                  value={formData.business_name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-black/40 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  name="contact_name"
                  placeholder="Full Name"
                  value={formData.contact_name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-black/40 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="business_email"
                  placeholder="business@example.com"
                  value={formData.business_email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-black/40 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-black/40 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                />
              </div>
              
              <div>
                <select
                  name="business_type"
                  value={formData.business_type}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-black/40 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                >
                  <option value="" className="bg-black text-white/50">Select Business type</option>
                  <option value="sole-proprietorship" className="bg-black text-white">Sole Proprietorship</option>
                  <option value="partnership" className="bg-black text-white">Partnership</option>
                  <option value="corporation" className="bg-black text-white">Corporation</option>
                  <option value="llc" className="bg-black text-white">LLC</option>
                  <option value="nonprofit" className="bg-black text-white">Nonprofit</option>
                </select>
              </div>
              
              <div>
                <select
                  name="business_sector"
                  value={formData.business_sector}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-black/40 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                >
                  <option value="" className="bg-black text-white/50">Select sector</option>
                  <option value="green-energy" className="bg-black text-white">Green Energy</option>
                  <option value="agriculture" className="bg-black text-white">Agriculture</option>
                  <option value="education" className="bg-black text-white">Education</option>
                  <option value="healthcare" className="bg-black text-white">Healthcare</option>
                  <option value="tech" className="bg-black text-white">Tech</option>
                  <option value="manufacturing" className="bg-black text-white">Manufacturing</option>
                  <option value="retail" className="bg-black text-white">Retail</option>
                  <option value="services" className="bg-black text-white">Services</option>
                </select>
              </div>
              
              <div>
                <input
                  type="number"
                  name="funding_amount"
                  placeholder="e.g., 50000"
                  value={formData.funding_amount}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-black/40 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                />
                <label className="block text-sm text-white/70 mt-1">Funding Amount Needed (USD)</label>
              </div>
              
              <div>
                <input
                  type="text"
                  name="business_location"
                  placeholder="City, Region, Ethiopia"
                  value={formData.business_location}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-black/40 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                />
              </div>
              
              <div>
                <select
                  name="number_of_employees"
                  value={formData.number_of_employees}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-black/40 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                >
                  <option value="" className="bg-black text-white/50">Select range</option>
                  <option value="1-5" className="bg-black text-white">1-5 employees</option>
                  <option value="6-20" className="bg-black text-white">6-20 employees</option>
                  <option value="21-50" className="bg-black text-white">21-50 employees</option>
                  <option value="51-100" className="bg-black text-white">51-100 employees</option>
                  <option value="100+" className="bg-black text-white">100+ employees</option>
                </select>
              </div>
              
              <div>
                <textarea
                  name="business_description"
                  placeholder="Describe your business, products/services, and target market..."
                  value={formData.business_description}
                  onChange={handleChange}
                  rows={3}
                  required
                  className="w-full p-3 bg-black/40 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all resize-none"
                />
              </div>
              
              <div>
                <textarea
                  name="funding_purpose"
                  placeholder="Explain how you plan to use the funding (expansion, equipment, marketing, etc.)..."
                  value={formData.funding_purpose}
                  onChange={handleChange}
                  rows={3}
                  required
                  className="w-full p-3 bg-black/40 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all resize-none"
                />
              </div>
              
              <div>
                <textarea
                  name="sustainability_impact"
                  placeholder="Describe how your business contributes to environmental or social sustainability..."
                  value={formData.sustainability_impact}
                  onChange={handleChange}
                  rows={3}
                  required
                  className="w-full p-3 bg-black/40 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all resize-none"
                />
              </div>
              
              <div>
                <textarea
                  name="additional_info"
                  placeholder="Any additional information you'd like to share..."
                  value={formData.additional_info}
                  onChange={handleChange}
                  rows={3}
                  className="w-full p-3 bg-black/40 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all resize-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white py-3 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium flex items-center justify-center gap-2 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50"
              >
                <Star className="h-5 w-5 fill-white" />
                {isSubmitting ? 'Submitting...' : 'Submit Funding Application'}
              </button>
            </form>
          </div>
      </div>
    </div>
  );
};

export default FundingApplicationForm;
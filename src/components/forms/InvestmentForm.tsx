import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { X, Star } from 'lucide-react';

interface InvestmentFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const InvestmentForm: React.FC<InvestmentFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investor_type: '',
    investment_amount: '',
    sector: '',
    investment_experience: '',
    investor_msg: ''
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
      await addDoc(collection(db, 'investments'), {
        ...formData,
        timestamp: new Date()
      });
      alert('Investment inquiry submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        investor_type: '',
        investment_amount: '',
        sector: '',
        investment_experience: '',
        investor_msg: ''
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
      <div className="bg-black/90 backdrop-blur-xl border border-white/20 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Start Your Investment Journey</h2>
            <p className="text-sm text-white/80">Fill out the form below and our team will contact you within 24 hours.</p>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-black/40 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
            />
          </div>
          
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
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
              className="w-full p-3 bg-black/40 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
            />
          </div>
          
          <div>
            <select
              name="investor_type"
              value={formData.investor_type}
              onChange={handleChange}
              className="w-full p-3 bg-black/40 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
            >
              <option value="" className="bg-black text-white/50">Select type</option>
              <option value="individual" className="bg-black text-white">Individual</option>
              <option value="institutional" className="bg-black text-white">Institutional</option>
            </select>
          </div>
          
          <div>
            <input
              type="number"
              name="investment_amount"
              placeholder="e.g., 10000"
              value={formData.investment_amount}
              onChange={handleChange}
              className="w-full p-3 bg-black/40 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
            />
            <label className="block text-sm text-white/70 mt-1">Investment Amount (USD)</label>
          </div>
          
          <div>
            <select
              name="sector"
              value={formData.sector}
              onChange={handleChange}
              className="w-full p-3 bg-black/40 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
            >
              <option value="" className="bg-black text-white/50">Select sector</option>
              <option value="green-energy" className="bg-black text-white">Green Energy</option>
              <option value="agriculture" className="bg-black text-white">Agriculture</option>
              <option value="education" className="bg-black text-white">Education</option>
              <option value="healthcare" className="bg-black text-white">Healthcare</option>
              <option value="tech" className="bg-black text-white">Tech</option>
            </select>
          </div>
          
          <div>
            <select
              name="investment_experience"
              value={formData.investment_experience}
              onChange={handleChange}
              className="w-full p-3 bg-black/40 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
            >
              <option value="" className="bg-black text-white/50">Select experience level</option>
              <option value="beginner" className="bg-black text-white">Beginner</option>
              <option value="intermediate" className="bg-black text-white">Intermediate</option>
              <option value="advanced" className="bg-black text-white">Advanced</option>
              <option value="expert" className="bg-black text-white">Expert</option>
            </select>
          </div>
          
          <div>
            <textarea
              name="investor_msg"
              placeholder="Tell us about your investment goals, questions, or any specific requirements..."
              value={formData.investor_msg}
              onChange={handleChange}
              rows={4}
              className="w-full p-3 bg-black/40 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all resize-none"
            />
            <label className="block text-sm text-white/70 mt-1">Additional Information</label>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white py-3 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium flex items-center justify-center gap-2 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50"
          >
            <Star className="h-5 w-5 fill-white" />
            {isSubmitting ? 'Submitting...' : 'Submit Investment Interest'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default InvestmentForm;
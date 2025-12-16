import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { X } from 'lucide-react';

interface GIGPlatformFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const GIGPlatformForm: React.FC<GIGPlatformFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    portfolio: '',
    bio: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, 'gig_platform_registrations'), {
        ...formData,
        timestamp: new Date()
      });
      alert('Registration submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        skills: '',
        portfolio: '',
        bio: ''
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
      <div className="bg-black/90 backdrop-blur-xl border border-white/20 rounded-lg max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl">
        <div className="flex justify-between items-center p-6 border-b border-white/10 flex-shrink-0">
          <h2 className="text-2xl font-bold text-white">GVG Platform Registration</h2>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="overflow-y-auto flex-1">
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">Full Name</label>
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
                  <label className="block text-sm font-medium text-white/90 mb-2">Phone Number</label>
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
                  <label className="block text-sm font-medium text-white/90 mb-2">Portfolio URL</label>
                  <input
                    type="url"
                    name="portfolio"
                    placeholder="https://example.com"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="w-full p-3 bg-black/40 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                  />
                </div>
              </div>
              
              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">Email</label>
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
                  <label className="block text-sm font-medium text-white/90 mb-2">Skills / Expertise</label>
                  <input
                    type="text"
                    name="skills"
                    placeholder="e.g., React, UX, PM"
                    value={formData.skills}
                    onChange={handleChange}
                    className="w-full p-3 bg-black/40 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                  />
                </div>
              </div>
            </div>
            
            {/* Bio - Full Width */}
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">Bio</label>
              <textarea
                name="bio"
                placeholder="Tell us about yourself"
                value={formData.bio}
                onChange={handleChange}
                rows={6}
                className="w-full p-3 bg-black/40 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all resize-y"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white py-3 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium shadow-lg shadow-green-500/30 hover:shadow-green-500/50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GIGPlatformForm;
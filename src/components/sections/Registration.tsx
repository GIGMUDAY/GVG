import React, { useState } from 'react';
import SectionHeading from '../SectionHeading';
import Button from '../Button';

const Registration: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    investmentAmount: '',
    investmentExperience: 'beginner',
    acceptTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <section id="registration" className="py-20 bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Start Your Investment Journey"
          subtitle="Complete the form below to begin investing in Ethiopia's sustainable future"
          centered={true}
        />

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Country of Residence
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="investmentAmount" className="block text-sm font-medium text-gray-700">
                  Planned Investment Amount (USD)
                </label>
                <input
                  type="number"
                  id="investmentAmount"
                  name="investmentAmount"
                  required
                  min="0"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  value={formData.investmentAmount}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="investmentExperience" className="block text-sm font-medium text-gray-700">
                  Investment Experience
                </label>
                <select
                  id="investmentExperience"
                  name="investmentExperience"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  value={formData.investmentExperience}
                  onChange={handleChange}
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="experienced">Experienced</option>
                </select>
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="acceptTerms"
                name="acceptTerms"
                required
                className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                checked={formData.acceptTerms}
                onChange={handleChange}
              />
              <label htmlFor="acceptTerms" className="ml-2 block text-sm text-gray-700">
                I agree to the terms and conditions and privacy policy
              </label>
            </div>

            <div className="flex justify-center mt-8">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full md:w-auto bg-green-600 hover:bg-green-700"
              >
                Submit Registration
              </Button>
            </div>
          </form>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>Already registered? <a href="#" className="text-green-600 hover:text-green-700 font-medium">Sign in here</a></p>
          <p className="mt-2">
            Questions? Contact us at{' '}
            <a
              href="mailto:contact@greeninvestmentgroup.com"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              contact@greeninvestmentgroup.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Registration;
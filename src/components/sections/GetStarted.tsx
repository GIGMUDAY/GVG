import React from 'react';
import SectionHeading from '../SectionHeading';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Button from '../Button';

const GetStarted: React.FC = () => {
  return (
    <section id="get-started" className="py-20 bg-gradient-to-br from-green-50 via-green-100 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get Started with GVG Token"
          subtitle="Follow these simple steps to begin your journey with GVG Token"
          centered={true}
        />

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-green-600">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Create Your Account</h3>
            <p className="text-gray-600 mb-6">
              Sign up for a GVG Token account to access our dashboard and investment opportunities.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-600">Quick and secure registration</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-600">KYC verification process</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-600">Set up 2FA security</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-green-600">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Fund Your Wallet</h3>
            <p className="text-gray-600 mb-6">
              Add funds to your wallet to start investing in GVG Token and sustainable projects.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-600">Multiple payment options</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-600">Secure transactions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-600">Real-time balance updates</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-green-600">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Start Investing</h3>
            <p className="text-gray-600 mb-6">
              Browse and invest in vetted sustainable projects across Ethiopia.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-600">Curated investment opportunities</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-600">Transparent project metrics</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-600">Regular performance updates</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center">Ready to Begin?</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              className="flex items-center justify-center bg-green-600 hover:bg-green-700"
            >
              Create Account <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="flex items-center justify-center border-green-600 text-green-600 hover:bg-green-50"
            >
              Learn More
            </Button>
          </div>
          <p className="mt-6 text-center text-gray-600">
            Need help getting started? Contact our support team at{' '}
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

export default GetStarted;
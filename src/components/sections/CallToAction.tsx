import React from 'react';
import Button from '../Button';
import FundingApplicationForm from '../forms/FundingApplicationForm';
import InvestmentForm from '../forms/InvestmentForm';

const CallToAction: React.FC = () => {
  const [fundingFormOpen, setFundingFormOpen] = React.useState(false);
  const [investFormOpen, setInvestFormOpen] = React.useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          The Future is Green. The Future is GVG. Be Part of It.
        </h2>
        <p className="text-xl text-green-50 max-w-3xl mx-auto mb-10">
          Join us in revolutionizing diaspora investment and empowering local Ethiopian businesses for a more sustainable and equitable world.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="primary" 
            size="lg"
            className="bg-white text-green-700 hover:bg-gray-100 font-bold"
            onClick={() => setInvestFormOpen(true)}
          >
            Invest in GVG Token Today
          </Button>
          <Button 
            variant="secondary" 
            size="lg"
            className="border-white text-white hover:bg-green-600/20 font-bold"
            onClick={() => setFundingFormOpen(true)}
          >
            Businesses: Apply for Funding
          </Button>
        </div>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
          <a href="#" className="text-green-200 hover:text-white hover:underline transition-colors">
            Explore Our Full Whitepaper
          </a>
          <a href="#faq" className="text-green-200 hover:text-white hover:underline transition-colors">
            Frequently Asked Questions (FAQs)
          </a>
          <a href="#" className="text-green-200 hover:text-white hover:underline transition-colors">
            Meet the Team
          </a>
          <a href="#" className="text-green-200 hover:text-white hover:underline transition-colors">
            Our Roadmap
          </a>
        </div>
        
        {/* Newsletter signup */}
        <div className="mt-12 max-w-md mx-auto">
          <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
          <form className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-4 py-2 rounded-md bg-white/10 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button 
              type="submit" 
              className="bg-white text-green-700 font-medium px-6 py-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
        
        {/* Social media */}
        <div className="mt-12 flex justify-center space-x-6">
          <a 
            href="https://x.com/GIG_Ethio" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-200 transition-colors"
          >
            Twitter
          </a>
          <a 
            href="https://t.me/GIG_Token" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-200 transition-colors"
          >
            Telegram
          </a>
          <a 
            href="https://api.whatsapp.com/send?phone=14085053734" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-200 transition-colors"
          >
            WhatsApp
          </a>
          <a 
            href="https://www.instagram.com/greeninvestmentgroups/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-200 transition-colors"
          >
            Instagram
          </a>
          <a 
            href="https://www.linkedin.com/company/green-investment-groups" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-200 transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://web.facebook.com/profile.php?id=61576776887293" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-200 transition-colors"
          >
            Facebook
          </a>
          <a 
            href="https://www.youtube.com/@Greeninvestmentgroups" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-200 transition-colors"
          >
            YouTube
          </a>
        </div>
      </div>
      
      {/* Forms */}
      <FundingApplicationForm isOpen={fundingFormOpen} onClose={() => setFundingFormOpen(false)} />
      <InvestmentForm isOpen={investFormOpen} onClose={() => setInvestFormOpen(false)} />
    </section>
  );
};

export default CallToAction;
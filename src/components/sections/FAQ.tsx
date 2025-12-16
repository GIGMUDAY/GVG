import React from 'react';
import SectionHeading from '../SectionHeading';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: 'What is GVG Token and what does the Green Value Group (GVG) do?',
      answer: 'GVG Token is a blockchain-based investment tool created by the Green Value Group (GVG) to democratize access to sustainable investments. GVG aims to accelerate sustainable economic growth and innovation using blockchain and AI-driven automation. The group focuses on providing transparent funding and operational support to small businesses, gig workers, impactful ventures, and diaspora communities, particularly targeting industries like Ethiopian coffee export, steel manufacturing, civil engineering/design outsourcing, and digital/AI technology services.'
    },
    {
      question: 'How can I use GVG Token?',
      answer: 'GVG Token allows individuals to participate in and benefit from sustainable projects across Ethiopia and the United States. It converts assets and project equities into digital tokens, enabling fractional investments. The token also facilitates transactions, supports DeFi (Decentralized Finance) activities like staking, lending, and borrowing, and empowers token holders to participate in governance decisions. You can manage your GVG Tokens and transaction history via the GVG Token Dashboard, which also provides access to resources like whitepapers and market insights.'
    },
    {
      question: 'What technologies does GVG use for its operations?',
      answer: 'GVG leverages a variety of technologies including blockchain (specifically Polygon network for GVG Token), AI-driven analytics, and automation tools like Telegram bots. Their tech stack includes Heroku for hosting, Flask for web applications, PostgreSQL for databases, and integrations with AI frameworks such as GPT-4 and OpenAI APIs. They utilize smart contracts for transparent and secure transactions, and the GVG Marketing Team Bot is used for campaign management, task assignment, client management, and automated alerts.'
    },
    {
      question: 'How does GVG mitigate risks for investments?',
      answer: 'GVG employs a phased funding disbursement tied directly to business performance and defined KPIs. This means funds are released incrementally as projects meet certain targets, ensuring early identification and management of operational challenges. They also use transparent monitoring with real-time analytics and reporting, alongside a decentralized governance structure to ensure collective oversight. Additionally, robust compliance and due diligence processes are in place to minimize legal and financial risks.'
    },
    {
      question: 'How can I deploy and integrate the GVG Marketing Team Bot for my startup?',
      answer: 'You can set up the GVG Marketing Team Bot by configuring permissions and inline mode via Telegram\'s BotFather. After setting commands and verifying bot creation, you should onboard your team through an orientation and demo of key functionalities. Launch a pilot campaign with a small project, collect feedback, and iterate. Then scale up, expand the campaign scope, and monitor regularly with analytics.'
    },
    {
      question: 'What kind of marketing strategies does GVG use?',
      answer: 'GVG uses a mix of digital and community-focused marketing strategies. These include hyper-personalized email campaigns, interactive content, micro-influencer partnerships, shoppable social media posts, local SEO, augmented reality previews, user-generated content campaigns, conversational marketing with chatbots, and leveraging Telegram for broadcasting updates, AMAs, and workshops via live streaming. They also utilize targeted Twitter/X and LinkedIn campaigns to attract grants, collaborators, and investors.'
    },
    {
      question: 'How can I stay updated with GVG\'s activities and engage with the community?',
      answer: 'You can stay updated through GVG\'s Telegram channels, which are used for announcements, project updates, live streams, and Q&A sessions. The GVG Token Dashboard also provides resources and market insights. You can engage with the community by participating in live streams, giving feedback, and using GVG\'s Telegram bots for queries and interactions. Additionally, staying active on social media platforms where GVG has a presence (like Twitter and LinkedIn) is encouraged.'
    }
  ];

  return (
    <section id="faq" className="relative py-20 bg-slate-900/80 dark:bg-black/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about GVG Token and our ecosystem"
          centered={true}
          textColor="text-white"
        />
        
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/20 rounded-lg overflow-hidden mx-4 md:mx-0 bg-black/30 backdrop-blur-lg"
            >
              <button
                className="w-full px-4 md:px-6 py-3 md:py-4 text-left flex justify-between items-center hover:border-brand-green transition-colors text-white"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-sm md:text-base text-white pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-white/80 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-white/80 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-4 md:px-6 py-3 md:py-4 border-t border-white/20">
                  <p className="text-sm md:text-base text-white/80">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <p className="text-sm md:text-base text-white/80 px-4">
              Still have questions? Contact us at{' '}
              <a
                href="mailto:contact@greeninvestmentgroup.com"
                className="text-brand-green hover:text-brand-green/80 font-medium"
              >
                contact@greeninvestmentgroups.com
              </a>
            </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
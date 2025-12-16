import React from 'react';
import {
  MessageSquare,
  Linkedin,
  Facebook,
  Youtube,
  Instagram,
  Phone,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import Dock from './Dock';
import DockIcon from './DockIcon';
import DockSeparator from './DockSeparator';

type SocialLink = {
  name: string;
  icon: React.ElementType; // Component type
  href: string;
  color: string;
  bgColor: string;
};

const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks: SocialLink[] = [
    {
      name: 'X (Twitter)',
      icon: XIcon,
      href: 'https://x.com/GIG_Ethio',
      color: 'hover:text-gray-900',
      bgColor: 'hover:bg-gray-900/20',
    },
    {
      name: 'Telegram',
      icon: MessageSquare,
      href: 'https://t.me/Greeninvestmentgroups',
      color: 'hover:text-blue-500',
      bgColor: 'hover:bg-blue-500/20',
    },
    {
      name: 'WhatsApp',
      icon: Phone,
      href: 'https://api.whatsapp.com/send?phone=14085053734',
      color: 'hover:text-green-500',
      bgColor: 'hover:bg-green-500/20',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/greeninvestmentgroups/',
      color: 'hover:text-pink-500',
      bgColor: 'hover:bg-pink-500/20',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/green-investment-groups',
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-600/20',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://web.facebook.com/profile.php?id=61576776887293',
      color: 'hover:text-blue-700',
      bgColor: 'hover:bg-blue-700/20',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      href: 'https://www.youtube.com/@Greeninvestmentgroups',
      color: 'hover:text-red-500',
      bgColor: 'hover:bg-red-500/20',
    },
  ];

  return (
    <footer className="bg-black/30 backdrop-blur-lg text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="md:col-span-1">
            <div className="flex items-center mb-2">
              <img
                src="/GIG final-01.png"
                alt="Green Value Group"
                className="h-8 w-8 md:h-10 md:w-10 mr-2 brightness-0 invert"
              />
              <span className="text-base md:text-lg font-bold text-white">
                Green Value Group
              </span>
            </div>
            <p className="text-xs md:text-sm text-white/80 mb-2">
              Connecting Ethiopian diaspora investors with sustainable local
              businesses.
            </p>
            <p className="text-xs md:text-sm text-white/80">
              <a
                href="mailto:contact@greeninvestmentgroup.com"
                className="hover:text-brand-green transition-colors"
              >
                contact@greeninvestmentgroups.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-sm md:text-base font-semibold text-white mb-2 flex items-center justify-center">
              <MapPin className="h-4 w-4 mr-1 text-brand-green" />
              Our Location
            </h3>
            <div className="bg-black/40 backdrop-blur-md rounded-lg p-3 border border-white/20 border-l-4 border-l-brand-green">
              <p className="text-xs md:text-sm text-white/80 leading-relaxed text-center">
                Bole Bulbula 93 Mazoria
                <br />
                Kidus Buzayehu Commercial
                <br />
                5th Floor
                <br />
                <span className="text-brand-green font-medium">
                  Addis Ababa, Ethiopia
                </span>
              </p>
              <div className="mt-2 text-center">
                <a
                  href="https://maps.app.goo.gl/UrUYVrKS6KYSgups8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-brand-green hover:text-brand-green/80 transition-colors text-xs"
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  View on Map
                </a>
              </div>
              <div className="mt-2 rounded-lg overflow-hidden relative flex justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.6177234567!2d38.7614!3d9.0192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sBole%20Bulbula%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="120"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded"
                ></iframe>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm md:text-base font-semibold text-white mb-2">
              Contact Info
            </h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-3 w-3 text-brand-green mr-2" />
                <a
                  href="https://api.whatsapp.com/send?phone=14085053734"
                  className="text-white/80 hover:text-brand-green transition-colors text-xs"
                >
                  +1 (408) 505-3734
                </a>
              </div>
              <div className="flex items-center">
                <MessageSquare className="h-3 w-3 text-brand-green mr-2" />
                <a
                  href="https://t.me/Greeninvestmentgroups"
                  className="text-white/80 hover:text-brand-green transition-colors text-xs"
                >
                  Telegram Support
                </a>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="text-xs font-semibold text-white mb-2">
                Follow Us
              </h4>
              <div className="flex justify-center">
                <Dock className="bg-black/40 backdrop-blur-md border border-white/20 mb-0 mt-0">
                  {socialLinks.map((platform, index) => (
                    <React.Fragment key={platform.name}>
                      {index === 1 && <DockSeparator />}
                      <DockIcon href={platform.href}>
                        <div className="flex items-center justify-center w-8 h-8 text-white/80 hover:text-white transition-colors">
                          {(() => {
                            const Icon = platform.icon;
                            return <Icon className="w-4 h-4" />;
                          })()}
                          <span className="sr-only">{platform.name}</span>
                        </div>
                      </DockIcon>
                    </React.Fragment>
                  ))}
                </Dock>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs md:text-sm text-center md:text-left text-white/80">
            © {currentYear} Green Value Group. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

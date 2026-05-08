import React from 'react';
import { Dumbbell, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CopyableEmail from './CopyableEmail';

const TikTokIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Footer = () => {
  const { t } = useTranslation();


  const quickLinks = [
    { key: 'home', id: 'home' },
    { key: 'about', id: 'about' },
    { key: 'programs', id: 'programs' },
    { key: 'coaches', id: 'coaches' },
    { key: 'pricing', id: 'pricing' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-[#050505] text-[#0A0A0A] dark:text-white pt-24 pb-12 border-t border-gray-100 dark:border-white/5">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10">
                <img src="/logo.jpg" alt={t('footer.logoAlt')} className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-2xl tracking-tighter">
                FITNESS<span className="text-brand">ZONE</span>
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61569686511748#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-200/50 dark:bg-white/5 flex items-center justify-center hover:bg-brand hover:text-white transition-colors"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href="https://www.instagram.com/fitnesszone.dz/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-200/50 dark:bg-white/5 flex items-center justify-center hover:bg-brand hover:text-white transition-colors"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@fitnesszone.dz?_t=ZM-8xHtbteAubV&_r=1&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn7HMb6qY03uD5c_Gg9AmuSn_baAACwRb2tAvxU76TU_yV-_K44URvkSF3zc8_aem_B0yk9OV3TgJik5JHJeM2Pw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-200/50 dark:bg-white/5 flex items-center justify-center hover:bg-brand hover:text-white transition-colors"
              >
                <TikTokIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black uppercase tracking-widest text-xs mb-8 text-brand">{t('footer.quickLinksTitle')}</h4>
            <ul className="space-y-4">
              {quickLinks.map(link => (
                <li key={link.key}>
                  <a href={`#${link.id}`} className="text-gray-600 dark:text-gray-500 hover:text-brand dark:hover:text-white transition-colors text-sm font-bold uppercase tracking-tighter">
                    {t(`navbar.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black uppercase tracking-widest text-xs mb-8 text-brand">{t('footer.contactTitle')}</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-brand flex-shrink-0" size={20} />
                <a
                  href="https://www.google.com/maps/place/fitness+zone+msila/data=!4m2!3m1!1s0x128b7b003271d3f3:0x18bf039c65763b6a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-500 hover:text-brand dark:hover:text-white transition-colors text-sm text-start"
                >
                  {t('footer.address')}
                </a>
              </li>
              <li className="flex gap-4">
                <Phone className="text-brand flex-shrink-0" size={20} />
                <a href={`tel:${t('hero.phone').replace(/\s+/g, '')}`} className="text-gray-600 dark:text-gray-500 hover:text-brand dark:hover:text-white transition-colors text-sm" dir="ltr">{t('hero.phone')}</a>
              </li>
              <li className="flex gap-4">
                <Mail className="text-brand flex-shrink-0" size={20} />
                <CopyableEmail 
                  email={t('footer.email')} 
                  className="text-gray-600 dark:text-gray-500 text-sm" 
                  showCopyIcon={false}
                />
              </li>
            </ul>
          </div>

          {/* Map Teaser */}
          <div className="space-y-6">
            <h4 className="font-black uppercase tracking-widest text-xs text-brand">{t('footer.locationTitle')}</h4>
            <div className="rounded-2xl overflow-hidden transition-all duration-700 h-40">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13144.37254581458!2d4.537213!3d35.704257!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128b7b003271d3f3%3A0x18bf039c65763b6a!2sfitness%20zone%20msila!5e0!3m2!1sen!2sdz!4v1714400000000!5m2!1sen!2sdz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-gray-200 dark:border-white/5 flex flex-col lg:flex-row justify-between items-center gap-12 text-center lg:text-left">
          {/* Left: Logo + Copyright */}
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
            <div className="w-16 h-16 lg:w-14 lg:h-14 rounded-full overflow-hidden border border-white/10 bg-black shadow-2xl flex-shrink-0">
              <img src="/footerImage.png" alt={t('footer.logoAlt')} className="w-full h-full object-cover scale-110" />
            </div>
            <div className="space-y-1" style={{ fontFamily: 'Georgia, serif' }}>
              <p className="text-gray-600 dark:text-gray-400 text-xl lg:text-lg whitespace-nowrap">
                {t('footer.copyrightYear')}
              </p>
              <p className="text-gray-600 dark:text-gray-500 text-lg lg:text-sm italic">
                {t('footer.allRightsReserved')}
              </p>
            </div>
          </div>

          {/* Center: Policy Links */}
          <div
            className="flex items-center gap-8"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            <Link to="/privacy" className="text-gray-600 dark:text-gray-500 hover:text-brand dark:hover:text-white transition-colors text-lg lg:text-base italic underline-offset-4 hover:underline">
              {t('footer.privacy')}
            </Link>
            <div className="w-px h-8 lg:h-6 bg-gray-200 dark:bg-white/10" />
            <Link to="/terms" className="text-gray-600 dark:text-gray-500 hover:text-brand dark:hover:text-white transition-colors text-lg lg:text-base italic underline-offset-4 hover:underline">
              {t('footer.terms')}
            </Link>
          </div>

          {/* Right: Attribution */}
          <p
            className="text-gray-600 dark:text-gray-500 text-base lg:text-sm italic"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {t('footer.craftedBy')}{' '}
            <a
              href="https://benzianeyounes.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A0A0A] dark:text-white font-bold not-italic hover:text-brand transition-all duration-300 ml-1"
            style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Benziane Younes
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

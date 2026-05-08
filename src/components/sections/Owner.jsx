import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import CopyableEmail from '../common/CopyableEmail';

const Instagram = (props) => (
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

const Facebook = (props) => (
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

const Owner = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  return (
    <section className="py-24 bg-white dark:bg-[#050505] overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 aspect-[4/5] rounded-[4rem] overflow-hidden border-8 border-gray-100 dark:border-white/5">
              <img
                src="/owner.jpg"
                alt="Kamel Latreche"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop";
                }}
              />
            </div>
            {/* Decorative background element */}
            <div className={`absolute -bottom-10 ${isRTL ? '-left-10' : '-right-10'} w-64 h-64 bg-brand/10 rounded-full blur-3xl -z-10`} />
            <div className={`absolute -top-10 ${isRTL ? '-right-10' : '-left-10'} w-48 h-48 bg-brand/20 rounded-full blur-2xl -z-10`} />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-start"
          >
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand mb-4">{t('owner.subtitle')}</h2>
            <h3 
              className="text-5xl md:text-7xl font-black text-[#0A0A0A] dark:text-white leading-tight mb-8 uppercase tracking-tighter"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {t('owner.titleLine1')} <span className="text-brand">{t('owner.titleLine2')}</span>
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 leading-relaxed italic border-s-4 border-brand ps-6">
              {t('owner.quote')}
            </p>

            <div className="space-y-8 mb-12">
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                {t('owner.description')}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a 
                  href="tel:+212354874" 
                  className="flex items-center gap-4 bg-gray-50 dark:bg-white/5 p-4 rounded-2xl hover:bg-brand/5 dark:hover:bg-white/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand flex-shrink-0 group-hover:bg-brand group-hover:text-white transition-all">
                    <Phone size={24} className="rtl:-scale-x-100" />
                  </div>
                  <div className="min-w-0 text-start">
                    <div className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">{t('owner.call')}</div>
                    <div className="font-bold text-[#0A0A0A] dark:text-white truncate" dir="ltr">+212354874</div>
                  </div>
                </a>
                <CopyableEmail 
                  email="kamel@fitnesszone.dz" 
                  className="flex items-center gap-4 bg-gray-50 dark:bg-white/5 p-4 rounded-2xl hover:bg-brand/5 dark:hover:bg-white/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand flex-shrink-0 group-hover:bg-brand group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div className="min-w-0 text-start">
                    <div className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">{t('owner.email')}</div>
                    <div className="font-bold text-[#0A0A0A] dark:text-white truncate">kamel@fitnesszone.dz</div>
                  </div>
                </CopyableEmail>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-xs font-black uppercase tracking-widest text-gray-400">{t('owner.follow')}</span>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-white/5 flex items-center justify-center text-[#0A0A0A] dark:text-white hover:bg-brand hover:text-white transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-white/5 flex items-center justify-center text-[#0A0A0A] dark:text-white hover:bg-brand hover:text-white transition-all">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Owner;

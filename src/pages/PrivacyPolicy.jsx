import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cn } from '../utils/cn';

const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';
  const sectionsData = t('privacy.sections', { returnObjects: true }) || [];

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] pt-32 pb-24 text-start">
      <div className="container-custom max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-brand font-bold uppercase tracking-widest text-xs mb-12 hover:gap-4 transition-all">
          <ChevronLeft size={16} className={cn(isRTL && "rotate-180")} /> {t('privacy.back')}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel p-8 md:p-16 rounded-[3rem] bg-gray-50 dark:bg-white/5 border-gray-100 dark:border-white/10"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center text-brand flex-shrink-0">
              <Shield size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-[#0A0A0A] dark:text-white uppercase tracking-tighter">{t('privacy.title')}</h1>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">{t('privacy.lastUpdated')}</p>
            </div>
          </div>

          <div className="space-y-12 text-gray-600 dark:text-gray-400 leading-relaxed">
            {sectionsData.map((section, index) => (
              <section key={index}>
                <h2 className="text-2xl font-black text-[#0A0A0A] dark:text-white uppercase tracking-tighter mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-brand rounded-full" />
                  {section.title}
                </h2>
                {section.content && <p>{section.content}</p>}
                {section.items && (
                  <ul className="list-disc ps-6 space-y-3">
                    {section.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <section className="pt-8 border-t border-gray-200 dark:border-white/10">
              <p className="text-sm italic">
                {t('privacy.footer')}
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

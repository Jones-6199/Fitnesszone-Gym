import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const transformationImages = [
  {
    before: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1583454110551-21f2fa2adfcd?q=80&w=2070&auto=format&fit=crop',
  },
  {
    before: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop',
  }
];

const Transformations = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';
  const resultsData = t('transformations.items', { returnObjects: true }) || [];

  return (
    <section className="py-24 bg-gray-50 dark:bg-black/40">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand mb-4">{t('transformations.subtitle')}</h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#0A0A0A] dark:text-white leading-tight mb-8">
            {t('transformations.titleLine1')} <span className="text-brand">{t('transformations.titleLine2')}</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {resultsData.map((res, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-[3rem] bg-white dark:bg-[#0A0A0A]"
            >
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="relative aspect-square rounded-2xl overflow-hidden group">
                  <img src={transformationImages[i].before} alt="Before" className="w-full h-full object-cover" />
                  <div className="absolute top-4 start-4 bg-black/60 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full backdrop-blur-md">{t('transformations.before')}</div>
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden group">
                  <img src={transformationImages[i].after} alt="After" className="w-full h-full object-cover" />
                  <div className="absolute top-4 start-4 bg-brand text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">{t('transformations.after')}</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-start">
                  <h4 className="text-xl font-black text-[#0A0A0A] dark:text-white uppercase tracking-tighter">{res.name}</h4>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{t('transformations.program', { time: res.time })}</p>
                </div>
                <div className="text-end">
                  <div className="text-2xl font-black text-brand tracking-tighter" dir="ltr">{res.stat}</div>
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{t('transformations.validated')}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformations;

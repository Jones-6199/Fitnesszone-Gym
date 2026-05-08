import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonialsData = t('testimonials.items', { returnObjects: true }) || [];

  return (
    <section className="py-24 bg-background-light dark:bg-background-dark overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-16">
          <Quote size={48} className="text-brand opacity-20 mb-6 rtl:-scale-x-100" />
          <h2 className="text-4xl md:text-5xl font-black text-[#0A0A0A] dark:text-white leading-tight uppercase tracking-tighter">
            {t('testimonials.titleLine1')} <span className="text-brand">{t('testimonials.titleLine2')}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonialsData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-brand/30 transition-colors duration-500 text-start"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 italic">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center font-black text-brand">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="font-black text-[#0A0A0A] dark:text-white uppercase tracking-tighter">{item.name}</h4>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(s => (
                      <span key={s} className="text-brand text-xs">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

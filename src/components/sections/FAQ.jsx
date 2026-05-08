import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '../../utils/cn';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const { t } = useTranslation();
  const faqsData = t('faq.items', { returnObjects: true }) || [];

  return (
    <section className="py-24 bg-gray-50 dark:bg-black/40">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="text-start">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand mb-4">{t('faq.subtitle')}</h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#0A0A0A] dark:text-white leading-tight mb-8 uppercase tracking-tighter">
              {t('faq.titleLine1')} <span className="text-brand">{t('faq.titleLine2')}</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
              {t('faq.description')}
            </p>
            <button className="btn-primary">{t('faq.contact')}</button>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, i) => (
              <div
                key={i}
                className="border-b border-gray-200 dark:border-white/10 pb-4 text-start"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full flex items-center justify-between text-start py-4 group"
                >
                  <span className={cn(
                    "text-lg font-black uppercase tracking-tighter transition-colors pe-4",
                    openIndex === i ? "text-brand" : "text-[#0A0A0A] dark:text-white group-hover:text-brand"
                  )}>
                    {faq.q}
                  </span>
                  <div className={cn(
                    "p-2 rounded-full transition-all flex-shrink-0",
                    openIndex === i ? "bg-brand text-white rotate-180" : "bg-gray-100 dark:bg-white/5 text-gray-400"
                  )}>
                    {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-500 dark:text-gray-400 pb-4 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

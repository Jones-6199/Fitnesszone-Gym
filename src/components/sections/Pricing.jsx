import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '../../utils/cn';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  const plansData = t('pricing.plans', { returnObjects: true }) || [];
  
  const basePlans = [
    {
      priceMonthly: 2500,
      priceYearly: 2100,
      popular: false,
      color: 'gray'
    },
    {
      priceMonthly: 4000,
      priceYearly: 3500,
      popular: true,
      color: 'brand'
    },
    {
      priceMonthly: 6500,
      priceYearly: 5600,
      popular: false,
      color: 'gold'
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-white dark:bg-[#050505] overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.4em] uppercase text-brand mb-4"
          >
            {t('pricing.subtitle')}
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-[#0A0A0A] dark:text-white leading-[0.9] uppercase tracking-tighter mb-12"
          >
            {t('pricing.titleLine1')} <span className="text-brand">{t('pricing.titleLine2')}</span>
          </motion.h3>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-6">
            <span className={cn("text-sm font-bold transition-colors", !isYearly ? "text-brand" : "text-gray-400")}>{t('pricing.monthly')}</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-20 h-10 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-1.5 transition-all"
              style={{ direction: 'ltr' }}
            >
              <motion.div 
                animate={{ x: isYearly ? 40 : 0 }}
                className="w-7 h-7 rounded-full bg-brand shadow-lg flex items-center justify-center text-white"
              >
                <Zap size={14} fill="currentColor" />
              </motion.div>
            </button>
            <div className="flex items-center gap-3">
              <span className={cn("text-sm font-bold transition-colors", isYearly ? "text-brand" : "text-gray-400")}>{t('pricing.yearly')}</span>
              <span className="bg-brand/10 text-brand text-[10px] font-black uppercase px-3 py-1 rounded-full border border-brand/20">
                {t('pricing.save')}
              </span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plansData.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative group p-12 rounded-[4rem] border transition-all duration-500 text-start",
                basePlans[i].popular 
                  ? "bg-[#0A0A0A] border-brand shadow-[0_30px_60px_rgba(5,176,192,0.15)] scale-105 z-10" 
                  : "bg-white dark:bg-white/5 border-gray-100 dark:border-white/10 hover:border-brand/30"
              )}
            >
              {basePlans[i].popular && (
                <div className="absolute -top-5 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 bg-brand text-white px-8 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl whitespace-nowrap">
                  {t('pricing.mostPopular')}
                </div>
              )}
              
              <div className="mb-12">
                <h4 className={cn(
                  "text-xl font-black uppercase tracking-[0.2em] mb-6",
                  basePlans[i].popular ? "text-white" : "text-[#0A0A0A] dark:text-white"
                )}>{plan.name}</h4>
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-2">
                    <AnimatePresence mode='wait'>
                      <motion.span
                        key={isYearly}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={cn(
                          "text-6xl font-black tracking-tighter inline-block",
                          basePlans[i].popular ? "text-white" : "text-[#0A0A0A] dark:text-white"
                        )}
                        dir="ltr"
                      >
                        {isYearly ? basePlans[i].priceYearly : basePlans[i].priceMonthly}
                      </motion.span>
                    </AnimatePresence>
                    <span className="text-gray-500 font-bold text-xs uppercase tracking-widest">{t('pricing.currency')}</span>
                  </div>
                  {isYearly && (
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-brand text-xs font-bold mt-2"
                    >
                      {t('pricing.billedAnnually', { amount: basePlans[i].priceYearly * 12 })}
                    </motion.span>
                  )}
                </div>
              </div>

              <div className="w-full h-px bg-gray-100 dark:bg-white/10 mb-10" />

              <ul className="space-y-5 mb-12">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4 group/item">
                    <div className={cn(
                      "w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors",
                      basePlans[i].popular ? "bg-brand/20 text-brand" : "bg-brand/10 text-brand group-hover/item:bg-brand group-hover/item:text-white"
                    )}>
                      <Check size={14} strokeWidth={4} />
                    </div>
                    <span className={cn(
                      "text-sm font-medium",
                      basePlans[i].popular ? "text-gray-300" : "text-gray-600 dark:text-gray-400"
                    )}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact"
                className={cn(
                  "w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transition-all duration-300 text-center block",
                  basePlans[i].popular
                    ? "bg-brand text-white shadow-[0_10px_20px_rgba(5,176,192,0.3)] hover:scale-[1.02]"
                    : "bg-gray-100 dark:bg-white/10 text-[#0A0A0A] dark:text-white hover:bg-brand hover:text-white"
                )}
              >
                {t('pricing.cta')}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

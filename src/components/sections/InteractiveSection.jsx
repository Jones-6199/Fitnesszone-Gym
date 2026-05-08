import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Flame, Activity } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '../../utils/cn';

const InteractiveSection = () => {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(175);
  const [bmi, setBmi] = useState(22.9);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  const calculateBMI = (w, h) => {
    const bmiVal = (w / ((h / 100) * (h / 100))).toFixed(1);
    setBmi(bmiVal);
  };

  const handleWeightChange = (e) => {
    const val = e.target.value;
    setWeight(val);
    calculateBMI(val, height);
  };

  const handleHeightChange = (e) => {
    const val = e.target.value;
    setHeight(val);
    calculateBMI(weight, val);
  };

  const getBmiStatus = (val) => {
    if (val < 18.5) return { label: t('interactive.bmiStatus.underweight'), color: 'text-blue-500' };
    if (val < 25) return { label: t('interactive.bmiStatus.healthy'), color: 'text-brand' };
    if (val < 30) return { label: t('interactive.bmiStatus.overweight'), color: 'text-orange-500' };
    return { label: t('interactive.bmiStatus.obese'), color: 'text-red-500' };
  };

  const status = getBmiStatus(bmi);

  return (
    <section className="py-24 bg-background-light dark:bg-background-dark">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-start"
          >
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand mb-4">{t('interactive.subtitle')}</h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#0A0A0A] dark:text-white leading-tight mb-8">
              {t('interactive.titleLine1')} <span className="text-brand">{t('interactive.titleLine2')}</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
              {t('interactive.description')}
            </p>
            
            <div className="flex gap-4">
              <div className="glass-panel p-6 rounded-3xl flex-1 border-brand/20">
                <Flame className="text-brand mb-4" size={32} />
                <div className="text-2xl font-black text-[#0A0A0A] dark:text-white" dir="ltr">{t('interactive.calories')}</div>
                <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">{t('interactive.caloriesLabel')}</div>
              </div>
              <div className="glass-panel p-6 rounded-3xl flex-1 border-brand/20">
                <Activity className="text-brand mb-4" size={32} />
                <div className="text-2xl font-black text-[#0A0A0A] dark:text-white" dir="ltr">{t('interactive.successRate')}</div>
                <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">{t('interactive.successLabel')}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel p-10 rounded-[3rem] bg-brand/5 dark:bg-brand/5 border-brand/20"
          >
            <div className="flex items-center gap-3 mb-8">
              <Calculator className="text-brand" size={28} />
              <h4 className="text-xl font-black text-[#0A0A0A] dark:text-white uppercase tracking-tighter">{t('interactive.bmiTitle')}</h4>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-4">
                  <label className="font-bold text-[#0A0A0A] dark:text-white uppercase text-xs tracking-widest">{t('interactive.weightLabel')}</label>
                  <span className="font-black text-brand" dir="ltr">{weight}</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="150"
                  value={weight}
                  onChange={handleWeightChange}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-lg appearance-none cursor-pointer accent-brand"
                  style={{ direction: isRTL ? 'rtl' : 'ltr' }}
                />
              </div>

              <div>
                <div className="flex justify-between mb-4">
                  <label className="font-bold text-[#0A0A0A] dark:text-white uppercase text-xs tracking-widest">{t('interactive.heightLabel')}</label>
                  <span className="font-black text-brand" dir="ltr">{height}</span>
                </div>
                <input
                  type="range"
                  min="140"
                  max="220"
                  value={height}
                  onChange={handleHeightChange}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-lg appearance-none cursor-pointer accent-brand"
                  style={{ direction: isRTL ? 'rtl' : 'ltr' }}
                />
              </div>

              <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
                <div className="text-start">
                  <div className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold mb-1">{t('interactive.yourBmi')}</div>
                  <div className="text-5xl font-black text-brand tracking-tighter" dir="ltr">{bmi}</div>
                </div>
                <div className="text-end">
                  <div className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold mb-1">{t('interactive.status')}</div>
                  <div className={cn("text-2xl font-black uppercase tracking-tighter", status.color)}>{status.label}</div>
                </div>
              </div>

              <a href="#contact" className="w-full btn-primary mt-4 text-center block">
                {t('interactive.getPlan')}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSection;

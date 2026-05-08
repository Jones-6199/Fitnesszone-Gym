import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Zap, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const martialArtsImages = [
  '/judo.jpg',
  '/fit.jpg',
  '/boxing.jpg'
];

const CombatSports = () => {
  const { t } = useTranslation();
  const martialArtsData = t('combatSports.items', { returnObjects: true }) || [];

  return (
    <section id="martial-arts" className="py-32 bg-white dark:bg-[#050505] overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl text-start">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-[0.4em] uppercase text-brand mb-4"
            >
              {t('combatSports.subtitle')}
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-[#0A0A0A] dark:text-white leading-[0.9] uppercase tracking-tighter"
            >
              {t('combatSports.titleLine1')} <br />
              <span className="text-brand">{t('combatSports.titleLine2')}</span>
            </motion.h3>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 bg-brand/5 border border-brand/20 p-6 rounded-[2rem] max-w-sm"
          >
            <Users className="text-brand flex-shrink-0" size={32} />
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium text-start">
              {t('combatSports.descPart1')} <span className="text-[#0A0A0A] dark:text-white font-bold">{t('combatSports.kids')}</span> {t('combatSports.and')} <span className="text-[#0A0A0A] dark:text-white font-bold">{t('combatSports.adults')}</span> {t('combatSports.descPart2')}
            </p>
          </motion.div>
        </div>

        {/* Martial Arts Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {martialArtsData.map((art, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[600px] rounded-[3.5rem] overflow-hidden bg-black text-start"
            >
              {/* Background Image */}
              <img 
                src={martialArtsImages[i]} 
                alt={art.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />

              {/* Content Overlay */}
              <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end">
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand mb-4 block">
                    {art.tag}
                  </span>
                  <h4 className="text-5xl font-black text-white uppercase tracking-tighter mb-4">
                    {art.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-xs">
                    {art.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    {art.benefits.map((benefit, idx) => (
                      <span key={idx} className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-widest border border-white/5">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Arrow Indicator */}
                <div className="mt-10 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="text-white font-black uppercase tracking-widest text-[10px] border-b border-brand pb-1">
                    {t('combatSports.viewSchedule')}
                  </button>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-brand group-hover:border-brand transition-colors">
                    <Zap size={20} fill="currentColor" className="rtl:-scale-x-100" />
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

export default CombatSports;

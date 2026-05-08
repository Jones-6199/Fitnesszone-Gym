import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Send, Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const coachImages = [
  '/judo.jpg',
  '/fit.jpg',
  '/boxing.jpg'
];

const Coaches = () => {
  const { t } = useTranslation();
  const coachesData = t('coaches.items', { returnObjects: true }) || [];

  return (
    <section id="coaches" className="py-24 bg-background-light dark:bg-background-dark">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand mb-4">{t('coaches.subtitle')}</h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#0A0A0A] dark:text-white leading-tight mb-8 uppercase tracking-tighter">
            {t('coaches.titleLine1')} <span className="text-brand">{t('coaches.titleLine2')}</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {coachesData.map((coach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group text-start"
            >
              <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden mb-6">
                <img
                  src={coachImages[i]}
                  alt={coach.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="flex gap-4">
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand transition-colors">
                      <Camera size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand transition-colors">
                      <Send size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand transition-colors">
                      <Briefcase size={18} />
                    </button>
                  </div>
                </div>
              </div>
              <h4 className="text-2xl font-black text-[#0A0A0A] dark:text-white mb-1 uppercase tracking-tighter">{coach.name}</h4>
              <p className="text-brand font-bold uppercase tracking-widest text-xs mb-4">{coach.role}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">{coach.description}</p>
              <div className="flex flex-wrap gap-2">
                {coach.specialties.map((spec, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-[10px] font-bold uppercase tracking-widest text-gray-600 dark:text-gray-300">
                    {spec}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coaches;

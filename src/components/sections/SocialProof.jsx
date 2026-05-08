import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Award, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SocialProof = () => {
  const { t } = useTranslation();

  const stats = [
    { 
      icon: <Users size={20} />, 
      text: t('socialProof.stats.0.text'), 
      label: t('socialProof.stats.0.label') 
    },
    { 
      icon: <Star size={20} className="fill-brand" />, 
      text: t('socialProof.stats.1.text'), 
      label: t('socialProof.stats.1.label') 
    },
    { 
      icon: <Award size={20} />, 
      text: t('socialProof.stats.2.text'), 
      label: t('socialProof.stats.2.label') 
    },
    { 
      icon: <ShieldCheck size={20} />, 
      text: t('socialProof.stats.3.text'), 
      label: t('socialProof.stats.3.label') 
    },
  ];

  return (
    <div className="relative z-30 mt-10 container-custom">
      <div className="bg-[#080808]/90 backdrop-blur-3xl rounded-3xl md:rounded-[3rem] p-6 sm:p-8 md:p-10 border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="flex flex-col items-center md:items-start gap-3 md:gap-4 text-center md:text-start"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl border border-brand/20 bg-brand/5 flex items-center justify-center text-brand flex-shrink-0">
              {stat.icon}
            </div>
            <div className="space-y-1">
              <div className="font-black text-base sm:text-lg md:text-xl text-white uppercase tracking-tighter leading-tight" dir="auto">{stat.text}</div>
              <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-gray-500 font-bold leading-relaxed">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SocialProof;

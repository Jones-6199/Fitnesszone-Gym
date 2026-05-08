import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Zap, ShieldCheck, HeartPulse, Trophy, Users } from 'lucide-react';
import { cn } from '../../utils/cn';
import { useTranslation } from 'react-i18next';

const featureIcons = [
  <Crown size={32} />,
  <Zap size={32} />,
  <ShieldCheck size={32} />,
  <Users size={32} />,
  <HeartPulse size={32} />,
  <Trophy size={32} />
];

const featureColors = [
  { color: 'from-amber-500/20 to-orange-600/20', borderColor: 'group-hover:border-amber-500/50', iconColor: 'text-amber-500' },
  { color: 'from-brand/20 to-blue-600/20', borderColor: 'group-hover:border-brand/50', iconColor: 'text-brand' },
  { color: 'from-emerald-500/20 to-green-600/20', borderColor: 'group-hover:border-emerald-500/50', iconColor: 'text-emerald-500' },
  { color: 'from-purple-500/20 to-indigo-600/20', borderColor: 'group-hover:border-purple-500/50', iconColor: 'text-purple-500' },
  { color: 'from-rose-500/20 to-red-600/20', borderColor: 'group-hover:border-rose-500/50', iconColor: 'text-rose-500' },
  { color: 'from-yellow-500/20 to-amber-600/20', borderColor: 'group-hover:border-yellow-500/50', iconColor: 'text-yellow-500' }
];

const WhyChoose = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';
  const featuresData = t('whyChoose.features', { returnObjects: true }) || [];

  return (
    <section id="why-choose" className="py-32 bg-white dark:bg-[#050505] relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-brand/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand font-black uppercase tracking-[0.4em] text-xs mb-6 block"
          >
            {t('whyChoose.subtitle')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-[#0A0A0A] dark:text-white leading-[0.9] uppercase tracking-tighter mb-8"
          >
            {t('whyChoose.titleLine1')} <br />
            <span className="text-brand">{t('whyChoose.titleLine2')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
          >
            {t('whyChoose.description')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuresData.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "group relative p-1 rounded-3xl overflow-hidden transition-all duration-500",
                "hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              )}
            >
              {/* Animated gradient border */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                featureColors[i]?.color
              )} />
              
              <div className="relative h-full bg-gray-50 dark:bg-[#0A0A0A] p-10 rounded-[1.4rem] border border-gray-200 dark:border-white/5 transition-colors duration-500 z-10 flex flex-col items-start text-start">
                <div className={cn(
                  "w-16 h-16 rounded-2xl bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-8 border border-gray-200 dark:border-white/5 transition-all duration-500",
                  "group-hover:scale-110 group-hover:bg-gray-200 dark:group-hover:bg-white/10 group-hover:shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]",
                  featureColors[i]?.iconColor
                )}>
                  {featureIcons[i]}
                </div>
                
                <h3 className="text-2xl font-black text-[#0A0A0A] dark:text-white uppercase tracking-tighter mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 dark:group-hover:from-white group-hover:to-gray-500 dark:group-hover:to-gray-400 transition-all duration-500">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-500 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors duration-500">
                  {feature.desc}
                </p>
                
                {/* Decorative corner accent */}
                <div className={`absolute top-0 end-0 w-24 h-24 ${isRTL ? 'bg-gradient-to-br rounded-br-full' : 'bg-gradient-to-bl rounded-bl-full'} from-black/5 dark:from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

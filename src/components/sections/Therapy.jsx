import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle, HeartPulse, Droplets, Flame } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Therapy = () => {
  const { t } = useTranslation();
  const therapyItems = t('therapy.items', { returnObjects: true }) || [];
  const trustIndicators = t('therapy.trustIndicators', { returnObjects: true }) || [];

  const icons = [
    <HeartPulse className="w-5 h-5" />,
    <Droplets className="w-5 h-5" />,
    <Flame className="w-5 h-5" />
  ];

  const images = [
    '/Hijama/3.jpg',
    '/Hijama/2.jpg',
    '/Hijama/1.jpg'
  ];

  return (
    <section id="therapy" className="py-24 relative overflow-hidden bg-white dark:bg-[#0A0A0A]">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[120px]" />
        
        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6 flex-wrap"
          >
            {Array.isArray(trustIndicators) && trustIndicators.map((indicator, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-brand/10 dark:bg-brand/20 text-brand px-4 py-2 rounded-full text-sm font-semibold border border-brand/20">
                <ShieldCheck size={18} />
                {indicator}
              </div>
            ))}
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm font-bold tracking-[0.3em] uppercase text-brand mb-4"
          >
            {t('therapy.subtitle')}
          </motion.h2>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-black text-[#0A0A0A] dark:text-white leading-tight mb-6 uppercase tracking-tighter"
          >
            {t('therapy.titleLine1')} <span className="text-brand">{t('therapy.titleLine2')}</span>
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed"
          >
            {t('therapy.description')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(therapyItems) && therapyItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 shadow-lg hover:shadow-2xl hover:shadow-brand/20 hover:-translate-y-3 transition-all duration-500 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                <img 
                  src={images[i]} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 z-20 bg-white/95 dark:bg-black/80 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold text-brand shadow-sm border border-white/20">
                  {icons[i]}
                  {item.tag}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow relative">
                {/* Decorative fade line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent" />

                <h4 className="text-2xl font-bold text-[#0A0A0A] dark:text-white mb-4 leading-tight group-hover:text-brand transition-colors duration-300">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                  {item.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {Array.isArray(item.benefits) && item.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle className="w-5 h-5 text-brand shrink-0 mt-0.5 opacity-80" />
                      <span className="leading-snug">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <a href="#contact" className="mt-auto w-full inline-block text-center py-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 font-bold text-[#0A0A0A] dark:text-white hover:bg-brand hover:text-white hover:border-brand transition-all duration-300 uppercase tracking-wider text-sm shadow-sm hover:shadow-brand/25 group-hover:bg-brand group-hover:text-white group-hover:border-brand">
                  {t('therapy.bookSession')}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Therapy;

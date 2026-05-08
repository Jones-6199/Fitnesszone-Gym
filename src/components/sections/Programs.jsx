import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const programIcons = [
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlKinphYg4g2qXlwojmOVj98v5Dx2WjY1kUg&s" alt="Bodybuilding" />,
  <img src="https://cdn.vectorstock.com/i/1000v/49/50/powerlifting-icon-man-with-barbell-vector-18164950.jpg" alt="Powerlifting" />,
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1EKCQ0eLCVUiB95-yLgPTLp13juzJHvAmQ&s" alt="Cardio & HIIT" />,

  <img src="https://static.vecteezy.com/system/resources/thumbnails/010/189/724/small/personal-trainer-glyph-icon-illustration-vector.jpg" alt="Personal Training" />,
  <img src="https://img.freepik.com/premium-vector/silhouette-judo-icon-martial-arts-combat-sports_1345572-959.jpg" alt="Judo" className="w-full h-full object-cover" />,
  <img src="https://static.vecteezy.com/system/resources/previews/044/797/481/non_2x/karate-fighter-icon-on-white-background-illustration-black-and-white-free-vector.jpg" alt="Karate" className="w-full h-full object-cover" />,
  <img src="https://thumbs.dreamstime.com/b/boxing-symbol-cartoon-illustration-53675084.jpg" alt="Boxing" className="w-full h-full object-cover" />,
  <img src="https://thumbs.dreamstime.com/b/muay-thai-kickboxing-icon-385037447.jpg" alt="Kickboxing" className="w-full h-full object-cover" />
];

const Programs = () => {
  const { t } = useTranslation();
  const programsData = t('programs.items', { returnObjects: true }) || [];

  return (
    <section id="programs" className="py-24 bg-gray-50 dark:bg-black/40">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand mb-4">{t('programs.subtitle')}</h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#0A0A0A] dark:text-white leading-tight mb-8 uppercase tracking-tighter">
            {t('programs.titleLine1')} <span className="text-brand">{t('programs.titleLine2')}</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programsData.map((program, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-[3rem] bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-brand/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brand/10 hover:-translate-y-2 hover:rotate-1 cursor-pointer flex flex-col items-start text-start"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center text-brand mb-8 group-hover:bg-brand group-hover:text-white transition-colors duration-500 overflow-hidden">
                {programIcons[i]}
              </div>
              <h4 className="text-2xl font-black text-[#0A0A0A] dark:text-white mb-4 uppercase tracking-tighter">{program.title}</h4>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
                {program.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;

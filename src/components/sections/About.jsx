import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  return (
    <section id="about" className="py-24 bg-background-light dark:bg-background-dark overflow-hidden">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand mb-4">{t('about.subtitle')}</h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#0A0A0A] dark:text-white leading-tight mb-8 uppercase">
              {t('about.titleLine1')} <br />
              <span className="text-brand">{t('about.titleLine2')}</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
              {t('about.description')}
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-black text-brand mb-1" dir="ltr">01</div>
                <div className="font-bold text-[#0A0A0A] dark:text-white mb-2 uppercase text-sm">{t('about.feature1Title')}</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t('about.feature1Desc')}</p>
              </div>
              <div>
                <div className="text-3xl font-black text-brand mb-1" dir="ltr">02</div>
                <div className="font-bold text-[#0A0A0A] dark:text-white mb-2 uppercase text-sm">{t('about.feature2Title')}</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t('about.feature2Desc')}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="/fz.jpg"
                alt="Philosophy"
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className={`absolute -bottom-8 ${isRTL ? '-right-8' : '-left-8'} glass-panel p-8 rounded-3xl hidden lg:block`}
            >
              <div className="text-brand font-black text-5xl" dir="ltr">{t('about.trainersCount')}</div>
              <div className="text-[#0A0A0A] dark:text-white font-bold uppercase tracking-widest text-xs">{t('about.trainersLabel')}</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

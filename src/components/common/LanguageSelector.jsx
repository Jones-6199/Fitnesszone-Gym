import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ArrowRight, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { isModalOpen, changeLanguage, closeLanguageModal } = useLanguage();
  const { t } = useTranslation();

  const languages = [
    { code: 'ar', name: 'العربية', native: 'ar', flag: 'https://flagcdn.com/w80/dz.png' },
    { code: 'en', name: 'English', native: 'en', flag: 'https://flagcdn.com/w80/gb.png' },
    { code: 'fr', name: 'Français', native: 'fr', flag: 'https://flagcdn.com/w80/fr.png' },
  ];

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Immersive Background */}
          <div className="absolute inset-0 overflow-hidden bg-[#050505]/60 backdrop-blur-sm">
            <motion.img 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
              className="w-full h-full object-cover opacity-10"
              alt="Gym Background"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
          </div>

          <motion.div
            initial={{ scale: 0.98, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.98, opacity: 0, y: 10 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="relative w-full max-w-sm p-8 glass-panel rounded-[2.5rem] border-white/5 text-center shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button 
              onClick={closeLanguageModal}
              className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="w-14 h-14 bg-brand/20 rounded-2xl flex items-center justify-center text-brand mx-auto mb-6"
            >
              <Globe size={28} />
            </motion.div>

            <h2 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">
              {t('languageSelector.titleLine1')} <span className="text-brand">{t('languageSelector.titleLine2')}</span>
            </h2>
            
            <p className="text-gray-400 mb-8 text-sm font-medium">
              {t('languageSelector.description')}
            </p>

            <div className="grid gap-3">
              {languages.map((lang, index) => (
                <motion.button
                  key={lang.code}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.2 }}
                  onClick={() => changeLanguage(lang.code)}
                  className="group relative w-full p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-brand/30 hover:bg-white/[0.08] transition-all duration-300 flex items-center justify-between overflow-hidden"
                >
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/5">
                      <img src={lang.flag} alt={lang.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-left">
                      <div className="text-white font-bold text-base tracking-tight">{lang.name}</div>
                      <div className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">{lang.code}</div>
                    </div>
                  </div>
                  
                  <div className="relative z-10 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all duration-300">
                    <ArrowRight size={14} className="transform -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                  </div>
                </motion.button>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-center gap-3 text-gray-600">
              <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Fitness Zone · Elite</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LanguageSelector;

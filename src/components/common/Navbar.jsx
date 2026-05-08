import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dumbbell, Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { cn } from '../../utils/cn';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { openLanguageModal } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    openLanguageModal();
  };

  const navLinks = [
    { name: t('navbar.home'), href: '#' },
    { name: t('navbar.about'), href: '#about' },
    { name: t('navbar.programs'), href: '#programs' },
    { name: t('navbar.coaches'), href: '#coaches' },
    { name: t('navbar.pricing'), href: '#pricing' },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 container-custom",
          isScrolled ? "w-[95%] max-w-5xl" : "w-full"
        )}
      >
        <div className={cn(
          "glass-panel rounded-full px-6 py-3 flex items-center justify-between",
          isScrolled ? "bg-white/10 dark:bg-black/20" : "bg-transparent border-transparent shadow-none"
        )}>
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-brand/20">
              <img src="/logo.jpg" alt="Fitness Zone Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-xl tracking-tighter text-[#0A0A0A] dark:text-white">
              FITNESS<span className="text-brand">ZONE</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative text-sm font-bold text-[#0A0A0A] dark:text-white hover:text-brand transition-colors py-1"
              >
                {link.name}
                <span className="absolute bottom-0 start-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full hover:bg-white/10 transition-colors text-[#0A0A0A] dark:text-white flex items-center gap-1 font-bold text-sm"
              aria-label="Toggle Language"
            >
              <Globe size={18} />
              <span className="hidden sm:inline">{i18n.language.split('-')[0].toUpperCase()}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white/10 transition-colors text-[#0A0A0A] dark:text-white"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isDark ? 0 : 180 }}
                transition={{ duration: 0.5 }}
              >
                {isDark ? <Moon size={18} /> : <Sun size={18} className="text-yellow-500" fill="currentColor" />}
              </motion.div>
            </button>

            {/* Menu Trigger */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 text-[#0A0A0A] dark:text-white"
            >
              <Menu size={24} />
            </button>

            <a href="#contact" className="hidden md:block btn-primary py-2 text-sm">
              {t('navbar.joinNow')}
            </a>
          </div>
        </div>
      </nav>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 p-2 text-[#0A0A0A] dark:text-white"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-bold hover:text-brand transition-colors text-[#0A0A0A] dark:text-white"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsOpen(false)}
                className="btn-primary mt-8"
              >
                {t('navbar.joinNow')}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

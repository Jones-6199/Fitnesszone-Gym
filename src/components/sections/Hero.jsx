import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Play, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '../../utils/cn';
import CopyableEmail from '../common/CopyableEmail';

const GymStatus = ({ isRTL, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const hour = now.getHours();
      // Open from 06:00 to 23:00
      setIsOpen(hour >= 6 && hour < 23);
    };

    checkStatus();
    const timer = setInterval(checkStatus, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={cn("flex items-center gap-2.5", isRTL ? "flex-row-reverse" : "flex-row", className)}>
      <div className="relative flex h-2.5 w-2.5">
        <motion.span
          animate={{
            scale: [1, 2, 1],
            opacity: [0.6, 0.2, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={cn(
            "absolute inline-flex h-full w-full rounded-full",
            isOpen ? "bg-green-400 shadow-[0_0_10px_#4ade80]" : "bg-red-400 shadow-[0_0_10px_#f87171]"
          )}
        />
        <span className={cn(
          "relative inline-flex rounded-full h-2.5 w-2.5",
          isOpen ? "bg-green-500" : "bg-red-500"
        )} />
      </div>
      <span className={cn(
        "text-[9px] font-black uppercase tracking-[0.25em]",
        isOpen ? "text-green-500" : "text-red-500"
      )}>
        {isOpen ? t('hero.status.open') : t('hero.status.closed')}
      </span>
    </div>
  );
};

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  const slides = [
    {
      image: '/coverOne.png',
      title: t('hero.slide1.title'),
      highlight: t('hero.slide1.highlight'),
      quote: t('hero.slide1.quote'),
      author: t('hero.slide1.author')
    },
    {
      image: '/coverTwo.png',
      title: t('hero.slide2.title'),
      highlight: t('hero.slide2.highlight'),
      quote: t('hero.slide2.quote'),
      author: t('hero.slide2.author')
    },
    {
      image: '/coverThree.png.jpg',
      title: t('hero.slide3.title'),
      highlight: t('hero.slide3.highlight'),
      quote: t('hero.slide3.quote'),
      author: t('hero.slide3.author')
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black font-sans">
      {/* Background Slides */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.05 }}
          exit={{ opacity: 0 }}
          transition={{ 
            opacity: { duration: 1.5, ease: [0.4, 0, 0.2, 1] },
            scale: { duration: 10, ease: "linear" }
          }}
          className="absolute inset-0"
        >
          {/* Enhanced cinematic overlays */}
          <div className="absolute  inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent z-10" />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={slides[current].image}
            alt="Hero Background"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 h-full container-custom flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 items-center gap-12 w-full pt-20">
          {/* Left Content */}
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <GymStatus isRTL={isRTL} className="mb-6 xl:hidden" />
            <h1 className="text-7xl md:text-[9rem] font-black text-white leading-[0.9] tracking-tighter mb-10">
              {slides[current].title} <br />
              <span className="text-brand">{slides[current].highlight}.</span>
            </h1>
            
            <div className="space-y-6 mb-16">
              <p className="text-2xl md:text-3xl text-gray-400 font-medium leading-tight max-w-lg italic opacity-80">
                {slides[current].quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-brand/50" />
                <p className="text-brand font-bold uppercase tracking-[0.3em] text-xs">{slides[current].author}</p>
              </div>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ x: isRTL ? -10 : 10 }}
              className="group inline-flex items-center gap-4 text-white text-2xl font-black uppercase tracking-tighter transition-all"
            >
              <span className="relative">
                {t('hero.startTraining')}
                <motion.div 
                  className={`absolute -bottom-2 ${isRTL ? 'right-0' : 'left-0'} h-1 bg-brand w-full`}
                  initial={{ scaleX: 0.3 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: isRTL ? 'right' : 'left' }}
                />
              </span>
              <ChevronRight size={28} className="text-brand rtl:rotate-180 group-hover:translate-x-2 rtl:group-hover:-translate-x-2 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Right Content - Bouncing Play Button */}
          <div className="hidden lg:flex justify-end pe-20">
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                scale: {
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                opacity: { duration: 1 }
              }}
              className="w-48 h-48 rounded-full border-2 border-white/20 flex items-center justify-center text-white backdrop-blur-md hover:border-brand hover:text-brand transition-all group relative"
            >
              {/* Outer Ripple */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.6],
                  opacity: [0.3, 0]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity,
                  ease: "easeOut"
                }}
                className="absolute inset-0 rounded-full border-2 border-brand/50"
              />
              <div className="w-40 h-40 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand/30 transition-colors bg-white/5">
                <Play size={64} fill="currentColor" className="ms-3 rtl:rotate-180 rtl:ms-0 rtl:me-3" />
              </div>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom Right Info Card */}
      <motion.div
        initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 end-10 z-30 bg-black/40 backdrop-blur-2xl border border-white/10 p-6 min-w-[320px] hidden xl:block rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        <div className="flex items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand border border-brand/20">
            <CheckCircle2 size={22} />
          </div>
          <div className="flex-grow">
            <GymStatus isRTL={isRTL} className="mb-2" />
            <h4 className="text-white/40 font-black uppercase tracking-[0.3em] text-[7px] mb-1.5">{t('hero.scheduleMeeting')}</h4>
            <div className="space-y-0.5">
              <CopyableEmail 
                email={t('hero.email')} 
                className="text-brand font-black text-lg tracking-tighter text-start block" 
              />
              <a href={`tel:${t('hero.phone').replace(/\s+/g, '')}`} className="text-white/50 font-bold text-[10px] tracking-widest text-start block hover:text-white transition-colors" dir="ltr">{t('hero.phone')}</a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Custom Slider Progress */}
      <div className="absolute bottom-12 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 z-30 flex items-center gap-6">
        <span className="text-[10px] font-black text-white/40 tracking-widest">0{current + 1}</span>
        <div className="flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-[2px] transition-all duration-700 rounded-full ${i === current ? 'w-16 bg-brand' : 'w-8 bg-white/10'}`}
            />
          ))}
        </div>
        <span className="text-[10px] font-black text-white/40 tracking-widest">0{slides.length}</span>
      </div>
    </section>
  );
};

export default Hero;

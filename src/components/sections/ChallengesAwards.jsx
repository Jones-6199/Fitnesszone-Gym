import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Trophy, Star, Users, Zap, ChevronLeft, ChevronRight, X, Medal, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// All 19 images from the challenges & awards folder
const galleryImages = Array.from({ length: 19 }, (_, i) => ({
  id: i + 1,
  src: `/chalenges & awards/${i + 1}.jpg`,
  alt: `Challenge & Award moment ${i + 1}`,
}));

const STAT_ICONS = [Trophy, Medal, Users, Zap];
const STAT_COLORS = ['#f59e0b', '#05b0c0', '#a78bfa', '#f43f5e'];

/* ─────────────── Animated Stat Card ─────────────── */
const AnimatedStat = ({ icon: Icon, value, label, color, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="group relative flex flex-col items-center gap-3 p-5 sm:p-6 lg:p-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 backdrop-blur-sm hover:border-gray-300 dark:hover:border-white/20 transition-all duration-500 overflow-hidden"
    >
      {/* Icon */}
      <div
        className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0"
        style={{ background: `${color}18`, border: `1px solid ${color}30` }}
      >
        <Icon size={20} className="sm:hidden" style={{ color }} />
        <Icon size={26} className="hidden sm:block" style={{ color }} />
      </div>

      {/* Value */}
      <p className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter leading-none" style={{ color }}>
        {value}
      </p>

      {/* Label */}
      <p className="text-gray-500 dark:text-gray-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest text-center leading-snug">
        {label}
      </p>

      {/* Glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `0 0 40px ${color}20` }}
      />
    </motion.div>
  );
};

/* ─────────────── Lightbox ─────────────── */
const Lightbox = ({ image, onClose, onPrev, onNext }) => (
  <AnimatePresence>
    {image && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/96 backdrop-blur-xl"
        onClick={onClose}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-all"
        >
          <X size={18} />
        </button>

        {/* Prev */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-2 sm:left-6 z-10 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-brand/80 flex items-center justify-center text-white transition-all"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Image */}
        <motion.img
          key={image.src}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          src={image.src}
          alt={image.alt}
          className="max-h-[80vh] max-w-[88vw] sm:max-h-[85vh] sm:max-w-[85vw] object-contain rounded-xl sm:rounded-2xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />

        {/* Next */}
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-2 sm:right-6 z-10 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-brand/80 flex items-center justify-center text-white transition-all"
        >
          <ChevronRight size={20} />
        </button>

        {/* Counter */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-white/60 text-xs tracking-widest uppercase">
          {image.id} / {galleryImages.length}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

/* ─────────────── Main Section ─────────────── */
const ChallengesAwards = () => {
  const [lightboxImage, setLightboxImage] = useState(null);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const { t } = useTranslation();

  const stats = t('challengesAwards.stats', { returnObjects: true }).map((s, i) => ({
    ...s,
    icon: STAT_ICONS[i],
    color: STAT_COLORS[i],
  }));

  const openLightbox = (img) => setLightboxImage(img);
  const closeLightbox = () => setLightboxImage(null);
  const goPrev = () => {
    if (!lightboxImage) return;
    const idx = galleryImages.findIndex((i) => i.id === lightboxImage.id);
    setLightboxImage(galleryImages[(idx - 1 + galleryImages.length) % galleryImages.length]);
  };
  const goNext = () => {
    if (!lightboxImage) return;
    const idx = galleryImages.findIndex((i) => i.id === lightboxImage.id);
    setLightboxImage(galleryImages[(idx + 1) % galleryImages.length]);
  };

  // Split images into columns: 1 col mobile, 2 col tablet, 3 col desktop
  const cols = [[], [], []];
  galleryImages.forEach((img, i) => cols[i % 3].push(img));

  return (
    <>
      <Lightbox image={lightboxImage} onClose={closeLightbox} onPrev={goPrev} onNext={goNext} />

      <section
        id="challenges-awards"
        className="relative bg-white dark:bg-[#050505] py-16 sm:py-24 lg:py-32 overflow-hidden transition-colors duration-500"
      >
        {/* BG glows */}
        <div className="absolute top-0 left-0 w-72 h-72 sm:w-[600px] sm:h-[600px] rounded-full bg-brand/5 blur-[80px] sm:blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-60 h-60 sm:w-[500px] sm:h-[500px] rounded-full bg-amber-500/5 blur-[70px] sm:blur-[100px] pointer-events-none" />

        <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">

          {/* ── Header ── */}
          <div ref={heroRef} className="text-center mb-12 sm:mb-16 lg:mb-24">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 rounded-full border border-brand/30 bg-brand/10 mb-6 sm:mb-8"
            >
              <Trophy size={12} className="text-brand" />
              <span className="text-brand text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em]">
                {t('challengesAwards.badge')}
              </span>
              <Star size={12} className="text-brand" />
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#0A0A0A] dark:text-white leading-none tracking-tighter mb-4 sm:mb-6"
            >
              {t('challengesAwards.titleLine1')}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-amber-400 to-brand">
                {t('challengesAwards.titleLine2')}
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-600 dark:text-gray-400 text-base sm:text-lg lg:text-xl max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-2"
            >
              {t('challengesAwards.description')}
            </motion.p>
          </div>

          {/* ── Stats Grid ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-20 lg:mb-28"
          >
            {stats.map((s, i) => (
              <AnimatedStat key={i} icon={s.icon} value={s.value} label={s.label} color={s.color} index={i} />
            ))}
          </motion.div>

          {/* ── Feature Banner ── */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden mb-12 sm:mb-20 lg:mb-28 border border-gray-200 dark:border-white/10 shadow-lg dark:shadow-none">
            <img
              src="/chalenges & awards/15.jpg"
              alt="Challenges banner"
              className="w-full h-52 sm:h-72 md:h-[360px] lg:h-[420px] object-cover object-center brightness-50"
            />
            {/* Overlay — always dark since it's over an image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent sm:bg-gradient-to-r sm:from-black/90 sm:via-black/60 sm:to-transparent flex items-end sm:items-center">
              <div className="p-5 sm:p-10 md:p-14 lg:p-16 w-full sm:max-w-xl">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/20 border border-brand/40 mb-4 sm:mb-6">
                  <Award size={11} className="text-brand" />
                  <span className="text-brand text-[10px] sm:text-[11px] font-bold uppercase tracking-widest">
                    {t('challengesAwards.bannerBadge')}
                  </span>
                </div>
                {/* Title — always white since it's over dark image overlay */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter leading-tight mb-3 sm:mb-4">
                  {t('challengesAwards.bannerTitle1')}
                  <br />
                  <span className="text-brand">{t('challengesAwards.bannerTitle2')}</span>
                </h3>
                {/* Desc — hidden on very small screens to keep it clean */}
                <p className="hidden sm:block text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {t('challengesAwards.bannerDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* ── Gallery Header ── */}
          <div className="mb-8 sm:mb-12 lg:mb-16 text-center">
            <h3 className="text-2xl sm:text-3xl font-black text-[#0A0A0A] dark:text-white tracking-tighter mb-1 sm:mb-2">
              {t('challengesAwards.galleryTitle')}{' '}
              <span className="text-brand">{t('challengesAwards.galleryHighlight')}</span>
            </h3>
            <p className="text-gray-400 dark:text-gray-500 text-[10px] sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em]">
              {t('challengesAwards.gallerySubtitle')}
            </p>
          </div>

          {/* ── Masonry Gallery ──
               Mobile:  2-col grid (uniform aspect ratio)
               Tablet+: 3-col masonry columns                */}
          <div className="block sm:hidden">
            {/* Mobile: simple 2-column grid */}
            <div className="grid grid-cols-2 gap-2.5">
              {galleryImages.map((img, i) => (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
                  onClick={() => openLightbox(img)}
                  className="relative group cursor-pointer rounded-xl overflow-hidden border border-gray-200 dark:border-white/5 active:scale-95 transition-transform shadow-sm dark:shadow-none"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full aspect-square object-cover"
                    loading="lazy"
                  />
                  {/* Tap overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-active:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center">
                      <Trophy size={14} className="text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Tablet: 2 cols, Desktop: 3 cols masonry */}
            {cols.map((col, colIdx) => (
              <div key={colIdx} className={`flex flex-col gap-4 ${colIdx === 2 ? 'hidden lg:flex' : ''}`}>
                {col.map((img, rowIdx) => (
                  <motion.div
                    key={img.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: rowIdx * 0.08 }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => openLightbox(img)}
                    className="relative group cursor-pointer rounded-2xl overflow-hidden border border-gray-200 dark:border-white/5 hover:border-brand/40 transition-all duration-500 shadow-sm dark:shadow-none"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{ aspectRatio: colIdx === 1 && rowIdx % 2 === 0 ? '4/5' : '1/1' }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 sm:p-5">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand flex items-center justify-center">
                          <Trophy size={12} className="text-white sm:hidden" />
                          <Trophy size={14} className="text-white hidden sm:block" />
                        </div>
                        <span className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                          {t('challengesAwards.viewPhoto')}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>

          {/* ── Bottom CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-12 sm:mt-20 lg:mt-24"
          >
            <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 bg-brand/10 border border-brand/30 rounded-2xl sm:rounded-3xl p-6 sm:px-8 sm:py-7 lg:px-10 lg:py-8">
              {/* Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-brand/20 flex items-center justify-center shrink-0">
                <Trophy size={28} className="text-brand sm:hidden" />
                <Trophy size={32} className="text-brand hidden sm:block" />
              </div>

              {/* Text */}
              <div className="text-center sm:text-start rtl:sm:text-right flex-1">
                <p className="text-[#0A0A0A] dark:text-white font-black text-lg sm:text-xl tracking-tighter">
                  {t('challengesAwards.ctaTitle')}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">
                  {t('challengesAwards.ctaDesc')}
                </p>
              </div>

              {/* Button */}
              <a
                href="#contact"
                className="w-full sm:w-auto text-center bg-brand hover:bg-brand/80 text-white font-black uppercase tracking-widest text-sm px-7 py-4 rounded-xl sm:rounded-2xl transition-all hover:scale-105 whitespace-nowrap"
              >
                {t('challengesAwards.ctaButton')}
              </a>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default ChallengesAwards;

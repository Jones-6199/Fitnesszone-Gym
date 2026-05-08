import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Phone, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '../../utils/cn';
import CopyableEmail from '../common/CopyableEmail';

const Instagram = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Facebook = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Booking = () => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/f/mbdqnveo', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section id="contact" className="py-24 container-custom text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass-panel p-10 md:p-20 rounded-[2.5rem] md:rounded-[4rem] bg-brand/5 border-brand/20 flex flex-col items-center"
        >
          <div className="w-20 h-20 bg-brand rounded-full flex items-center justify-center text-white mb-8">
            <CheckCircle2 size={48} />
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-[#0A0A0A] dark:text-white uppercase tracking-tighter mb-4">{t('booking.successTitle')}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-md mx-auto">
            {t('booking.successMessage')}
          </p>
          <button onClick={() => setStatus('idle')} className="btn-primary mt-10">{t('booking.backToWebsite')}</button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-background-light dark:bg-background-dark relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="glass-panel p-6 sm:p-10 md:p-16 rounded-[2.5rem] md:rounded-[4rem] bg-white/70 dark:bg-black/60 border-white/20 dark:border-white/5 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
            <div className="text-center lg:text-start">
              <h2 className="text-[10px] md:text-sm font-bold tracking-[0.3em] uppercase text-brand mb-4">{t('booking.subtitle')}</h2>
              <h3 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#0A0A0A] dark:text-white leading-none mb-6 md:mb-8 uppercase tracking-tighter">
                {t('booking.titleLine1')} <br className="hidden sm:block" />
                <span className="text-brand italic">{t('booking.titleLine2')}</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg mb-8 md:mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {t('booking.description')}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6 text-start">
                <div className="flex items-center gap-4 bg-gray-50 dark:bg-white/5 p-4 rounded-2xl">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand flex-shrink-0">
                    <Send size={20} className={cn(isRTL && "rotate-180")} />
                  </div>
                  <CopyableEmail 
                    email="hello@fitnesszone.dz" 
                    className="min-w-0 flex-grow"
                  >
                    <div className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">{t('booking.emailUs')}</div>
                    <div className="font-bold text-sm md:text-base text-[#0A0A0A] dark:text-white truncate block">hello@fitnesszone.dz</div>
                  </CopyableEmail>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 dark:bg-white/5 p-4 rounded-2xl">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand flex-shrink-0">
                    <Phone size={20} className="rtl:-scale-x-100" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">{t('booking.phoneNumber')}</div>
                    <a href="tel:+213123456789" className="font-bold text-sm md:text-base text-[#0A0A0A] dark:text-white hover:text-brand transition-colors truncate block" dir="ltr">+213 123 456 789</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 dark:bg-white/5 p-4 rounded-2xl">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand flex-shrink-0">
                    <Instagram size={20} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">{t('booking.instagram')}</div>
                    <a href="#" className="font-bold text-sm md:text-base text-[#0A0A0A] dark:text-white hover:text-brand transition-colors truncate block" dir="ltr">@fitnesszone</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 dark:bg-white/5 p-4 rounded-2xl">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand flex-shrink-0">
                    <Facebook size={20} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">{t('booking.facebook')}</div>
                    <a href="#" className="font-bold text-sm md:text-base text-[#0A0A0A] dark:text-white hover:text-brand transition-colors truncate block">{t('booking.facebook')}</a>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 text-start">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ms-2 block">{t('booking.form.fullName')}</label>
                  <input required name="name" type="text" placeholder={t('booking.form.fullNamePlaceholder')} className="w-full bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl px-6 py-4 text-[#0A0A0A] dark:text-white focus:border-brand outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ms-2 block">{t('booking.form.email')}</label>
                  <input required name="email" type="email" placeholder={t('booking.form.emailPlaceholder')} className="w-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 text-[#0A0A0A] dark:text-white focus:border-brand outline-none transition-colors" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ms-2 block">{t('booking.form.phoneNumber') || t('booking.phoneNumber')}</label>
                  <input required name="phone" type="tel" placeholder="+213..." className="w-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 text-[#0A0A0A] dark:text-white focus:border-brand outline-none transition-colors text-start" dir="ltr" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ms-2 block">{t('booking.form.goal')}</label>
                  <div className="relative">
                    <select 
                      name="goal" 
                      className={cn(
                        "w-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-4 text-[#0A0A0A] dark:text-white focus:border-brand outline-none transition-colors appearance-none cursor-pointer",
                        isRTL ? "pl-12 pr-6 text-right" : "pr-12 pl-6 text-left"
                      )}
                    >
                      <option value="weight-loss" className="dark:bg-[#121212]">{t('booking.form.goals.weightLoss')}</option>
                      <option value="muscle-gain" className="dark:bg-[#121212]">{t('booking.form.goals.muscleGain')}</option>
                      <option value="stamina" className="dark:bg-[#121212]">{t('booking.form.goals.stamina')}</option>
                      <option value="rehab" className="dark:bg-[#121212]">{t('booking.form.goals.rehab')}</option>
                      <option value="dry-cupping" className="dark:bg-[#121212]">{t('booking.form.goals.dryCupping')}</option>
                      <option value="recovery-massage" className="dark:bg-[#121212]">{t('booking.form.goals.recoveryMassage')}</option>
                      <option value="fire-cupping" className="dark:bg-[#121212]">{t('booking.form.goals.fireCupping')}</option>
                    </select>
                    <ChevronDown className={cn(
                      "absolute top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 w-5 h-5",
                      isRTL ? "left-6" : "right-6"
                    )} />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ms-2 block">{t('booking.form.message')}</label>
                <textarea name="message" rows="4" placeholder={t('booking.form.messagePlaceholder')} className="w-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 text-[#0A0A0A] dark:text-white focus:border-brand outline-none transition-colors resize-none" />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full btn-primary flex items-center justify-center gap-3 py-5 text-sm uppercase tracking-widest font-black"
              >
                {status === 'loading' ? t('booking.form.sending') : (
                  <>
                    {t('booking.form.send')} <Send size={20} className={cn(isRTL && "rotate-180")} />
                  </>
                )}
              </button>
              {status === 'error' && <p className="text-red-500 text-xs text-center font-bold">{t('booking.form.error')}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;

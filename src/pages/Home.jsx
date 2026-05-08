import Hero from '../components/sections/Hero.jsx';
import SocialProof from '../components/sections/SocialProof.jsx';
import About from '../components/sections/About.jsx';
import Programs from '../components/sections/Programs.jsx';
import CombatSports from '../components/sections/CombatSports.jsx';
import InteractiveSection from '../components/sections/InteractiveSection.jsx';
import Therapy from '../components/sections/Therapy.jsx';
import Pricing from '../components/sections/Pricing.jsx';
import Coaches from '../components/sections/Coaches.jsx';
import Owner from '../components/sections/Owner.jsx';
import Transformations from '../components/sections/Transformations.jsx';
import ChallengesAwards from '../components/sections/ChallengesAwards.jsx';
import Testimonials from '../components/sections/Testimonials.jsx';
import FAQ from '../components/sections/FAQ.jsx';
import Booking from '../components/sections/Booking.jsx';
import WhyChoose from '../components/sections/WhyChoose.jsx';

import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { i18n } = useTranslation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={i18n.language}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
      <SocialProof />
      <About />
      <WhyChoose />
      <Programs />
      <CombatSports />
      <InteractiveSection />
      <Therapy />
      <Pricing />
      <Coaches />
      <Owner />
      <Transformations />
      <ChallengesAwards />
      <Testimonials />
      <FAQ />
      <Booking />
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;

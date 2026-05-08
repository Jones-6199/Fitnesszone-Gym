import React, { createContext, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);


  const openLanguageModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLanguageModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('selected-language', lang);
    closeLanguageModal();
  };

  return (
    <LanguageContext.Provider value={{ isModalOpen, openLanguageModal, closeLanguageModal, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

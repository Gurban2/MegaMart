import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../styles/animations';

/**
 * Компонент для создания анимированных переходов между страницами.
 * Оборачивает содержимое страницы и применяет анимации перехода.
 */
const PageTransition = ({ children, className, customVariants }) => {
  const variants = customVariants || pageTransition;
  
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      layout
    >
      {children}
    </motion.div>
  );
};

export default PageTransition; 
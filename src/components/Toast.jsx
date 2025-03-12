import React, { useEffect, useState } from 'react';
import { useToast } from '../context/ToastContext';
import { FiX, FiAlertCircle, FiCheckCircle, FiInfo } from 'react-icons/fi';
import { ToastContainer, CloseButton } from '../styles/StyledComponents';

const Toast = () => {
  const { toast, hideToast } = useToast();
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    if (toast) {
      setVisible(true);
    } else {
      // Задержка для анимации скрытия
      setTimeout(() => {
        setVisible(false);
      }, 300);
    }
  }, [toast]);
  
  if (!toast && !visible) return null;
  
  const getIcon = () => {
    switch (toast?.type) {
      case 'success':
        return <FiCheckCircle size={20} color="var(--success-color)" />;
      case 'error':
        return <FiAlertCircle size={20} color="var(--error-color)" />;
      case 'warning':
        return <FiInfo size={20} color="var(--warning-color)" />;
      default:
        return <FiInfo size={20} color="var(--primary-color)" />;
    }
  };
  
  return (
    <ToastContainer show={toast !== null} type={toast?.type || 'success'}>
      {getIcon()}
      <p>{toast?.message}</p>
      <CloseButton onClick={hideToast}>
        <FiX />
      </CloseButton>
    </ToastContainer>
  );
};

export default Toast; 
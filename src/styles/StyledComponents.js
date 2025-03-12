import styled from 'styled-components';
import { slideUp, fadeIn, fadeOut } from './animations';

// Цвета и другие переменные
export const theme = {
  primaryColor: '#3f51b5',
  secondaryColor: '#f50057',
  backgroundColor: '#f9f9f9',
  textColor: '#333',
  lightGray: '#f1f1f1',
  mediumGray: '#ddd',
  darkGray: '#888',
  successColor: '#4caf50',
  errorColor: '#f44336',
  warningColor: '#ff9800',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
};

// Контейнер
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

// Кнопки
export const Button = styled.button`
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-weight: 500;
  cursor: pointer;
  font-family: var(--font-primary);
  border: none;
  outline: none;
`;

export const PrimaryButton = styled(Button)`
  background-color: var(--primary-color);
  color: white;
  
  &:hover {
    background-color: #303f9f;
  }
  
  &:disabled {
    background-color: var(--medium-gray);
    cursor: not-allowed;
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: var(--secondary-color);
  color: white;
  
  &:hover {
    background-color: #c51162;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: transparent;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`;

// Карточка
export const Card = styled.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  overflow: hidden;
`;

// Заголовки
export const PageTitle = styled.h1`
  font-family: var(--font-headings);
  font-size: 2.25rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  font-weight: 600;
  letter-spacing: -0.025em;
`;

export const SectionTitle = styled.h2`
  font-family: var(--font-headings);
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--text-color);
  font-weight: 600;
  letter-spacing: -0.025em;
`;

// Формы
export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--medium-gray);
  border-radius: 4px;
  font-size: 1rem;
  background-color: var(--input-bg);
  color: var(--text-color);
  font-family: var(--font-primary);
  
  &:focus {
    border-color: var(--primary-color);
    outline: none;
    box-shadow: 0 0 0 2px rgba(var(--primary-color-rgb), 0.2);
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--medium-gray);
  border-radius: 4px;
  font-size: 1rem;
  background-color: var(--input-bg);
  color: var(--text-color);
  font-family: var(--font-primary);
  
  &:focus {
    border-color: var(--primary-color);
    outline: none;
    box-shadow: 0 0 0 2px rgba(var(--primary-color-rgb), 0.2);
  }
  
  option {
    background-color: var(--input-bg);
    color: var(--text-color);
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--text-color);
    font-family: var(--font-primary);
  }
`;

export const ErrorText = styled.div`
  color: var(--error-color);
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

// Новые компоненты для форм
export const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormTitle = styled.h2`
  font-family: var(--font-headings);
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  text-align: center;
  font-weight: 600;
  letter-spacing: -0.025em;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-color);
`;

export const SubmitButton = styled(PrimaryButton)`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  margin-top: 1rem;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 0.5rem;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  cursor: pointer;
  color: var(--text-color);
  
  input:checked + span {
    color: var(--primary-color);
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--medium-gray);
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
  background-color: var(--input-bg);
  color: var(--text-color);
  font-family: var(--font-primary);
  
  &:focus {
    border-color: var(--primary-color);
    outline: none;
    box-shadow: 0 0 0 2px rgba(var(--primary-color-rgb), 0.2);
  }
`;

// Сетка для товаров
export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

// Загрузчик
export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  color: var(--text-color);
  
  svg {
    animation: spin 1s linear infinite;
    margin-bottom: 1rem;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Разделение на две колонки
export const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Уведомление
export const ToastContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  padding: 1rem;
  border-radius: 4px;
  background-color: var(--card-bg);
  box-shadow: var(--box-shadow);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  max-width: 300px;
  animation: ${props => props.show ? slideUp : fadeOut} 0.3s ease forwards;
  transform-origin: bottom right;
  border-left: 4px solid 
    ${props => {
      switch(props.type) {
        case 'success': return 'var(--success-color)';
        case 'error': return 'var(--error-color)';
        case 'warning': return 'var(--warning-color)';
        default: return 'var(--primary-color)';
      }
    }};
  
  p {
    flex: 1;
    margin: 0;
    color: var(--text-color);
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--dark-gray);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease, transform 0.2s ease;
  
  &:hover {
    color: var(--text-color);
    transform: scale(1.1);
  }
`;

// Горизонтальное разделение на две части
export const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default theme; 
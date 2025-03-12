import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    background-color: var(--light-gray);
  }
  50% {
    background-color: var(--medium-gray);
  }
  100% {
    background-color: var(--light-gray);
  }
`;

const SkeletonItem = styled.div`
  background-color: var(--light-gray);
  border-radius: ${props => props.borderRadius || '4px'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '20px'};
  margin: ${props => props.margin || '0 0 0.5rem 0'};
  animation: ${pulse} 1.8s ease-in-out infinite;
  opacity: 0.7;
`;

/**
 * Компонент для отображения плейсхолдеров при загрузке данных.
 * Создает анимированный эффект загрузки для улучшения пользовательского опыта.
 */
const Skeleton = ({ 
  type = 'text', 
  count = 1, 
  width, 
  height, 
  borderRadius,
  margin,
  className
}) => {
  // Создаем массив с количеством элементов равным count
  const items = Array(count).fill(null);
  
  // В зависимости от типа, возвращаем разные стили скелетона
  switch (type) {
    case 'text':
      return (
        <div className={className}>
          {items.map((_, index) => (
            <SkeletonItem 
              key={index} 
              width={width} 
              height={height || '20px'} 
              borderRadius={borderRadius}
              margin={margin}
            />
          ))}
        </div>
      );
      
    case 'circle':
      return (
        <div className={className}>
          {items.map((_, index) => (
            <SkeletonItem 
              key={index} 
              width={width || '60px'} 
              height={height || '60px'} 
              borderRadius="50%"
              margin={margin}
            />
          ))}
        </div>
      );
      
    case 'card':
      return (
        <div className={className} style={{ overflow: 'hidden', borderRadius: '8px' }}>
          <SkeletonItem height={height || '200px'} margin="0" />
          <div style={{ padding: '1rem' }}>
            <SkeletonItem height="24px" margin="0 0 1rem 0" />
            <SkeletonItem width="60%" height="16px" margin="0 0 0.5rem 0" />
            <SkeletonItem width="40%" height="16px" margin="0 0 1rem 0" />
            <SkeletonItem width="30%" height="16px" margin="0" />
          </div>
        </div>
      );
      
    case 'product':
      return (
        <div className={className} style={{ overflow: 'hidden', borderRadius: '8px' }}>
          <SkeletonItem height={height || '200px'} margin="0" />
          <div style={{ padding: '1rem' }}>
            <SkeletonItem height="18px" margin="0 0 1rem 0" width="80%" />
            <SkeletonItem height="24px" margin="0 0 1rem 0" width="40%" />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <SkeletonItem width="30%" height="16px" />
              <SkeletonItem width="20%" height="16px" />
            </div>
          </div>
        </div>
      );
      
    default:
      return (
        <div className={className}>
          {items.map((_, index) => (
            <SkeletonItem 
              key={index} 
              width={width} 
              height={height} 
              borderRadius={borderRadius}
              margin={margin}
            />
          ))}
        </div>
      );
  }
};

export default Skeleton; 
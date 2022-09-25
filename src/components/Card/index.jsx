import './styles.css';
import { useMemo } from 'react';

export const Card = ({
  className = '',
  children,
  type = 'tile',
  outlined = '',
}) => {
  const types = {
    rounded: 'rounded-lg',
    tile: 'rounded-none',
  };
  const outline = 'border-solid border';
  const cardType = useMemo(() => types[type], [type]);

  return (
    <div className={`card ${cardType} ${outlined && outline} ${className}`}>
      {children}
    </div>
  );
};

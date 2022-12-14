import './styles.css';
import { useMemo } from 'react';

export const Avatar = ({
  className = '',
  children,
  size = 'small',
  type = 'circle',
  color = 'transparent',
}) => {
  const sizes = {
    small: 'w-6 h-6',
    medium: 'w-16 h-16',
    large: 'w-32 h-32',
  };

  const types = {
    circle: 'rounded-full',
    rounded: 'rounded-lg',
    tile: 'rounded-none',
  };

  const avatarSize = useMemo(() => sizes[size], [size]);
  const avatarType = useMemo(() => types[type], [type]);

  return (
    <div className={`avatar ${avatarSize} ${avatarType} ${color} ${className}`}>
      {children}
    </div>
  );
};

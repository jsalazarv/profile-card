import './styles.css';
import useTheme from '../../hooks/useTheme.js';

export const ThemeToggle = ({ className = '' }) => {
  const { toggleTheme, isLight } = useTheme();

  return (
    <input
      className={`toggle ${className}`}
      type="checkbox"
      onClick={toggleTheme}
      aria-label="toggleTheme"
      defaultChecked={isLight}
    />
  );
};

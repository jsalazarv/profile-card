import './styles.css';
import useDarkMode from '../../hooks/useDarkMode.js';

export const ThemeToggle = ({ className = '' }) => {
  const [colorTheme, setTheme] = useDarkMode();

  const toggleTheme = () => {
    setTheme(colorTheme);
  };

  return (
    <input
      className={`toggle ${className}`}
      type="checkbox"
      onClick={toggleTheme}
      aria-label="toggleTheme"
    />
  );
};

import './styles.css';
import useDarkMode from '../../hooks/useDarkMode.js';

export const ThemeToggle = ({ className = '' }) => {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <input
      className={`toggle ${className}`}
      type="checkbox"
      onClick={() => setTheme(colorTheme)}
    />
  );
};

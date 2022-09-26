import './styles.css';

export const ThemeToggle = ({ className = '' }) => {
  return (
    <>
      <input className={`toggle ${className}`} type="checkbox" />
    </>
  );
};

import './styles.css';
import { ThemeToggle } from '../ThemeToggle/index.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const Header = ({}) => {
  return (
    <header className="header">
      <nav className="header__navbar" aria-label="Top">
        <div className="navbar__content">
          <div className="logo__container">
            <a href="https://jsalazarv.dev/" target="_blank">
              <h2>[Js]</h2>
            </a>
          </div>
          <div className="items__container">
            <a href="https://github.com/jsalazarv/profile-card" target="_blank">
              <FontAwesomeIcon
                className="text-2xl border-black dark:text-amber-500 dark:text-3xl transition-all duration-1000"
                icon={faGithub}
              />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

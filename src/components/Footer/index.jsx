import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

export const Footer = ({ phrase = 'Designed with' }) => {
  return (
    <>
      <footer className="footer">
        <p>
          {phrase}
          <span>
            <FontAwesomeIcon icon={faHeart} />
          </span>
        </p>
      </footer>
    </>
  );
};

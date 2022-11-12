import './styles.css';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer = ({
  phrase = 'Designed with',
  icon = <FontAwesomeIcon icon={faHeart} />,
}) => {
  return (
    <>
      <footer className="footer">
        <p>
          {phrase}
          <span>{icon}</span>
        </p>
      </footer>
    </>
  );
};

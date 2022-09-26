import './styles.css';
import { ProfileCard } from './Components/ProfileCard';
import { ThemeToggle } from '../../components/ThemeToggle';

export const Home = () => {
  return (
    <>
      <ThemeToggle />
      <ProfileCard />
    </>
  );
};

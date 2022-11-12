import './styles.css';
import { Card } from '../../../../components/Card/index.jsx';
import { Avatar } from '../../../../components/Avatar/index.jsx';

export const ProfileCard = () => {
  return (
    <Card className="profile-card" type="rounded">
      <Avatar className="profile-card__avatar" type="circle" size="large">
        <img
          className="grayscale dark:grayscale-0"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGMsJNRv8en8a8mnoT_W9D7CjqV55SAPTurg&usqp=CAU"
          alt=""
        />
      </Avatar>
      <div className="profile-card__content">
        <h1>The Notorious B.I.G.</h1>
        <h3>United States</h3>
      </div>
      <div className="profile-card__footer"></div>
    </Card>
  );
};

import './App.css';
import { Avatar } from './components/Avatar';
import { Card } from './components/Card';

function App() {
  return (
    <div className="App">
      <Card className="w-96 bg-white">
        <Avatar type="circle" size="large">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGMsJNRv8en8a8mnoT_W9D7CjqV55SAPTurg&usqp=CAU"
            alt=""
          />
        </Avatar>
      </Card>
    </div>
  );
}

export default App;

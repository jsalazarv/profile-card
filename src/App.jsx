import './App.css';
import { Avatar } from './components/Avatar';

function App() {
  return (
    <div className="App">
      <Avatar type="circle" size="large">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGMsJNRv8en8a8mnoT_W9D7CjqV55SAPTurg&usqp=CAU"
          alt=""
        />
      </Avatar>
    </div>
  );
}

export default App;

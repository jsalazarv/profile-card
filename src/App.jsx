import './App.css';
import { Home } from './views/Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer phrase="Coded with" />
    </div>
  );
}

export default App;

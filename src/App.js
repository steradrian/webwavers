import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import PFL from './Components/PFL/PFL';
import Description from './Components/Description/Description';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Home />
        <PFL />
        <Description />
      </div>
    </Router>

  );
}

export default App;

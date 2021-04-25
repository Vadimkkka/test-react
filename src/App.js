import logo from './logo.svg';
import './App.css';

import Welcome from './welcome/'

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Welcome />
    </div>
  );
}

export default App;
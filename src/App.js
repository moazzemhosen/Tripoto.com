

import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import { LargeWithLogoLeft } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <HomePage/>
      <LargeWithLogoLeft />

    </div>
  );
}

export default App;

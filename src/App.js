import { LargeWithLogoLeft } from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Suggestion from "./components/Suggestion/Suggestion";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Suggestion/>
      <LargeWithLogoLeft />
    </div>
  );
}

export default App;

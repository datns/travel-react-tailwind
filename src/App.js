import './App.css';
import Navbar from "./components/Navbav";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <Navbar />
        <Hero />
        <Destinations />
      <Search />
    </div>
  );
}

export default App;

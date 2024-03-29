import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { MainRoutes } from "./Routes/MainRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;

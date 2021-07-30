import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

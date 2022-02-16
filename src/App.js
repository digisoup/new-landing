import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Navbar />
    </HashRouter>
  );
}

export default App;

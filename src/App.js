import "./App.css";
import Header from "./Components/Header.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import Contact from "./Pages/Contact.js";
import About from "./Pages/About.js";

//Component for rendering Navbar and Handling the routing tree
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="contact" element={<Contact />} />
          <Route exact path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

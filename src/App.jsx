import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./Pages/Services/Services";
import Portfolio from "./Pages/Portfolio/Portfolio";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
6
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path="/services" element={<Services/>}/>
      </Routes>
      <Routes>
        <Route path="/portfolio" element={<Portfolio/>}/>
      </Routes>
      <Routes>
        <Route path="/about-us" element={<AboutUs/>}/>
      </Routes>
      <Routes>
        <Route path="/contact-us" element={<ContactUs/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

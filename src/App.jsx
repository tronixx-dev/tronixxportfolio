import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar"
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";




function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/contact" element={<Contact/>} />
           <Route path="/about" element={<About/>} />
           <Route path="/signup" element={<Signup/>} />
           <Route path="/login" element={<Login/>} />
          
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


import logo from './logo.svg';
import './App.css';
import Topbar from './components/topbar/Topbar';
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Browse from "./pages/browse/Browse";
import Postpage from "./pages/Postpage/Postpage"
import Contact from "./pages/contact/Contact";
import Category from "./pages/category/Category"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Topbar/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/browse" element={<Browse/>}/>
        <Route path="/category:catname" element={<Category/>}/>
        <Route path="/post:postId" element={<Postpage/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

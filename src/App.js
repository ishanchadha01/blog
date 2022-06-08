import logo from './logo.svg';
import './App.css';
import Topbar from './components/topbar/Topbar';
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import Browse from "./pages/browse/Browse";
import Postpage from "./pages/postpage/Postpage"
import Contact from "./pages/contact/Contact";
import Category from "./pages/category/Category"
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Topbar/>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/browse" element={<Browse/>}/>
          <Route path="/category:catname" element={<Category/>}/>
          <Route path="/post:postId" element={<Postpage/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

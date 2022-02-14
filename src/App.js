import logo from './logo.svg';
import './App.css';
import Topbar from './components/topbar/Topbar';
import Homepage from "./pages/homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Topbar/>
      <Routes>
        <Route exact path="/" element={<Homepage />}/>
        <Route path="/posts" element={<Homepage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

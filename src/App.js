import logo from './logo.svg';
import './App.css';
import Topbar from './components/topbar/Topbar';
import Homepage from "./pages/homepage/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
      </Routes>.
    </Router>
  );
}

export default App;

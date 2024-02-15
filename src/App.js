import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // These components are used for handling routing in a React application.
import Navbar from './components/Navbar';
import Card from './components/Card';
import Home from './components/Home';

function App() {  // Defines a route for the root path ('/') that renders the Home component when the root path is accessed.
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>                     
        <Route path='search/:value' element={<Card />}/>
      </Routes>
    </Router>
  );
}

export default App;  // This allows other parts of our application to import and use the App component.

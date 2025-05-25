import './App.css';
import './pages/restAPI.json';
import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Success from './pages/Success';
import Notfound from './pages/Notfound';
import Menu from './pages/Menu';

const App = () => {
  return ( 
  <Router>
    <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/success" element={<Success />}/> 
       <Route path="*" element={<Notfound />}/>
       <Route path="/menu" element = {<Menu />}/>
    </Routes>
  </Router>
  )
}

export default App;

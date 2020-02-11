import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Payment from "./pages/Payment"
import Cart from "./pages/Cart"


function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Signup" component={Signup} />
      <Route exact path="/Payment" component={Payment} />
      <Route exact path="/Cart" component={Cart} />
    </Router>
  );
}

export default App;

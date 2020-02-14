import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Payment from "./pages/Payment"
import Cart from "./pages/Cart"
import Wrapper from "./components/Wrapper"
import Item from "./pages/Item"
import "./App.css"
import { StoreProvider } from './utils/GlobalState';


function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/Payment" component={Payment} />
            <Route exact path="/Cart" component={Cart} />
            <Route exact path="/Item" component={Item} />
            <Footer />
          </Wrapper>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;

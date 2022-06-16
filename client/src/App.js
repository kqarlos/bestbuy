import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
// import { StoreProvider } from './utils/GlobalState';
import { Provider } from 'react-redux';
import store from './utils/store';


function App() {
  return (
    <Router>
      <div>
        <Provider store={store}>
          <Navbar />
          <Wrapper>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Payment" element={<Payment />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Item" element={<Item />} />
              <Route path="*" element={<Home />} />
            </Routes>
            <Footer />

          </Wrapper>

        </Provider>
      </div>
    </Router>
  );
}

export default App;

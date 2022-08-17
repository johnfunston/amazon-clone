/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import './App.css';
import Login from './Login';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {auth} from './firebase';
import Payment from './Payment';
import {useStateValue} from './StateProvider';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe("pk_test_51LXZ4oLDYQmKiWABQOWG3QkmVT8CQ3w8OCo1oDLFeRTgPUsA4JhoXjpvPrxvDpugqKU6DDmRLs6MFd1PfpetrmmH00sZItOv0r");

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('The user is: ', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []); // only runs once while array is empty,
  // but if we add in something like user, or basket
  // then it will run every time one of those components
  // is updated

  return (
    // BEM Naming Convention
    <Router>
      <div className="app">
        <Routes>
          <Route path="/orders" element={[<Header />, <Orders/>]} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/checkout" element={[<Header/>, <Checkout/>]} />
          <Route path="/" element={[<Header/>, <Home/>]} />
          <Route path="/payment" element={[<Header/>, <Elements stripe={promise}><Payment/></Elements>]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

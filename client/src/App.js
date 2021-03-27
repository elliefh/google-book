import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Search from './pages/search';
import Saved from './pages/saved';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Route>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Route>
      <Footer/>
    </Router>
  );
}

export default App;

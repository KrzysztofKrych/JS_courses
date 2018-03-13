import React, { Component } from 'react';
import{
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

//components

import Header from './components/headerComponent/Header.js';
import Footer from './components/footerComponent/Footer.js';
import Homepage from './components/pages/Homepage.js';
import Products from './components/pages/Products.js';

import './Assets/css/default.min.css';


class App extends Component {
  render() {
    return (
        <Router>
      <div className="App">
        <Header />
        
        <Route exact path='/' component={Homepage} />
         <Route exact path='/Products' component={Products} />
        
        <Footer />
      </div>
        </Router>
    );
  }
}

export default App;

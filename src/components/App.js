import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import Header from './Header'
import Main from './Main';
import Footer from './Footer';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer/>
      </div>
    );
  }
}

export default App;
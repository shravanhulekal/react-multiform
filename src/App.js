import React, { Component } from 'react';
import MainForm from './components/MainForm';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Simple User Database</NavbarBrand>
      </Navbar>
      <MainForm/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage'
import Register from './Register';
import Login from './Login';

class App extends Component {
  render () {
      return (
        <Router>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Homepage" element={<Homepage />} />
          </Routes>
        </Router>
      )
  }
}

export default App;
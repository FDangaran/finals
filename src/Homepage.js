import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavigationBar'
import Body from './Body'

export default class Homepage extends Component {
  render () {
      return (
        <container>
        <NavBar />
        <Body />
        </container>
      )
  }
}

import React, { Component } from 'react'
import Navbar from './nav';
import './App.css'


class NavBar extends Component {
    render() {
        
        return <div className="navi">
        <nav className="navbar navbar-dark fixed-top flex-md-nowrap p-0 shadow navi">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0 "  target="_blank">DecenetralizedTodo List</a>
        </nav>
        </div>
    }
  }
  
  export default NavBar;
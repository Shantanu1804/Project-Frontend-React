import React, { Component } from 'react'
import {Link,NavLink} from 'react-router-dom';
export class Navbar extends Component {
  render() {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-success container    ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            Lloyds Banking Group
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="">
                  Home
                </NavLink>
              </li>

              <li className="nav-item active">
                <NavLink className="nav-link" to="about">
                  About
                </NavLink>
              </li>

              <li className="nav-item active">
                <NavLink className="nav-link" to="contact">
                  Contact
                </NavLink>
              </li>

              </ul>
            
          </div>
          <Link className="btn btn-outline-light w-20" to ="/user/employees">Add users</Link> 
        
          <Link className="btn btn-outline-light w-20" to ="/user/employeedata">Add Employees</Link>
        </div>
      </nav>
      
    )
  }
}

export default Navbar;
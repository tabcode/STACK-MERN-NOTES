import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          React App
          </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ml-auto" id="navBar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Notes
                </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/create">
                Create Note
                </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/user">
                Users
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

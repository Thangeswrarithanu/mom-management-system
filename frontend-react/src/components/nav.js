import React from 'react'
import { Link } from 'react-router-dom'

const nav = () => {
  
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">MOM Management</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link">Signup</Link>
              </li>
              <li className="nav-item">
                <Link to="/add-video" className="nav-link">Add Video</Link>
              </li>
              <li className="nav-item">
                <Link to="/list" className="nav-link">Video List</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default nav
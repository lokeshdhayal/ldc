import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as firebase from 'firebase'

const Navigation = (props) => {
    console.log(props.colors)
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:`${props.colors}`}} >
  <Link className="navbar-brand" href="#" to = "/ldc"><i className = "fa fa-home"></i></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to = "/ldc">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/help">Help??</Link>
          <Link className="dropdown-item" to="/cofounder">Co-Founder</Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" to="/theme">Theme</Link>
        </div>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" to="/theme" tabIndex="-1" aria-disabled="true">Help??</Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <Link to ="/join" className="btn btn-success my-2 my-sm-0" type="submit"><span className="fa fa-search"></span></Link>
    </form>
  </div>
</nav>
    )
}

export default Navigation
import React from 'react'
import {Link} from 'react-router-dom'
export default function navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">Hidden brand</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    
    <div style={{"marginLeft":"550px"}}>
        <Link to='/create'>
      <button class="btn btn-outline-success my-2 my-sm-0 ml-5" type="submit" style={{"width":"100px"}}>
          Add detail</button></Link>
          <Link to='/login'>
      <button class="btn btn-outline-success my-2 my-sm-0 ml-5" type="submit" style={{"width":"100px","marginLeft":"20px"}}>Login</button>
      </Link>
      <Link to='/register'>
      <button class="btn btn-outline-success my-2 my-sm-0 ml-5" type="submit" style={{"width":"100px","marginLeft":"20px"}}>Singn Up</button>
      </Link>
      </div>
  </div>
</nav>
        </div>
    )
}

import RestaurentCreate from "./components/restaurentCreate";
import RestaurentDetail from "./components/restaurentDetail";
import RestaurentList from "./components/restaurentList";
import RestaurentUpdate from "./components/restaurentUpdate";

import React from "react";
import Navbar from "./components/navbar";

import RestaurentSearch from "./components/restaurentSearch";
import 'bootstrap';
import {Route,BrowserRouter as Router,Routes } from 'react-router-dom'
import Login from "./Auth/login";
import Register from "./Auth/register";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"



function App() {
  return (
  

      <Router>
      <Navbar />
      
<Routes>

<Route exact path='/create' element={<RestaurentCreate  authed={true} RestaurentDetail={<RestaurentDetail/>}/>}></Route>
   
<Route exact path='/detail' element={<RestaurentDetail />}></Route>
<Route exact path='/list' element={<RestaurentList/>}></Route>
<Route exact path='/update/:id' element={<RestaurentUpdate props="...props" />}></Route>
<Route exact path='/search' element={<RestaurentSearch/>}></Route>

<Route exact path='/login' element={<Login/>}></Route>
<Route exact path='/register' element={<Register/>}></Route>


</Routes>

      </Router>

  );
}

export default App;

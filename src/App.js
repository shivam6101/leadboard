import React, { useEffect, useState } from 'react';
import './App.css';
import {Route,Switch} from "react-router-dom"
import Leadboard from "./Leadboard"
import Home from "./Home"
import Form from "./Form"
const App = () => {
  return(
    <>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/form" component={Form} />
        <Route path="/leadboard" component={Leadboard} />
    </Switch>
    </>
  )
}

export default App;

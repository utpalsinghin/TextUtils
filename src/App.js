import "./App.css";
import About from "./components/About";
import  Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from 'react';
import Alert from "./components/Alert";
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";

function App() {
  const [mode , setMode] = useState(false);
  const [alert , setAlert] = useState(null); 
  const showAlert = (message , type) => {
    setAlert({
      msg : message,
      alertType : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === false) {
      setMode(true);
      showAlert("Dark Mode Toggle ", "success");
    }
    else {
      setMode(false);
      showAlert("Light Mode Toggle ", "success");
    }
  }
  return (
    <>      
      <Router>
          <Navbar titleText = {"Text Utils"} toggleMode = {toggleMode} mode = {mode}/> 
          <Alert alert = {alert}/>
        <div className="container my-3">
        <Switch>
          <Route exact path ="/">
            <Textform heading = {"Analyze The Text Overhere"} mode = {mode} showAlert = {showAlert}/> 
          </Route>
          <Route exact path ="/about">
            <About /> 
          </Route>
        </Switch>
          {/* <Textform heading = {"Analyze The Text Overhere"} mode = {mode} showAlert = {showAlert}/> */}
          {/* <About /> */}
        </div>
      </Router>
    </>  
  );
}

export default App;

import React from "react";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login";
import {BrowserRouter as Router,Routes,Route,Redirect,} from "react-router-dom";

function App() {
  return (
    <React.Fragment>


        <Routes>
          <Route exact path="/" Component={SignUp}/>
          <Route  path="/Login" Component={Login}/>
        </Routes>

     
    </React.Fragment>
  );
}

export default App;

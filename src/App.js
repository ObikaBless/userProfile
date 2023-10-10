import React from "react";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
// import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <SignUp/>
      <Login/>
      <Profile/>
    </React.Fragment>
  );
}

export default App;

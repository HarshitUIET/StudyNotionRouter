import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import PrivateRouter from "./components/PrivateRouter";

function App() {

   const [loggedIn,setLoggedIn] = useState(false);

  return (
    <div className=" h-screen w-screen flex flex-col bg-richblack-900">
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Login" element={<Login setloggedin={setLoggedIn}/>} />
          <Route path="/SignUp" element={<SignUp setloggedin={setLoggedIn} />} />
          <Route path="/Dashboard" element={
            <PrivateRouter loggedin={loggedIn}>
              <Dashboard loggedIn={loggedIn}/>
            </PrivateRouter>
          } />
        </Routes>
    </div>
  )
}

export default App;

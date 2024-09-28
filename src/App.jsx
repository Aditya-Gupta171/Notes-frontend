import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Protectedroute from "./components/Protectedroute";

function Logout() {
  localStorage.clear();
  return <Navigate to="/Login/" />
}
function RegisterandLogout() {
  localStorage.clear();
  return <Register/>
}
function App() {
  return(
  <BrowserRouter>
   <Routes>
    <Route
    path="/"
    element={
      <Protectedroute>
        <Home/>
      </Protectedroute>
    }
    />
    <Route path="/login" element={<Login/>}/>
    <Route path="/logout" element={<Logout/>}/>
    <Route path="/register" element={<RegisterandLogout/>}/>
    <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;

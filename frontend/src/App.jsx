import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AddLead, Customers, Dashboard, Home, Login, Register } from "./pages";

function App() {
  useEffect(() => {
    const token = localStorage.getItem("access");
    let decoded = jwt_decode(token);

    // console.log(decoded);
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/addlead" element={<AddLead />} />
      <Route path="/customers" element={<Customers />} />
    </Routes>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { InitialRegister } from "../pages/InitialRegister";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Explore } from "../pages/Explore";
import { ForgotPassword } from "../pages/ForgotPassword";
import { Profile } from "../pages/Profile";
import { Settings } from "../pages/Settings";
import { EditData } from "../pages/EditData";

const isAuthenticated = () => {
  return localStorage.getItem("authToken") !== null;
};

export function AppRoutes() {
  const [loggedIn, setLoggedIn] = useState(isAuthenticated());
  const [processCompleted, setProcessCompleted] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialRegister setProcessCompleted={setProcessCompleted} />} />
        <Route path="/register" element={processCompleted ? <Register /> : <Navigate to="/" replace />} />
        <Route
          path="/login"
          element={<Login setLoggedIn={setLoggedIn} />}
        />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route
          path="/explore"
          element={loggedIn ? <Explore /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile/:userId"
          element={loggedIn ? <Profile /> : <Navigate to="/login" />}
        />
        <Route
          path="/settings"
          element={loggedIn ? <Settings /> : <Navigate to="/login" />}
        />
        <Route
          path="/editdata"
          element={loggedIn ? <EditData /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
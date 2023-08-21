import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import EmployeeHome from './pages/employeeHome';
import Login from './pages/login';
import ManagerHome from "./pages/managerHome";
import AdminHome from "./pages/adminHome";
import { useAuthContext } from "./hooks/useAuthContex";
import { useEffect, useState } from "react";

function App() {
  const { currentUser, dispatch } = useAuthContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      dispatch({ type: "LOGIN", payload: currentUser });
    }
    setLoading(false);
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      {currentUser && console.log(currentUser.user.role)}
      {!currentUser && console.log("User is not there at all")}
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              currentUser ? (
                <Navigate to={getUserRoute(currentUser.user.role)} replace />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/employee"
            element={
              currentUser && currentUser.user.role === "Employee" ? (
                <EmployeeHome />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/manager"
            element={
              currentUser && currentUser.user.role === "Manager" ? (
                <ManagerHome />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/admin"
            element={
              currentUser && currentUser.user.role === "Admin" ? (
                <AdminHome />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Helper function to determine the appropriate route based on user role
function getUserRoute(role) {
  if (role === "Admin") {
    return "/admin";
  } else if (role === "Manager") {
    return "/manager";
  } else if (role === "Employee") {
    return "/employee";
  }
  return "/";
}

export default App;

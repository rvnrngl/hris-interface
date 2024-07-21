import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { AuthLayout } from "./layouts/AuthLayout";
import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";
import LeaveDetails from "./pages/LeaveDetails/LeaveDetails";
import LeaveRequest from "./pages/LeaveRequest/LeaveRequest";
import { Personal } from "./pages/Personal/Personal";
import { LeaveList } from "./pages/Leave/LeaveList";
import { Approval } from "./pages/Leave/Approval";
import { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "./pages/ProtectedRoute";
import { RedirectIfLoggedIn } from "./pages/RedirectIfLoggedIn";
import { LeaveForm } from "./pages/Leave/LeaveForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <RedirectIfLoggedIn>
              <AuthLayout />
            </RedirectIfLoggedIn>
          }
        >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <RootLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="personal" element={<Personal />} />
          <Route path="leave">
            <Route path="approval" element={<Approval />} />
            <Route path="list" element={<LeaveList />} />
            <Route path="details" element={<LeaveDetails />} />
            <Route path="form" element={<LeaveForm />} />
          </Route>
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;

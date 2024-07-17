import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { AuthLayout } from "./layouts/AuthLayout";
import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";
import { Personal } from "./pages/Personal/Personal";
import { LeaveList } from "./pages/Leave/LeaveList";
import { Approval } from "./pages/Leave/Approval";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} replace />} />
        <Route path="/" element={<RootLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="personal" element={<Personal />} />
          <Route path="leave">
            <Route path="approval" element={<Approval />} />
            <Route path="list" element={<LeaveList />} />
          </Route>
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

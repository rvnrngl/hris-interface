import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { AuthLayout } from "./layouts/AuthLayout";
import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} replace />} />
        <Route path="/" element={<RootLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
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

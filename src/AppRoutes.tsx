import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../src/pages/Login";
import { Home } from "../src/pages/Home";
import { PrivateRoute } from "../src/routes/PrivateRoute";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
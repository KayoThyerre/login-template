import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../src/pages/Login";
import { Home } from "../src/pages/Home";
import { PrivateRoute } from "../src/routes/PrivateRoute";

type AppRoute = {
  path: string;
  element: React.ReactNode;
  isPrivate?: boolean;
};

const routes: AppRoute[] = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
    isPrivate: true,
  },
];

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) =>
          route.isPrivate ? (
            <Route
              key={route.path}
              path={route.path}
              element={
                <PrivateRoute>
                  {route.element}
                </PrivateRoute>
              }
            />
          ) : (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          )
        )}
      </Routes>
    </BrowserRouter>
  );
}
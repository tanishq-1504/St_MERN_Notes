import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import MyDashboard from "./pages/my-dashboard/MyDashboard";
import AdminRoute from "./routes/AdminRoute";
import UserProfile from "./pages/UserProfile";
import TrainersPage from "./pages/TrainersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <LogInPage />
      </PublicRoute>
    ),
  },
  {
    path: "/register",
    element: <SignUpPage />,
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <UserProfile />
      </PrivateRoute>
    ),
  },
  {
    path:"/trainer",
    element: (
      <PrivateRoute>
        <TrainersPage/>
      </PrivateRoute>
    )
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <AdminRoute>
          <MyDashboard />
        </AdminRoute>
      </PrivateRoute>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

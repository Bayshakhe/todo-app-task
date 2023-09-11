import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/loginPage/Login";
import RegisterPage from "../pages/registerPage/RegisterPage";
import HomePage from "../pages/homePage/HomePage";
import HomeLayout from "../pages/homePage/HomePage";
import PrivateRoute from "../routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <HomeLayout></HomeLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element:<HomePage></HomePage>
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <RegisterPage></RegisterPage>,
  },
]);

export default router;

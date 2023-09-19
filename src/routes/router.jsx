import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/loginPage/Login";
import RegisterPage from "../pages/registerPage/RegisterPage";
import PrivateRoute from "../routes/PrivateRoute";
import HomeLayout from "../layouts/HomeLayout";
import HomePage from "../pages/homePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <HomeLayout/>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element:<HomePage/>
      },
    ],
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <RegisterPage/>,
  },
]);

export default router;

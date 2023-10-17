import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import MainLayout from "../mainLayout/MainLayout";

const myCreateRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
        {
            path: '/',
            element:<Home/>
        }
    ]
  },
]);

export default myCreateRouter;
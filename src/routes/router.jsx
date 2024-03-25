import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Landing } from "../components/Landing";
import { MealDetail } from "../pages/MealDetail";
import { NotFound } from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/meals/:id",
        element: <MealDetail />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import PortfolioFormPage from "../pages/PortfolioFormPage"; 
import PortfolioDetailPage from "../pages/PortfolioDetailPage";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/create",
        element: <PortfolioFormPage />,
      },
      {
        path: "/edit/:id",
        element: <PortfolioFormPage />,
      },
      {
        path: "/portfolio/:id",
        element: <PortfolioDetailPage />,
      },
    ],
  },
]);
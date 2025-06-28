import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { PortfolioProvider } from "./contexts/PortfolioContext";
import { ThemeProvider } from "./contexts/ThemeContext"; 
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <PortfolioProvider>
        <RouterProvider router={router} />
      </PortfolioProvider>
    </ThemeProvider>
  </React.StrictMode>
);
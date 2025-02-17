import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../layout/App";
import Catalogue from "../../features/catalogue/Catalogue";
import HomePage from "../../features/home/HomePage";
import ContactPage from "../../features/contact/ContactPage";
import AboutPage from "../../features/about/AboutPage";
import ProductDetails from "../../features/catalogue/ProductDetails";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "catalogue", element: <Catalogue /> },
      { path: "catalogue/:id", element: <ProductDetails /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "server-error", element: <ServerError /> },
      { path: "not-found", element: <NotFound /> },
      { path: "*", element: <Navigate to="not-found" replace /> },
    ],
  },
]);

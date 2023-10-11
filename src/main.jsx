import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login.jsx";
import Menu from "./components/Menu.jsx";
import Basket from "./components/Basket.jsx";
import NotFound from "./components/NotFound.jsx";
import Register from "./components/Register.jsx";
import Checkout from "./components/Checkout.jsx";
import CompletedOrders from "./components/CompletedOrders.jsx";
import ItemDetail from "./components/ItemDetail.jsx";
import About from "./components/About.jsx";
import Careers from "./components/Careers.jsx";
import Locate from "./components/Locate.jsx";
import Deals from "./components/Deals.jsx";
import Breakfast from "./components/Breakfast.jsx";
import Burgers from "./components/Burgers.jsx";
import Sandwiches from "./components/Sandwiches.jsx";
import Fries from "./components/Fries.jsx";
import Pizzas from "./components/Pizzas.jsx";
import Hotdogs from "./components/Hotdogs.jsx";
import Salads from "./components/Salads.jsx";
import Sides from "./components/Sides.jsx";
import Treats from "./components/Treats.jsx";
import Milkshakes from "./components/Milkshakes.jsx";
import Smoothies from "./components/Smoothies.jsx";
import Softdrinks from "./components/Softdrink.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Menu /> },
      { path: "basket", element: <Basket /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "checkout", element: <Checkout /> },
      { path: "orders", element: <CompletedOrders /> },
      { path: "item/:itemId", element: <ItemDetail /> },
      { path: "about", element: <About /> },
      { path: "careers", element: <Careers /> },
      { path: "locate", element: <Locate /> },
      { path: "*", element: <NotFound /> },
      { path: "deals", element: <Deals /> },
      { path: "breakfast", element: <Breakfast /> },
      { path: "burgers", element: <Burgers /> },
      { path: "sandwiches", element: <Sandwiches /> },
      { path: "fries", element: <Fries /> },
      { path: "pizzas", element: <Pizzas /> },
      { path: "hotdogs", element: <Hotdogs /> },
      { path: "salads", element: <Salads /> },
      { path: "sides", element: <Sides /> },
      { path: "treats", element: <Treats /> },
      { path: "milkshakes", element: <Milkshakes /> },
      { path: "smoothies", element: <Smoothies /> },
      { path: "softdrinks", element: <Softdrinks /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

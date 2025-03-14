import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import UserContext from "./utils/UserContext.js";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Body from "./components/Body.jsx";
import Error from "./components/Error.jsx";
import Contact from "./components/Contact.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";

const About = lazy(() => import("./components/About.jsx"));
const Cart = lazy(() => import("./components/Cart.jsx"));

const AppLayout = () => {
  // Authentication
  const [userName, setUserName] = useState();
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "User",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow mt-32">
            <Outlet />
          </div>
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

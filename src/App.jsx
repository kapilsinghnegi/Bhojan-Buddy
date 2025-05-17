import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./appStore.js";
import UserContext from "./features/user/UserContext.js";
import Header from "./ui/components/Header.jsx";
import Footer from "./ui/components/Footer.jsx";
import Body from "./ui/layout/Body.jsx";
import Error from "./ui/components/Error.jsx";
import Contact from "./ui/layout/Contact.jsx";
import RestaurantMenu from "./features/menu/RestaurantMenu.jsx";

const About = lazy(() => import("./ui/layout/About.jsx"));
const Cart = lazy(() => import("./features/cart/Cart.jsx"));

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
        <div className="app flex min-h-screen flex-col">
          <Header />
          <div className="h-full w-full flex-grow pt-16 sm:pt-20 md:pt-24">
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

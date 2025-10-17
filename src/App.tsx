import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Masterlayout from "./layouts/Masterlayout/Masterlayout";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Brands from "./pages/Brands/Brands";
import Orders from "./pages/Orders/Orders";


function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Masterlayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "/products", element: <Products /> },
        { path: "/brands", element: <Brands /> },
        { path: "/orders", element: <Orders /> },
      ],
    },
    // {
    //   path: "/",
    //   // element: (
    //   //   <ProtectedRoute>
    //   //     <MasterLayout />
    //   //   </ProtectedRoute>
    //   // ),
    //  // errorElement: <NotFound />,
    //   children: [
    //     { index: true, element: <Navbar /> },
    //     // { path: "home", element: <Home /> },
    //     // { path: "movies", element: <Movies /> },
    //     // { path: "tvshows", element: <Tvshows /> },
    //     // { path: "people", element: <People /> },
    //     // { path: "details", element: <Details /> },
    //   ],
    // },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;

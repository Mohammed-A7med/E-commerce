import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./shared/Navbar/Navbar";

function App() {
  const routes = createBrowserRouter([
    // {
    //   path: "",
    //   element: <AuthLayout />,
    //   errorElement: <NotFound />,
    //   children: [
    //     { index: true, element: <Login /> },
    //     { path: "login", element: <Login /> },
    //     { path: "register", element: <Register /> },
    //   ],
    // },
    {
      path: "/",
      // element: (
      //   <ProtectedRoute>
      //     <MasterLayout />
      //   </ProtectedRoute>
      // ),
     // errorElement: <NotFound />,
      children: [
        { index: true, element: <Navbar /> },
        // { path: "home", element: <Home /> },
        // { path: "movies", element: <Movies /> },
        // { path: "tvshows", element: <Tvshows /> },
        // { path: "people", element: <People /> },
        // { path: "details", element: <Details /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;

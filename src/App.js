import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";

// import Groups from "./pages/Groups.jsx";
import Profile from "./pages/Profile.jsx";
import Settings from "./pages/Settings.jsx";
import Marketplace from "./pages/Marketplace.jsx";
import Navbar from "./components/Navbar.jsx";
import React, { Suspense, useEffect } from "react";
import SignIn from "./components/SignIn.jsx";

import ProtectedRoute from "./components/ProtectedRoute.jsx";

const LazyGroup = React.lazy(() => import("./pages/Groups.jsx"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute component={<Navbar />} />,
    children: [
      {
        index: true,
        path: "homepage",
        element: <Home />,
      },

      {
        path: "groups",
        element: (
          <Suspense fallback="Loading...">
            <LazyGroup />
          </Suspense>
        ),
      },
      { path: "marketplace", element: <Marketplace /> },
      { path: "settings", element: <Settings /> },
      { path: "profile", element: <Profile /> },
    ],
  },
  { path: "/signin", element: <SignIn /> },
]);

function App() {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <div className="App" id="google_translate_element">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";

// import Groups from "./pages/Groups.jsx";
import Profile from "./pages/Profile.jsx";
import Settings from "./pages/Settings.jsx";
import Marketplace from "./pages/Marketplace.jsx";
import Navbar from "./components/Navbar.jsx";
import React, { Suspense, useEffect } from "react"
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Groups from "./pages/Groups.jsx"
import Welcome from "./components/Welcome.jsx";
import { SnackbarProvider } from "notistack";
import DisplayProductInfo from "./components/DisplayProductInfo.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js"

// const LazyGroup = React.lazy(() => import("./pages/Groups.jsx"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute component={<Navbar />} />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "homepage",
        element: <Home />,
      },

      {
        path: "groups",
        element: <Groups />
        // (
        // <Suspense fallback="Loading...">
        // <LazyGroup />
        // </Suspense>
        // ),
      },
      {
        path: "", 
        children: [
          { path: "marketplace", element: <Marketplace /> },
          { path: "marketplace/:prodId", element: <DisplayProductInfo /> }
        ]
      },
      { path: "settings", element: <Settings /> },
      { path: "profile", element: <Profile /> },

    ],
  },
  { path: "/welcome", element: <Welcome /> },
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
    <SnackbarProvider maxSnack={3}>
      <Provider store={store}>
        <div className="App" id="google_translate_element">
          <RouterProvider router={router} />
        </div>
      </Provider>
    </SnackbarProvider>
  );
}

export default App;

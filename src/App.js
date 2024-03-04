import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Pages from "./pages/Pages.jsx";
import Groups from "./pages/Groups.jsx";
import Profile from "./pages/Profile.jsx";
import Settings from "./pages/Settings.jsx";
import Marketplace from "./pages/Marketplace.jsx";
import Navbar from "./components/Navbar.jsx";
import { useEffect } from "react";
import SignIn from "./components/SignIn.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { index: true, path: "homepage", element: <Home /> },
      { path: "pages", element: <Pages /> },
      { path: "groups", element: <Groups /> },
      { path: "marketplace", element: <Marketplace /> },
      { path: "settings", element: <Settings /> },
      { path: "profile", element: <Profile /> },
    ],
  },
  { path: "/logout", element: <SignIn /> },
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

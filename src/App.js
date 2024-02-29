import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./components/Signin.jsx";
import Home from "./pages/Home.jsx";
import Pages from "./pages/Pages.jsx";
import Groups from "./pages/Groups.jsx";
import Profile from "./pages/Profile.jsx";
import Settings from "./pages/Settings.jsx";
import Friends from "./pages/Friends.jsx";
import Marketplace from "./pages/Marketplace.jsx";
import Navbar from "./components/Navbar.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { index: true, path: "homepage", element: <Home /> },
      { path: "pages", element: <Pages /> },
      { path: "groups", element: <Groups /> },
      { path: "marketplace", element: <Marketplace /> },
      { path: "friends", element: <Friends /> },
      { path: "settings", element: <Settings /> },
      { path: "profile", element: <Profile /> },
    ],
  },
  { path: "/logout", element: <Signin /> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

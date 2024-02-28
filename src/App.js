import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./components/Signin.jsx"
import Home from "./pages/Home.jsx";
const router = createBrowserRouter([
  { path: "/", element: <Signin /> },
  { path: "/homepage", element: <Home /> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

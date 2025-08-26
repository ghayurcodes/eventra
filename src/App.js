
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/Homepage";
import LoginPage from "./pages/Login";
import { AuthProvider } from "./utils/AuthContext";
import AddEventPage from "./pages/AddEventPage";
import ProtectedRoute from "./utils/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css"

function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
     {
      path: "/add",
      element: <ProtectedRoute><AddEventPage /></ProtectedRoute> 
    },
  ])




  return <AuthProvider>
    <ToastContainer position="top-right" autoClose={3000} /> 
      <RouterProvider router={router} />

  </AuthProvider>

}
export default App;




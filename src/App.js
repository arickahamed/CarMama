import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Services from "./pages/Services";
import Register from "./pages/Register";
import ResetPass from "./pages/ResetPass";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Users from "./pages/Users";
import Admins from "./pages/Admins";
import AddServices from "./pages/AddServices";
import Orders from "./pages/Orders";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset-password" element={<ResetPass />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/users" element={<Users />} />
      <Route path="/admins" element={<Admins />} />
      <Route path="/add-services" element={<AddServices />} />
    </Routes>
    <ToastContainer />
    </>
  );
}

export default App;

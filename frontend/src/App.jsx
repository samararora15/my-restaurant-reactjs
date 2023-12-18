import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Menu from "./components/Menu";
import ContactUs from "./components/ContactUs";
import { AppProvider } from "./AppContext";
import Location from "./components/Location";
import Cart from "./components/Cart";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <AppProvider>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              {/* <Route path='/signup' element = {<Signup/>}/> */}
              <Route path="/menu" element={<Menu />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/location" element={<Location />} />
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
          </CartProvider>
        </AppProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Distribuitor from "./Pages/Distribuitor";
import BackOffice from "./Pages/BackOffice";
import Login from "./Pages/Login";
import CartProvider from "./CartContext";
import AuthProvider from "./AuthContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre-nosotros" element={<AboutUs />} />
              <Route path="/distribuidor" element={<Distribuitor />} />

              <Route
                path="/administrador"
                element={
                    <BackOffice />
                }
              />

              <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

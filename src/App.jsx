
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './landing_page/home/HomePage'
import Navbar from './Navbar';
import AboutPage from'./landing_page/about/AboutPage';
import ProductPage from'./landing_page/products/ProductsPage';
import Signup from'./landing_page/signup/Signup';
import Login from'./landing_page/signup/Login';

import SupportPage from'./landing_page/support/SupportPage';
import NotFound from './NotFound';
import Footer from './Footer';
import OpenAccount from './OpenAccount';
import PricingPage from './landing_page/pricing/Pricing';
import ProtectedRoutes from './ProtectRoute';
import Dashboard from './landing_page/Dashboard';


function App() {
  
  return (
    <>
    

      
        <BrowserRouter>
    <Navbar />
   
    <Routes>
      <Route path="/" element={<HomePage />} />
     
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/price" element={<PricingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/support" element={<SupportPage />} />
      <Route
          path="/dashboard"
          element={<ProtectedRoutes element={<Dashboard />} />}
        />
     {/* // <Route path="/dashboard" element={<Dashboard />} /> */}
      <Route path="/openaccount" element={<OpenAccount />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
   
    <Footer />
  </BrowserRouter>
  
     
    </>
  )
}

export default App

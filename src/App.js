import Footer from "./components/Footer.jsx/Footer";
import Header from "./components/Header/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

import Promotions from "./pages/Promotions/Promotions";
import Ourrestaurant from "./pages/Ourrestaurant/Ourrestaurant";
import Register from "./pages/Register/Register";
import Noodels from "./pages/Noodles/Noodels";
import Cake from "./pages/Cake/Cake";
import Briyani from "./pages/Briyani/Briyani";
import Icecream from "./pages/Icecraem/Icecream";
import Friderice from "./pages/Friderice/Friderice";
import Signin from "./pages/Signin/Signin";
import Cart from "./pages/Cart/Cart";




function App() {
  return (
    <div className="App">
      <>
    
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu/noodles" element={<Noodels/>} />
          <Route path="/promotions" element={<Promotions/>} />
          <Route path="/ourrestaurant" element={<Ourrestaurant/>} />
          <Route path="/sigin" element={<Signin/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/menu/noodels" element={<Noodels/>} />
          <Route path="/menu/friedrice" element={<Friderice/>} />
          <Route path="/menu/Cake" element={<Cake/>} />
          <Route path="/menu/briyani" element={<Briyani/>} />
          <Route path="/menu/icecream" element={<Icecream/>} />
          <Route path="/cart" element={<Cart/>} />

       </Routes> 
    </>

     
    </div>
  );
}

export default App;

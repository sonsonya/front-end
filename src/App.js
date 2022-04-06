import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Login/>} path='/login'/>
        <Route element={<Register/>} path='/register'/>
        <Route element={<Cart/>} path='/cart'/>
        <Route element={<Product/>} path='/detail'/>
        <Route element={<ProductList/>} path='/product'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

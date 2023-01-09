import './App.css';
import React from 'react';
import{BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Error404 } from './components/Error404';
import Footer from './components/Footer';
import Carrito from './components/carrito';
import CartContextProvider from './Context/CartContext'
import Checkout from './components/Checkout';
import CloseInfo from './components/ThankYou';





function App() {
  return (
    <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />}/>
            <Route path={"/category/:id"} element={<ItemListContainer />}/>
            <Route path={"/item/:id"} element={<ItemDetailContainer />}/>
            <Route path={"/cart"} element={<Carrito />} />
            <Route path={"/Checkout"} element={<Checkout />} />
            <Route path={"/closeinfo/:id"} element={<CloseInfo />}/>
            <Route path={"*"} element={<Error404 />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;

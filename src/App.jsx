import React, { useState } from "react";
import Home from "./pages/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);
const handleAdd = (product) => {
    const ProductExist = cartItems.find((item)=> item.id === product.id )
    if (ProductExist){
      setCartItems(cartItems.map((item)=> item.id === product.id ? {
        ...ProductExist , quantity:ProductExist.quantity + 1
      } : item ))
    } else {
      setCartItems([...cartItems, {...product , quantity:1 }]);
    }
  }
  const handleDelete = (product)=>{
    const ProductExist = cartItems.find((item)=> item.id === product.id )
    if(ProductExist){
      setCartItems(cartItems.filter((item)=>item.id !== product.id))
    }
  }

  const handleMinus = (product) => {
    const ProductExist = cartItems.find((item)=> item.id === product.id );
if (ProductExist.quantity === 1){
  setCartItems(cartItems.filter((item)=>item.id !== product.id))
} else {
  setCartItems(cartItems.map((item)=> item.id === product.id ? {...ProductExist , quantity:ProductExist.quantity-1 } : item))
}

  }
  return (
    <main style={{ margin: "0 auto", width: "100%", maxWidth: "1500px" }}>
      <Routes>
        <Route  path="/" element={<Home cartItems={cartItems} />} />
        <Route path="/products" element={<Products handleAdd={handleAdd} cartItems={cartItems} />} />
        <Route path="/cart"  element={<Cart cartItems={cartItems} handleAdd={handleAdd} handleDelete={handleDelete} handleMinus={handleMinus} />} />
      </Routes>
    </main>
  );
}

export default App;

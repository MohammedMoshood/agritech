import React from "react";
import Home from "./pages/Home";
import "./App.css"
import { Routes , Route  } from "react-router-dom";
import Products from "./pages/Products";

function App() {
  return (
    <main style={{margin:"0 auto" ,  width:"100%" , maxWidth:"1500px"}} >
      <Routes>

        <Route path="/" element={<Home/>}  />
        <Route path="/products" element={<Products/>}  />
      </Routes>
          
    </main>
  );
}

export default App;

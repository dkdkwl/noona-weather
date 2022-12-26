import { useState } from 'react';
import './App.css';
import { Routes,Route,Navigate } from "react-router-dom";
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
import Productpage from './page/Productpage';
import ProductDetailPage from './page/ProductDetailPage';
import LoginPage from './page/LoginPage';
import UserPage from './page/UserPage';

function App() {
  const [authentaicate,setAuthenticate] = useState(true);
  const PrivateRoute = ()=> {
    return authentaicate == true?<UserPage/>:<Navigate to="/login"/>
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/about" element={<Aboutpage/>}></Route>
        <Route path="/products" element={<Productpage/>}></Route>
        <Route path="/products/:id/:num" element={<ProductDetailPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/user" element={<PrivateRoute/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

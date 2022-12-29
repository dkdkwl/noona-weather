import './App.css';
import { Route,Routes } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import PrivateRoute from './router/PrivateRoute';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


// 1.전체상품페이지, 로그인,상품상세페이지
// 2 .전체상품페이지에서는 전체 상품을 볼 수 있다.
// 3 .로그인 버튼을 누르면 로그인 페이지가 나온다.
// 4. 상품디테일을 눌렀으나, 로그인이 안 되어있을 경우에는 로그인페이지가 먼저 나온다.
// 5. 로그인이 먼저 되어 있을경우 상품 디테일 페이지를 볼 수 있다.
// 6. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 7. 로그아웃이 되면 상품 디테일 페이지를 볼 수 있다, 다시 오그인 페이지가 보인다. 
// 8. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
// 9. 상품을 검색 할 수 있다.

function App() {
  const [authenticate,setAuthenticate] = useState(false);

  console.log("초기값",authenticate)
  return (
    <div className="App">
      <Navbar authenticate = {authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path='/' element={<ProductAll/>}></Route>
        <Route path='/Login' element={<Login setAuthenticate={setAuthenticate} authenticate={authenticate} />}></Route>
        <Route path='/products/:id' element={<PrivateRoute authenticate = {authenticate}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

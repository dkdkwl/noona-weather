import React from 'react'
import { Navigate } from 'react-router-dom'
import ProductDetail from '../page/ProductDetail';

const PrivateRoute = ({authenticate}) => {
    // console.log("상세페이지",authenticate)
  return authenticate == true ? <ProductDetail/>:<Navigate to="/login"/>;
}

export default PrivateRoute
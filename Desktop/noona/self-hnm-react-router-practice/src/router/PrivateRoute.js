import { Navigate } from 'react-router-dom'
import ProductsDetail from '../page/ProductsDetail';


const privateCheck = ({authenticate})=>{
    return authenticate == true ? <ProductsDetail/> : <Navigate to="/login"/>
}

export default privateCheck
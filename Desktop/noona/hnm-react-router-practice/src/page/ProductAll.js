import React, { useEffect, useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';


const ProductAll = ({authenticate}) => {
    const [productList,setProductList] = useState([]);
    const getProducts = async ()=>{
        let url = `http://localhost:3004/products`;
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
        console.log(data)
    }
    useEffect(()=>{
        getProducts();
    }
    ,[])
  return (
    <div>
        <Container>
          <Row>
            {
              productList.map((menu,i)=>{
                return(
                  <Col lg={3} key={i}><ProductCard authenticate={authenticate} item={menu}/></Col>
                )
              })
            }
          </Row>
        </Container>
    </div>
  )
}

export default ProductAll
import React, { useEffect, useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductAll = ({authenticate}) => {
    const [productList,setProductList] = useState([]);
    const [query,setQuery] = useSearchParams();
    const getProducts = async ()=>{
      let searchQuery = query.get('q') || "";
        let url = `http://localhost:3004/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }
    useEffect(()=>{
        getProducts();
    }
    ,[query])
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
import React, { useEffect, useState } from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductsDetail = () => {
    let {id} = useParams();
    const [product,setProduct] = useState([]);
    const getProducts = async ()=>{
        let url = `http://localhost:3004/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        setProduct(data);
    }
    useEffect(()=>{
        getProducts();
    },[])
  return (
    <Container>
    <Row>
      <Col className='product-img'><img src={product.img} alt="" /></Col>
      <Col>
        <div>
            {product.title}
        </div>
        <div>
            {product.price}
        </div>

      </Col>
    </Row>
  </Container>
  )
}

export default ProductsDetail
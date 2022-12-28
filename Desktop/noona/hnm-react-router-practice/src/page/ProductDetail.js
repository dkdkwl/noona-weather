import React,{useEffect, useState} from 'react'
import { Container, Row, Col,DropdownButton,Dropdown } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  let {id} = useParams();
  const [product,setProduct] = useState(null);
  const getProductDetail = async ()=>{
    let url = `http://localhost:3004/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  }
  
  useEffect(()=>{
    getProductDetail()
  },[])
  return (
    <Container>
      <Row>
        <Col className='product-img'><img src={product?.img} alt="" /></Col>
        <Col>
          <div>
            {product.title}
          </div>
          <div>
            {product.price}
          </div>
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
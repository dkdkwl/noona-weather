import React, { useEffect, useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductAll = ({authenticate}) => {
    const [productList,setProductList] = useState([]);
    const navigator = useNavigate();
    const getProducts = async ()=>{
        let url = `http://localhost:3004/products`;
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
        console.log(productList)
    }
    const moveProduct = (i)=>{
        navigator(`/products/${i}`)
    }

    useEffect(()=>{
        getProducts();
    }
    ,[]);

  return (
    <div>
        <Container>
            <Row>
                {
                    productList.map((items,i)=>{
                        return(
                            <Col lg={3} key={i} onClick={()=>{
                                moveProduct(items.id)
                            }}>
                                <img src={items.img} alt="" />
                                <h1>{items.title}</h1>
                                <p>{items.price}</p>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    </div>
  )
}

export default ProductAll
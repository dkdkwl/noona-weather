import React, { useEffect, useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import { useNavigate,useSearchParams } from 'react-router-dom';

const ProductAll = ({authenticate}) => {
    const [productList,setProductList] = useState([]);
    const [query,setQuery] = useSearchParams();
    const navigator = useNavigate();
    const getProducts = async ()=>{
        let searchQuery = query.get('q') || "";
        let url = `https://my-json-server.typicode.com/dkdkwl/noona-hnm/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
        console.log("쿼리값은?",searchQuery)
    }
    const moveProduct = (i)=>{
        navigator(`/products/${i}`)
    }

    useEffect(()=>{
        getProducts();
    }
    ,[query]);

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
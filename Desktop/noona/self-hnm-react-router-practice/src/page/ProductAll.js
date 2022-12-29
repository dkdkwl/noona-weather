import React, { useState,useEffect } from 'react'
import { Row,Col,Container } from 'react-bootstrap'

const ProductAll = () => {
    const [products,setProducts] = useState([]);
    const getProducts = async ()=>{
        const url = `http://localhost:3004/products`;
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
    }
    useEffect(()=>{
        getProducts();
    },[])
  return (
    <div>
        <Container>
            <Row>
                {
                    products.map((items,i)=>{
                        return(
                            <Col lg={3} key={i}>
                                <img src="https://lp2.hm.com/hmgoepprod?set=source[/97/28/97289ef2ed9039449198dccd550aedbc9875ce5f.jpg],origin[dam],category[ladies_jacketscoats_jackets],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]" alt="" />
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
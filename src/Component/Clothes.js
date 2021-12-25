import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

const Clothes = () => {
    return (
        <>
            <Container className='colthhead'>
                <div >
                <h1>
                    Shop our Popular <br />
                    Baby products
                </h1>
                <Row>
                    <Col sm={3}><img width='150px' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-closet-organization-1583437747.png?crop=0.837xw:0.558xh;0.0847xw,0.245xh&resize=640:*" /></Col>
                    <Col sm={3}><img width='150px' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-closet-organization-1583437747.png?crop=0.837xw:0.558xh;0.0847xw,0.245xh&resize=640:*" /></Col>
                    <Col sm={3}><img width='150px' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-closet-organization-1583437747.png?crop=0.837xw:0.558xh;0.0847xw,0.245xh&resize=640:*" /></Col>
                    <Col sm={3}><img width='150px' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-closet-organization-1583437747.png?crop=0.837xw:0.558xh;0.0847xw,0.245xh&resize=640:*" /></Col>
                  
                </Row>
                </div>
            </Container>
          
        </>
    )
}

export default Clothes

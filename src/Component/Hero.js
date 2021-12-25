import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import baby from '../Images/baby.png'

const Hero = () => {
    return (
        <>
            <div style={{ backgroundColor: '#F5F5DC' }}>
                <Container>
                    <Row>
                        <Col className='mainhero' sm={12} lg={6}>
                        <h1>
                            The Better For <br/> Your New Born
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste doloremque, nam, quod officiis odio ut reiciendis dolore qui itaque rem neque ullam in deserunt sit repellendus fuga, recusandae aliquid ducimus?

                        </p>

                         <Button  className='btnstyle1' variant="dark">SHOP NOW!</Button>
                        </Col>
                        <Col sm={12} lg={6}><img style={{margin:'0px auto'}} src={baby} /></Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Hero

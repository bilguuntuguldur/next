import {Container, Row, Col,} from "react-bootstrap"
import ListGroup from 'react-bootstrap/ListGroup';
import Toast from 'react-bootstrap/Toast';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Footer = () => {

    return (
        <div style={{
            background: "#f7f7f7",
            width: "100%",
            paddingTop: "50px",
            paddingBottom: "30px",
            borderTop: "1px solid #f4f7f9"
        }}>
            <Container bg="dark">
                <Row>
                    
                    <Col md="4" >
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    Та subscribe хийснээр бидний хүргэх мэдээ, мэдээлэлийг цаг алдалгүй хүлээж авна.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Мэдэгдэл хүлээн авах" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Subscribe!
                            </Button>
                        </Form>
                    </Col>

                    <Col md="4"> 
                        <ListGroup as="ol" numbered>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Орчин үеийн Вэб технологи</div>
                                    Microservice ашиглан бүмээмжтэй нэм
                                </div>
                                <Badge bg="primary" pill>
                                3
                                </Badge>
                            </ListGroup.Item>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                            >
                                <div className="ms-2 me-auto">
                                <div className="fw-bold">Фото зураг</div>
                                Cras justo odio
                                </div>
                                <Badge bg="primary" pill>
                                1
                                </Badge>
                            </ListGroup.Item>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Хиймэл оюун ухаан</div>
                                    AI - Artificial intelligence Хиймэл оюун ухаан.
                                </div>
                                <Badge bg="primary" pill>
                                6
                                </Badge>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col md="4">
                        <Toast style={{marginBottom: "20px", width: "100%"}}>
                            <Toast.Header>
                                <img src="https://www.edigitalagency.com.au/wp-content/uploads/twitter-logo-black-png.png" 
                                className="rounded me-2"
                                width="20px"
                                height="20px"
                                alt="" />
                                <strong className="me-auto">Twitter</strong> 
                                <small>11 mins ago</small>
                                <Badge bg="dark" style={{marginLeft: "5px"}}>New</Badge>
                            </Toast.Header>
                            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                        </Toast>
                        <Toast style={{width: "100%"}}>
                            <Toast.Header>
                                <img src="https://www.edigitalagency.com.au/wp-content/uploads/twitter-logo-black-png.png" 
                                className="rounded me-2"
                                width="20px"
                                height="20px"
                                alt="" />
                                <strong className="me-auto">Twitter</strong>
                                <small>11 mins ago</small>
                                <Badge bg="dark" style={{marginLeft: "5px"}}>New</Badge>
                            </Toast.Header>
                            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                        </Toast>
                    </Col>

                </Row> 
            </Container>
        </div>
    )
}

export default Footer;
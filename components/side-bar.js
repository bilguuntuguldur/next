import Col from 'react-bootstrap/Col'; 
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

const SideBar = () => {

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
}

export default SideBar;
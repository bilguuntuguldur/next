import {Container, Row, Col, Media, Image, Card} from "react-bootstrap"
import Header from "../components/my-navbar"
import ListItem from "@/components/list-item"
import GridItem from "@/components/grid-item"

export default function Home() {
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col md="12">
            
          </Col>
        </Row>

        <div className={`page-wrapper`}>
          <Row className="mb-5">
            <Col md="12" className="mb-5">
              <ListItem />
            </Col>
            <Col md="4">
              <GridItem />
            </Col> 
            <Col md="4">
              <GridItem />
            </Col>
            <Col md="4">
              <GridItem />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}

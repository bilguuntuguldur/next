import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useTheme} from '@/hooks/use-theme';
import Link from "next/link";
import Toggle from "react-toggle"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const {theme, toggleTheme} = useTheme();
  return (
    <Navbar bg="light" expand="lg" style={{paddingTop: "10px", paddingBottom: "10px"}}>
      <Container>
        <Navbar.Brand>
          <Link href="/" style={{fontSize: "20px", color: "#000"}}>
            МИНИЙ БЛОГ
          </Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', marginLeft: "50px" }}
            navbarScroll
          >
            <Nav.Link style={{fontSize: "14px", textTransform: "uppercase"}}>Нүүр хуудас</Nav.Link>
            <Nav.Link style={{fontSize: "14px", textTransform: "uppercase"}}>Миний тухай</Nav.Link>
            <Nav.Link style={{fontSize: "14px", textTransform: "uppercase"}}>
              Холбоо барих
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="энд бичнэ үү...."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">Хайх</Button>
            <label style={{paddingTop: "3px", paddingLeft: "20px"}}>
              <Toggle 
              className='day-naight-toggle'
              icons={{
                checked: <FontAwesomeIcon icon={theme.type === "dark" ? faMoon : faSun}></FontAwesomeIcon>,
                unchecked: <FontAwesomeIcon inverse icon={theme.type === "light" ? faSun : faMoon}></FontAwesomeIcon>
              }}
              onChange={toggleTheme}>
              </Toggle>
            </label>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
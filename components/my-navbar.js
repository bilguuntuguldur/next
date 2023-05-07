import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useTheme} from '@/hooks/use-theme';
import Link from "next/link";
import Toggle from "react-toggle"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const {theme, toggleTheme} = useTheme();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <Link href="/">
            МИНИЙ БЛОГ
          </Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Нүүр</Nav.Link>
            <Nav.Link href="#action2">Миний тухай</Nav.Link>
            <NavDropdown title="Блог" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Орчин үеийн вэб технологи</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Хиймэл оюун ухаан  </NavDropdown.Item>
              <NavDropdown.Item href="https://flatironschool.com/blog/what-is-ux-ui-design/" target="blank">UX&UI вэб дизайн</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Кино шүүмж
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Холбоо барих
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Хайх</Button>
            <label style={{paddingTop: "3px", paddingLeft: "20px"}}>
              <Toggle 
              className='custom-classname'
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
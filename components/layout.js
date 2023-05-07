import {Container, Row, Col,} from "react-bootstrap"
import Header from "./my-navbar";
import Footer from "./my-footer";
import {useTheme} from "hooks/use-theme"

const Layout =({children}) => {
    const {theme} = useTheme();
    return (

        <div className={theme.type}>
            <Header />z
            <Container className="mb-5">
                <Row className="mb-5">
                    <Col md="12">
                        <div className={`page-wrapper`}>
                            {children}
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />

            <style jsx global>
                {
                    `
                        html, 
                        body{
                            background: ${theme.background};
                            color: ${theme.fontColor};
                            transition: color 0.2s ease-out 0s, background 0.2s ease-out 0s;
                        }
                    `
                }
            </style>
        </div>
    )
}

export default Layout;
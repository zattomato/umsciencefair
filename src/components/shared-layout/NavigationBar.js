import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import vsfLogo from '../../assets/logo/VSF Logo Transparent.png'

const NavigationBar = () => {
    return(
            <Navbar bg="light" expand="lg" fixed='top'>
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={vsfLogo}
                            width='40'
                            height='40'
                            alt='VSF Logo'
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href="/" id='NavTitle'>
                        <b>UM Science Fair</b>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='me-auto'>
                        </Nav>
                        <Nav className='justify-content-end'>
                            <Nav.Link href="/About" >About</Nav.Link>
                            <Nav.Link href="/Donate" >Donate</Nav.Link>
                            <NavDropdown title="Events" id="nav-dropdown">
                                <NavDropdown.Header>Current Events</NavDropdown.Header>
                                <NavDropdown.Item href="/STEMCompetitions">STEM Competition</NavDropdown.Item>
                                <NavDropdown.Item href="/STEMCareerFair2023">STEM Career Fair & Exhibition 2023</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Header>Previous Events</NavDropdown.Header>
                                <NavDropdown.Item href='/EventArchive'>Archive</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Connect" id="nav-dropdown">
                                <NavDropdown.Header>Get Involved</NavDropdown.Header>
                                <NavDropdown.Item href="/JoinUs">Become a Collaborator</NavDropdown.Item>
                                <NavDropdown.Item href='/JoinUs'>Become a Partner</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Header>Donation</NavDropdown.Header>
                                <NavDropdown.Item href="/Donate">Donate</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Header>Social Media</NavDropdown.Header>
                                <NavDropdown.Item href="">Facebook</NavDropdown.Item>
                                <NavDropdown.Item href="">Instagram</NavDropdown.Item>
                                <NavDropdown.Item href="">Twitter</NavDropdown.Item>
                                <NavDropdown.Item href="">Telegram</NavDropdown.Item>
                                <NavDropdown.Item href="">LinkedIn</NavDropdown.Item>
                                <NavDropdown.Item href="">E-mail</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

    )
}
export default NavigationBar;
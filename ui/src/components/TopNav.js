import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { SignInButton } from './SignInButton';
import { SignOutButton } from './SignOutButton';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';

export const TopNav = () => {
    return(
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <AuthenticatedTemplate>
                                <Nav.Link as={Link} to="/protected">Protected</Nav.Link>
                            </AuthenticatedTemplate>
                        </Nav>
                        <AuthenticatedTemplate>
                            <SignOutButton />
                        </AuthenticatedTemplate>
                        <UnauthenticatedTemplate>
                            <SignInButton />
                        </UnauthenticatedTemplate>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
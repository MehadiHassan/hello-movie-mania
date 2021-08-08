import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaStopwatch } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Localization } from './Localization';
import './_navMenuBar.scss';

const NavMenubar: React.FC = () => {
    return (
        <div className="custom-navbar">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <h3>{Localization.company}</h3>
                        <p>{Localization.slogan}</p>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">{Localization.home}</Nav.Link>
                            <Nav.Link href="/watchlist" className="watch-list">
                                <IconContext.Provider value={{ className: 'fa-reg-bookmark' }}>
                                    <div>
                                        <FaStopwatch />
                                    </div>
                                </IconContext.Provider>
                                <span className="watch-list-title">{Localization.watchList}</span>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavMenubar;

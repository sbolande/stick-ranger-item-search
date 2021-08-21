// Courtesy of https://codeburst.io/how-to-create-a-navigation-bar-and-sidebar-using-react-348243ccd93
import React from 'react';
import { Nav, Navbar, Dropdown, DropdownButton } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar { background-color: #222; }
    a, .navbar-nav, .navbar-light .nav-link {
        color: #9FFFCB;
        &:hover { color: white; }
    }
    .navbar-brand {
        font-size: 1.4em;
        color: #9FFFCB;
        &:hover { color: white; }
    }
    .form-center {
        position: absolute !important;
        left: 25%;
        right: 25%;
    }
`;

export const NavigationBar = () => (
    <Styles>
    <Navbar expand="lg">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Item>
                    <DropdownButton title="Weapons">
                        <Dropdown.Item href="/gloves">Gloves</Dropdown.Item>
                    </DropdownButton>
                </Nav.Item>
                <Nav.Item><Nav.Link href="/cards">Cards</Nav.Link></Nav.Item> 
                <Nav.Item><Nav.Link href="/jewels">Jewels</Nav.Link></Nav.Item> 
                <Nav.Item><Nav.Link href="/stones">Stones</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/crystals">Crystals</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/medals">Medals</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/charms">Charms</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/spirits">Spirits</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/crowns">Crowns</Nav.Link></Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    </Styles>   
);
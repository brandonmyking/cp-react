import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, } from 'reactstrap';


export class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return(
            <Navbar className="nav-container fixed-top" dark expand="md">
                <div className="container nav-container w-700">
                    <NavbarBrand href="/">
                            <img className="img-fluid" src="https://www.cutterspoint.com/media/static/images/logo-footer.png" alt="Cutters Point Coffee Co."/>
                    </NavbarBrand>
                            
                        <NavbarToggler className="col-12" onClick={this.toggle}>
                            <span className="navbar-toggler-icon float-right mr-3"></span>
                        </NavbarToggler>
                        <Collapse className="justify-content-end" isOpen={this.state.isOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink href="#">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Locations</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Wholesale</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Shopping</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="d-none" href="#">Contact</NavLink>
                                </NavItem>  
                            </Nav>
                    </Collapse>
                </div>
            </Navbar>
        );
    }
}
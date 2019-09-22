import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';


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
                    <NavbarBrand tag="span">
                        <Link to="/">
                            <img className="img-fluid" src="https://www.cutterspoint.com/media/static/images/logo-footer.png" alt="Cutters Point Coffee Co."/>
                        </Link>    
                    </NavbarBrand>
                            
                        <NavbarToggler className="col-12" onClick={this.toggle}>
                            <span className="navbar-toggler-icon float-right mr-3"></span>
                        </NavbarToggler>
                        <Collapse className="justify-content-end" isOpen={this.state.isOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link d-none" to="/home" onClick={this.toggle}>Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/locations" onClick={this.toggle}>Locations</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/wholesale" onClick={this.toggle}>Wholesale</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/shopping" onClick={this.toggle}>Shopping</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about" onClick={this.toggle}>About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link d-none" to="/contact" onClick={this.toggle}>Contact</NavLink>
                                </NavItem>  
                            </Nav>
                    </Collapse>
                </div>
            </Navbar>
        );
    }
}
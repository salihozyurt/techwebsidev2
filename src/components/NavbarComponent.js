import React, { Component } from 'react'
import Contact from './ContactComponent'
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, Modal, ModalHeader, ModalBody, Button } from 'reactstrap'
import Anime from 'animejs'

export class NavbarComponent extends Component {
    constructor(props) {
        super(props)
  
        this.state = {
          isNavOpen: false,
          isModalOpen: false
        }
  
        this.toggleNav = this.toggleNav.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
    }
      
    toggleNav() {
      this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    }

    toggleModal() {
        this.setState({
        isModalOpen: !this.state.isModalOpen
      })
    }

    componentDidMount() {
        Anime({targets: "#NavbarCon", opacity: 1, duration: 1000})
    }

    render() {
        return (
            <div id="NavbarCon" style={{ opacity: 0 }}>
                <Navbar dark expand="md" fixed="top">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src="assets/images/HeaderLogo.png" width="100" height="60" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="https://www.linkedin.com/in/salih-%C3%B6zyurt-ba6a2395/" target = "_blank"><span className="fa fa-linkedin fa-lg"></span> Linkedln</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/salihozyurt" target = "_blank"><span className="fa fa-github fa-lg"></span> Github</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="mailto:salih.zyurt@gmail.com" target = "_blank"><span className="fa fa-google fa-lg"></span> GMail</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="mailto:salihozyurt@yahoo.com" target = "_blank"><span className="fa fa-yahoo fa-lg"></span> Yahoo</NavLink>
                                </NavItem>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal} style={{ backgroundColor: "#f0e8e3", color: "#de7119" }}><span className="fa fa-link fa-lg"></span> Contact Me</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Contact Me</ModalHeader>
                    <ModalBody>
                        <Contact />
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default NavbarComponent

import React, { Component } from 'react'
import ParticlesBg from "particles-bg"
import NavbarComponent from './NavbarComponent'
import CVComponent from './CVComponent'
import WelcomeComponent from './WelcomeComponent'
import Footer from './Footer'

export class MainComponent extends Component {
    constructor(props) {
        super(props)
  
        this.state = {
          isCV: false
        }
  
        this.handleCV = this.handleCV.bind(this)
    }
      
    handleCV() {
      this.setState({
        isCV: !this.state.isCV
      });
    }

    render() {
        const RenderCV = () => {
            if (this.state.isCV === false) {
                return (
                    <div className="d-flex h-100 align-items-center justify-content-center">
                        <WelcomeComponent handleCV={ this.handleCV } />
                        <ParticlesBg color="#116979" num={200} type="cobweb" bg={true} />
                    </div>
                )
            } else {
                return (
                    <div className="d-inline">
                        <NavbarComponent />
                        <CVComponent /> 
                        <Footer />
                    </div>
                )
            }
        }

        return (
            <div className="h-100">
                <RenderCV /> 
            </div>
        )
    }
}

export default MainComponent

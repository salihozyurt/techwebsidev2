import React, { Component } from 'react'
import ParticlesBg from "particles-bg"
import WelcomeComponent from './WelcomeComponent'
export class MainComponent extends Component {
    render() {
        return (
            <div className="d-flex h-100 align-items-center justify-content-center">
                <WelcomeComponent />
                <ParticlesBg color="#116979" num={200} type="cobweb" bg={true} />
            </div>
        )
    }
}

export default MainComponent

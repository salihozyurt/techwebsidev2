import React, { Component } from 'react'
import Anime from 'animejs'

export class WelcomeComponent extends Component {
    componentDidMount() {
        Anime({targets: "#welcomeComp", scale: 1, translateXY: 500, opacity: 1, duration: 5000})
    }

    render() {
        return (
            <div className="container hexagon" id="welcomeComp" style={{ opacity: 0 }}>
                <div className="row justify-content-center">
                    <div className="col-8 col-sm-6 welcome">
                        <div className="row justify-content-center">
                            <div className="col-12 col-sm-8" style={{ textAlign: "center"}}>
                                <img src="assets/images/HeaderLogo.png" width="300" height="190" alt="logo" />
                            </div>
                            <div className="col-12 col-sm-8">
                                <a href="https://www.linkedin.com/in/salih-%C3%B6zyurt-ba6a2395/" target = "_blank" rel="noopener noreferrer"><span className="fa fa-linkedin fa-lg"></span></a>
                                <a href="https://github.com/salihozyurt" target = "_blank" rel="noopener noreferrer"><span className="fa fa-github fa-lg"></span></a>
                                <a href="mailto:salihozyurt@salihozyurt.tech" target = "_blank" rel="noopener noreferrer"><span className="fa fa-google fa-lg"></span></a>
                                <a href="mailto:salihozyurt@yahoo.com" target = "_blank" rel="noopener noreferrer"><span className="fa fa-yahoo fa-lg"></span></a>
                            </div>
                            <div className="col-12 col-sm-8">
                                <p style={{"fontSize": "large"}}>Backend Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WelcomeComponent

import React, { Component } from 'react'
import Anime from 'animejs'

export class Footer extends Component {
    componentDidMount() {
        Anime({targets: "#FootComp", opacity: 1, duration: 5000})
    }

    render() {
        return (
            <div id="FootComp" style={{ opacity: 0 }} >
                <a href="https://www.linkedin.com/in/salih-%C3%B6zyurt-ba6a2395/" target = "_blank" rel="noopener noreferrer"><span className="fa fa-linkedin fa-lg"></span></a>
                <a href="https://github.com/salihozyurt" target = "_blank" rel="noopener noreferrer"><span className="fa fa-github fa-lg"></span></a>
                <a href="mailto:salih.zyurt@gmail.com" target = "_blank" rel="noopener noreferrer"><span className="fa fa-google fa-lg"></span></a>
                <a href="mailto:salihozyurt@yahoo.com" target = "_blank" rel="noopener noreferrer"><span className="fa fa-yahoo fa-lg"></span></a>
                <p>© Copyright 2020 Salih ÖZYURT</p>
            </div>
        )
    }
}

export default Footer

import React, { Component } from 'react'
import { onShow } from '@solariss/react-on-show'
import Anime from 'animejs'

export class CVComponent extends Component {

    componentDidMount() {
        onShow(document.getElementById("Turkish"), {enter: () => { document.getElementById("Turkish").style.width = "100%" }})
        onShow(document.getElementById("English"), {enter: () => { document.getElementById("English").style.width = "80%" }})
        onShow(document.getElementById("TypeScript"), {enter: () => { document.getElementById("TypeScript").style.width = "70%" }})
        onShow(document.getElementById("Mongo"), {enter: () => { document.getElementById("Mongo").style.width = "60%" }})
        onShow(document.getElementById("NodeJS"), {enter: () => { document.getElementById("NodeJS").style.width = "80%" }})
        onShow(document.getElementById("AWS"), {enter: () => { document.getElementById("AWS").style.width = "40%" }})
        onShow(document.getElementById("Net"), {enter: () => { document.getElementById("Net").style.width = "40%" }})
        onShow(document.getElementById("SQL"), {enter: () => { document.getElementById("SQL").style.width = "80%" }})
        onShow(document.getElementById("JavaScript"), {enter: () => { document.getElementById("JavaScript").style.width = "75%" }})
        onShow(document.getElementById("HTML"), {enter: () => { document.getElementById("HTML").style.width = "60%" }})
        onShow(document.getElementById("CSS"), {enter: () => { document.getElementById("CSS").style.width = "60%" }})
        onShow(document.getElementById("React"), {enter: () => { document.getElementById("React").style.width = "40%" }})
        onShow(document.getElementById("Flusk"), {enter: () => { document.getElementById("Flusk").style.width = "70%" }})
        onShow(document.getElementById("CProgram"), {enter: () => { document.getElementById("CProgram").style.width = "60%" }})
        onShow(document.getElementById("CSharp"), {enter: () => { document.getElementById("CSharp").style.width = "35%" }})
        
        Anime({targets: "#CVComp", opacity: 1, duration: 5000})
    }

    render() {
        return (
            <div className="container" id="CVComp" style={{ paddingTop: 100, paddingBottom: 75, opacity: 0 }} >
                <div className="row justify-content-center" style={{ border: "2px solid #116979", borderRadius: "5px 50px", backgroundColor: "#18b0b0"}}>
                    <div className="col-12 col-lg-2" style={{ alignItems: "center", display: "flex", justifyContent: "center"}}>
                        <img id="imgTest" src="assets/images/Vesikalik.jpg" width="152" height="152" alt="vesikalik" style={{ border: "solid 2px #116979", borderRadius: "5px 50px" }}/>
                    </div>
                    <div className="col-12 col-lg-10">
                        <h2 style={{ color: "white" }}>Salih ÖZYURT</h2>
                        <hr className="solid" style={{ borderTop: "2px solid #fff", borderRadius: "5px" }} />
                        <div className="row">
                            <div className="col">
                                <p style={{ color: "white" }}>I'm currently working at Armut as Backend Developer. Lately, I interest in Cloud Systems and try to learn anything about that. One of reasons why I chose the working area is that. I improve myself day by day to be beneficial of my team that I work together. I like teach what I learn. Not just about technologies. It can be about anything such as movies, documentaries, finance. I can say that I like research in summary.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center" style={{ paddingTop: "20"}}>
                    <div className="col-12 col-sm-4">
                        <h3>Personal</h3>
                        <hr className="solid" style={{ borderTop: "2px solid #000", borderRadius: "5px" }} />
                        <h5>Address</h5>
                        <p>Denizköşkler Mah. Avcılar/İSTANBUL</p>
                        <h5>Birthdate</h5>
                        <p>10-07-1995</p>
                        <h5>Birthplace</h5>
                        <p>Niksar/TOKAT</p>
                        <h5>Nationality</h5>
                        <p>Turkey</p>
                        <h5>Marital Status</h5>
                        <p>Single</p>
                        <h3>Languages</h3>
                        <hr className="solid" style={{ borderTop: "2px solid #000", borderRadius: "5px" }} />
                        <div className="row justify-content-center">
                            <div className="col-12 col-sm-4">
                                <h6>Turkish</h6>
                            </div>
                            <div className="col-12 col-sm-8">
                                <div style={{ border: "2px solid #de7119", borderRadius: "5px"}}>
                                    <div id="Turkish" style={{ border: "2px solid #116979", borderRadius: "2px", height: "2vh", width: "0%", backgroundColor: "#116979", transition: "all 1.5s ease-in-out"}}></div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-4">
                                <h6>English</h6>
                            </div>
                            <div className="col-12 col-sm-8">
                                <div style={{ border: "2px solid #de7119", borderRadius: "5px"}}>
                                    <div id="English" style={{ border: "2px solid #116979", borderRadius: "2px", height: "2vh", width: "0%", backgroundColor: "#116979", transition: "all 1.5s ease-in-out"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-8">
                        <h3>Work Experience</h3>
                        <hr className="solid" style={{ borderTop: "2px solid #000", borderRadius: "5px" }} />
                        <div className="row justify-content-between">
                            <div className="col-12 col-sm-4">
                                <h4>IT Intern</h4>
                            </div>
                            <div className="col-12 col-sm-4">
                                <p>Sep 2012 - Jun2013</p>
                            </div>
                        </div>
                        <p><i><b>CaniasERP ISTANBUL/Yenibosna</b></i></p>
                        <p>At CaniasERP, I worked as a IT Trainee for trainee program of my high school.</p>
                        <div className="row justify-content-between">
                            <div className="col-12 col-sm-4">
                                <h4>Intern</h4>
                            </div>
                            <div className="col-12 col-sm-4">
                                <p>May 2021 - Jun 2021</p>
                            </div>
                        </div>
                        <p><i><b>IBTECH KOCAELİ/Gebze</b></i></p>
                        <p>I worked at IBTECH as Software Engineer Intern for a while to complete my college internship. I was member of team that develop Desktop Program using SQL, .Net.</p>
                        <div className="row justify-content-between">
                            <div className="col-12 col-sm-4">
                                <h4>JS Developer</h4>
                            </div>
                            <div className="col-12 col-sm-4">
                                <p>Jun 2021 - Nov 2021</p>
                            </div>
                        </div>
                        <p><i><b>Insider İSTANBUL/Levent</b></i></p>
                        <p>At Insider, I was on the Partner Support Department. In my department, we were making the Insider products appropriate to partners' website using HTML, Javascript and CSS. Sometimes, we take Web Service tasks to take correct request payload from partners' websites. It looks like Backend for Frontend Pattern.</p>
                        <div className="row justify-content-between">
                            <div className="col-12 col-sm-4">
                                <h4>Backend Developer</h4>
                            </div>
                            <div className="col-12 col-sm-4">
                                <p>Nov 2021 - Working</p>
                            </div>
                        </div>
                        <p><i><b>Armut İSTANBUL/Acıbadem</b></i></p>
                        <p>I working Payment & Finance Team as Backend Developer. I make existing APIs better and develop  new APIs using different programing languages like TypeScript, .Net, etc. We use AWS Services by requirements of our architecture.</p>
                        <h3>Skills</h3>
                        <hr className="solid" style={{ borderTop: "2px solid #000", borderRadius: "5px" }} />
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <h6>TypeScript</h6>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div style={{ border: "2px solid #de7119", borderRadius: "5px"}}>
                                    <div id="TypeScript" style={{ border: "2px solid #116979", borderRadius: "2px", height: "2vh", width: "0%", backgroundColor: "#116979", transition: "all 1.5s ease-in-out"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <h6>MongoDB</h6>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div style={{ border: "2px solid #de7119", borderRadius: "5px"}}>
                                    <div id="Mongo" style={{ border: "2px solid #116979", borderRadius: "2px", height: "2vh", width: "0%", backgroundColor: "#116979", transition: "all 1.5s ease-in-out"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <h6>NodeJS Frameworks (Express, Winston, etc.)</h6>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div style={{ border: "2px solid #de7119", borderRadius: "5px"}}>
                                    <div id="NodeJS" style={{ border: "2px solid #116979", borderRadius: "2px", height: "2vh", width: "0%", backgroundColor: "#116979", transition: "all 1.5s ease-in-out"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <h6>AWS Services (S3, Lambda, etc.)</h6>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div style={{ border: "2px solid #de7119", borderRadius: "5px"}}>
                                    <div id="AWS" style={{ border: "2px solid #116979", borderRadius: "2px", height: "2vh", width: "0%", backgroundColor: "#116979", transition: "all 1.5s ease-in-out"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <h6>.Net</h6>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div style={{ border: "2px solid #de7119", borderRadius: "5px"}}>
                                    <div id="Net" style={{ border: "2px solid #116979", borderRadius: "2px", height: "2vh", width: "0%", backgroundColor: "#116979", transition: "all 1.5s ease-in-out"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <h6>SQL</h6>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div style={{ border: "2px solid #de7119", borderRadius: "5px"}}>
                                    <div id="SQL" style={{ border: "2px solid #116979", borderRadius: "2px", height: "2vh", width: "0%", backgroundColor: "#116979", transition: "all 1.5s ease-in-out"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <h6>JavaScript</h6>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div style={{ border: "2px solid #de7119", borderRadius: "5px"}}>
                                    <div id="JavaScript" style={{ border: "2px solid #116979", borderRadius: "2px", height: "2vh", width: "0%", backgroundColor: "#116979", transition: "all 1.5s ease-in-out"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <h6>HTML</h6>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div style={{ border: "2px solid #de7119", borderRadius: "5px"}}>
                                    <div id="HTML" style={{ border: "2px solid #116979", borderRadius: "2px", height: "2vh", width: "0%", backgroundColor: "#116979", transition: "all 1.5s ease-in-out"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <h6>CSS</h6>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div style={{ border: "2px solid #de7119", borderRadius: "5px"}}>
                                    <div id="CSS" style={{ border: "2px solid #116979", borderRadius: "2px", height: "2vh", width: "0%", backgroundColor: "#116979", transition: "all 1.5s ease-in-out"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <h6>React</h6>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div style={{ border: "2px solid #de7119", borderRadius: "5px"}}>
                                    <div id="React" style={{ border: "2px solid #116979", borderRadius: "2px", height: "2vh", width: "0%", backgroundColor: "#116979", transition: "all 1.5s ease-in-out"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <h6>Flusk</h6>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div style={{ border: "2px solid #de7119", borderRadius: "5px"}}>
                                    <div id="Flusk" style={{ border: "2px solid #116979", borderRadius: "2px", height: "2vh", width: "0%", backgroundColor: "#116979", transition: "all 1.5s ease-in-out"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <h6>C Programing Language</h6>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div style={{ border: "2px solid #de7119", borderRadius: "5px"}}>
                                    <div id="CProgram" style={{ border: "2px solid #116979", borderRadius: "2px", height: "2vh", width: "0%", backgroundColor: "#116979", transition: "all 1.5s ease-in-out"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <h6>C# Programing Language</h6>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div style={{ border: "2px solid #de7119", borderRadius: "5px"}}>
                                    <div id="CSharp" style={{ border: "2px solid #116979", borderRadius: "2px", height: "2vh", width: "0%", backgroundColor: "#116979", transition: "all 1.5s ease-in-out"}}></div>
                                </div>
                            </div>
                        </div>
                        <h3>Education & Qualifications</h3>
                        <hr className="solid" style={{ borderTop: "2px solid #000", borderRadius: "5px" }} />
                        <div className="row justify-content-between">
                            <div className="col-12 col-sm-4">
                                <h4>High School</h4>
                            </div>
                            <div className="col-12 col-sm-4">
                                <p>Sep 2009-Jun 2013</p>
                            </div>
                        </div>
                        <p><i><b>Şişli Industrial Vocational High School (Informatics Department Database) ISTANBUL/Şişli</b></i></p>
                        <p>The high school created my basic level about Computer Science. It teached me Java Programing Language, C# and PL-SQL.</p>
                        <div className="row justify-content-between">
                            <div className="col-12 col-sm-4">
                                <h4>Associate Degree</h4>
                            </div>
                            <div className="col-12 col-sm-4">
                                <p>Sep 2013-Jun 2015</p>
                            </div>
                        </div>
                        <p><i><b>Trakya University (Computer Programing) EDIRNE/Saraçhane</b></i></p>
                        <p>Object orianted programing as well as web programing such as HTML, CSS, Javascript was teached. I mett web programing first time in associate degree. It expanded my horizon.</p>
                        <div className="row justify-content-between">
                            <div className="col-12 col-sm-4">
                                <h4>Bachelor Degree</h4>
                            </div>
                            <div className="col-12 col-sm-4">
                                <p>Sep 2017-Jun 2021</p>
                            </div>
                        </div>
                        <p><i><b>Marmara University (Computer Science Engineering) ISTANBUL/Kadıköy</b></i></p>
                        <p>A lot of courses that are very usefull such as Data Structure, Algorithm Analysis, Operating System was given. These courses was appended me new vision and mission and help me upgrade myself.</p>
                        <h3>Certificates</h3>
                        <hr className="solid" style={{ borderTop: "2px solid #000", borderRadius: "5px" }} />
                        <div className="row justify-content-between">
                            <div className="col-12 col-sm-4">
                                <h4>Oracle</h4>
                            </div>
                            <div className="col-12 col-sm-4">
                                <p>Mar 2012</p>
                            </div>
                        </div>
                        <p>Oracle Database 11g_Introduction to SQL</p>
                        <div className="row justify-content-between">
                            <div className="col-12 col-sm-4">
                                <h4>Oracle</h4>
                            </div>
                            <div className="col-12 col-sm-4">
                                <p>Mar 2012</p>
                            </div>
                        </div>
                        <p>Fundamentals of the Java Programing Language</p>
                        <div className="row justify-content-between">
                            <div className="col-12 col-sm-4">
                                <h4>Coursera</h4>
                            </div>
                            <div className="col-12 col-sm-4">
                                <p>Oct 2020</p>
                            </div>
                        </div>
                        <a href="https://www.coursera.org/account/accomplishments/certificate/WUCFH42TQZQT" target = "_blank" rel="noopener noreferrer">Front-End Web Development with React (with Honors)</a>
                        <div className="row justify-content-between">
                            <div className="col-12 col-sm-4">
                                <h4>Coursera</h4>
                            </div>
                            <div className="col-12 col-sm-4">
                                <p>Oct 2020</p>
                            </div>
                        </div>
                        <a href="https://www.coursera.org/account/accomplishments/certificate/EWLK2MH39FZP" target = "_blank" rel="noopener noreferrer"> Front-End Web UI Frameworks and Tools: Bootstrap 4 (with Honors)</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default CVComponent

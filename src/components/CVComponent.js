import React, { Component } from 'react'
import Anime from 'animejs'

export class CVComponent extends Component {
    componentDidMount() {
        Anime({targets: "#CVComp", opacity: 1, duration: 5000})
    }

    render() {
        return (
            <div className="container" id="CVComp" style={{ paddingTop: 100, paddingBottom: 75, opacity: 0 }} >
                <div className="row justify-content-center" style={{ border: "2px solid #116979", borderRadius: "5px", backgroundColor: "#18b0b0"}}>
                    <div className="col-12 col-lg-2" style={{ textAlign: "center"}}>
                        <img src="assets/images/Vesikalik.jpg" width="152" height="152" style={{ border: "solid 2px #116979", borderRadius: "5px" }}/>
                    </div>
                    <div className="col-12 col-lg-10">
                        <h2 style={{ color: "white" }}>Salih ÖZYURT</h2>
                        <hr className="solid" style={{ borderTop: "2px solid #fff", borderRadius: "5px" }} />
                        <div className="row">
                            <div className="col">
                                <p style={{ color: "white" }}>I have taken Computer Technician degree at Trakya University for 2015. I am still student for Computer Science at Marmara University. I try to upgrade myself day to day learning new programing languages in order to be important piece of team that I will work together. I want to manage own company for the future. I go to my target step by step and I know what I want.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center" style={{ paddingTop: "20"}}>
                    <div className="col-12 col-sm-4">
                        <h3>Personal</h3>
                        <hr className="solid" style={{ borderTop: "2px solid #000", borderRadius: "5px" }} />
                        <h5>Address</h5>
                        <p>Merkez Mah. Abide-i Hürriyet Cad. Şişli/İSTANBUL</p>
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
                                    <div style={{ border: "2px solid #116979", borderRadius: "2px", height: "2vh", width: "100%", backgroundColor: "#116979"}}></div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-4">
                                <h6>English</h6>
                            </div>
                            <div className="col-12 col-sm-8">
                                <div style={{ border: "2px solid #de7119", borderRadius: "5px"}}>
                                    <div style={{ border: "2px solid #116979", borderRadius: "2px", height: "2vh", width: "80%", backgroundColor: "#116979"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-8">
                        <h3>Work Experience</h3>
                        <hr className="solid" style={{ borderTop: "2px solid #000", borderRadius: "5px" }} />
                        <div className="row justify-content-between">
                            <div className="col-12 col-sm-4">
                                <h4>Teller</h4>
                            </div>
                            <div className="col-12 col-sm-4">
                                <p>Jul 2009-Jul 2017</p>
                            </div>
                        </div>
                        <p><i><b>Villa Döviz A.Ş. ISTANBUL/Şişli</b></i></p>
                        <p>I have worked as a teller to earn pocket money on summer time at the Villa Currency Exchange Office until gain the university.</p>
                        <div className="row justify-content-between">
                            <div className="col-12 col-sm-4">
                                <h4>IT Intern</h4>
                            </div>
                            <div className="col-12 col-sm-4">
                                <p>Sep 2012-Jun2013</p>
                            </div>
                        </div>
                        <p><i><b>CaniasERP ISTANBUL/Yenibosna</b></i></p>
                        <p>At CaniasERP, I worked as a IT Trainee for trainee program of my high school.</p>
                        <h3>Skills</h3>
                        <hr className="solid" style={{ borderTop: "2px solid #000", borderRadius: "5px" }} />
                        <div className="row">
                            <div className="col-12 col-sm-4">
                                <h6>Java Programing Language</h6>
                            </div>
                            <div className="col-12 col-sm-8">
                                <div style={{ border: "2px solid #de7119", borderRadius: "5px"}}>
                                    <div style={{ border: "2px solid #116979", borderRadius: "2px", height: "2vh", width: "80%", backgroundColor: "#116979"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-4">
                                <h6>C Programing Language</h6>
                            </div>
                            <div className="col-12 col-sm-8">
                                <div style={{ border: "2px solid #de7119", borderRadius: "5px"}}>
                                    <div style={{ border: "2px solid #116979", borderRadius: "2px", height: "2vh", width: "80%", backgroundColor: "#116979"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-4">
                                <h6>Flusk</h6>
                            </div>
                            <div className="col-12 col-sm-8">
                                <div style={{ border: "2px solid #de7119", borderRadius: "5px"}}>
                                    <div style={{ border: "2px solid #116979", borderRadius: "2px", height: "2vh", width: "70%", backgroundColor: "#116979"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-4">
                                <h6>C# Programing Language</h6>
                            </div>
                            <div className="col-12 col-sm-8">
                                <div style={{ border: "2px solid #de7119", borderRadius: "5px"}}>
                                    <div style={{ border: "2px solid #116979", borderRadius: "2px", height: "2vh", width: "50%", backgroundColor: "#116979"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-4">
                                <h6>SQL</h6>
                            </div>
                            <div className="col-12 col-sm-8">
                                <div style={{ border: "2px solid #de7119", borderRadius: "5px"}}>
                                    <div style={{ border: "2px solid #116979", borderRadius: "2px", height: "2vh", width: "90%", backgroundColor: "#116979"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-4">
                                <h6>HTML</h6>
                            </div>
                            <div className="col-12 col-sm-8">
                                <div style={{ border: "2px solid #de7119", borderRadius: "5px"}}>
                                    <div style={{ border: "2px solid #116979", borderRadius: "2px", height: "2vh", width: "60%", backgroundColor: "#116979"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-4">
                                <h6>CSS</h6>
                            </div>
                            <div className="col-12 col-sm-8">
                                <div style={{ border: "2px solid #de7119", borderRadius: "5px"}}>
                                    <div style={{ border: "2px solid #116979", borderRadius: "2px", height: "2vh", width: "60%", backgroundColor: "#116979"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-4">
                                <h6>JavaScript</h6>
                            </div>
                            <div className="col-12 col-sm-8">
                                <div style={{ border: "2px solid #de7119", borderRadius: "5px"}}>
                                    <div style={{ border: "2px solid #116979", borderRadius: "2px", height: "2vh", width: "60%", backgroundColor: "#116979"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-4">
                                <h6>React</h6>
                            </div>
                            <div className="col-12 col-sm-8">
                                <div style={{ border: "2px solid #de7119", borderRadius: "5px"}}>
                                    <div style={{ border: "2px solid #116979", borderRadius: "2px", height: "2vh", width: "60%", backgroundColor: "#116979"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-4">
                                <h6>React Native</h6>
                            </div>
                            <div className="col-12 col-sm-8">
                                <div style={{ border: "2px solid #de7119", borderRadius: "5px"}}>
                                    <div style={{ border: "2px solid #116979", borderRadius: "2px", height: "2vh", width: "30%", backgroundColor: "#116979"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-4">
                                <h6>Bootstrap</h6>
                            </div>
                            <div className="col-12 col-sm-8">
                                <div style={{ border: "2px solid #de7119", borderRadius: "5px"}}>
                                    <div style={{ border: "2px solid #116979", borderRadius: "2px", height: "2vh", width: "60%", backgroundColor: "#116979"}}></div>
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
                        <a href="https://www.coursera.org/account/accomplishments/certificate/WUCFH42TQZQT" target = "_blank">Front-End Web Development with React (with Honors)</a>
                        <div className="row justify-content-between">
                            <div className="col-12 col-sm-4">
                                <h4>Coursera</h4>
                            </div>
                            <div className="col-12 col-sm-4">
                                <p>Oct 2020</p>
                            </div>
                        </div>
                        <a href="https://www.coursera.org/account/accomplishments/certificate/EWLK2MH39FZP" target = "_blank"> Front-End Web UI Frameworks and Tools: Bootstrap 4 (with Honors)</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default CVComponent
import React, { Component } from 'react'
import emailjs from 'emailjs-com'
import Recaptcha from 'react-recaptcha'
import { Button, Form, Input } from 'reactstrap'
import '../styles/ContactStyle.css'

class Contact extends Component {

    constructor(props) {
        super(props)

        this.state = {
          isVerified: false
        }

        this.verifyCallback=this.verifyCallback.bind(this)
    }

    componentDidMount() {
        let self = this;

        const errorMessages = {
            name: 'Name must be at least 3 chars long!',
            email: 'Email is invalid!',
            subject: 'Subject must be at least 10 chars long!',
            message: 'Message must be at least 10 chars long!'
        };

        this.isNameValid = false
        this.isEmailValid = false
        this.isSubjectValid = false
        this.isMessageValid = false

        function validateName() {
            var name = document.getElementById('name').value;
            self.isNameValid = (name.length >= 3);
            if (self.isNameValid) {
                document.getElementsByClassName('name')[0].innerHTML = '';
            } else {
                document.getElementsByClassName('name')[0].innerHTML = errorMessages.name;
            }
        }

        function validateEmail() {
            var email = document.getElementById('email').value;
            var emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            self.isEmailValid = emailRegEx.test(email);
            if (self.isEmailValid) {
                document.getElementsByClassName('email')[0].innerHTML = '';
            } else {
                document.getElementsByClassName('email')[0].innerHTML = errorMessages.email;
            }
        }

        function validateSubject() {
            var subject = document.getElementById('subject').value;
            self.isSubjectValid = (subject.length >= 10);
            if (self.isSubjectValid) {
                document.getElementsByClassName('subject')[0].innerHTML = '';
            } else {
                document.getElementsByClassName('subject')[0].innerHTML = errorMessages.subject;
            }
        }

        function validateMessage() {
            var message = document.getElementById('message').value;
            self.isMessageValid = (message.length >= 10);
            if (self.isMessageValid) {
                document.getElementsByClassName('message')[0].innerHTML = '';
            } else {
                document.getElementsByClassName('message')[0].innerHTML = errorMessages.message;
            }
        }

        document.getElementById('name').addEventListener('blur', validateName);
        document.getElementById('email').addEventListener('blur', validateEmail);
        document.getElementById('subject').addEventListener('blur', validateSubject);
        document.getElementById('message').addEventListener('blur', validateMessage);
    }

    onFormSubmitHandler(event) {
        let self = this;
        let formMessage = document.getElementById('form-messages');

        if (self.isNameValid && self.isEmailValid && self.isSubjectValid && self.isMessageValid) {
          if (self.state.isVerified) {
            const postData = {
              name: document.getElementById('name').value,
              email: document.getElementById('email').value,
              subject: document.getElementById('subject').value,
              message: document.getElementById('message').value
            }
            event.preventDefault()
            const { name, email, subject, message } = postData
            let templateParams = {
              from_name: name,
              from_email: email,
              to_name: 'Salih Özyurt',
              subject: subject,
              message: message,
            }
            emailjs.send(
              'service_5pbxmzg',
              'template_m61cwdb',
              templateParams,
              'user_yG2R994s36vANeqoo11tm'
            )
            self.props.isModalOpen()
          } else {
            alert("Please verify you are a human!")
          }
        } else {
            formMessage.setAttribute('class', 'alert alert-error')
            formMessage.innerHTML = 'Please enter valid values.'
        }

        event.preventDefault()
    }

    verifyCallback(response) {
      const self = this
      return new Promise(function(resolve, reject) { 
        if (response) {
          self.setState({ isVerified: true })
        }
        resolve()
      })
    }

    loadRechaptcha() {
      console.log("Rechaptcha is loaded.")
    }

    render() {
        let self = this
        return (
            <div className="container" id="main-content">
                <Form id="contactForm" onSubmit={self.onFormSubmitHandler.bind(self)}>
                    <div id="form-messages" style={{ color: "#de7119" }}></div>

                    <Input type="text" id="name" placeholder="Enter Your Name" />
                    <div className="error name"></div>

                    <br className="hidden-xs" />
                    <Input type="email" id="email" className="text-primary" placeholder="Enter Your Email" />
                    <div className="error email"></div>

                    <br className="hidden-xs" />
                    <Input type="text" id="subject" placeholder="Enter Subject" />
                    <div className="error subject"></div>

                    <br className="hidden-xs" />
                    <Input type="textarea" id="message" placeholder="Enter Message" />
                    <div className="error message"></div>
                    
                    <br className="hidden-xs" />
                    <Button type="submit" id="submitButton">Send</Button>
                    <div />
                    <br className="hidden-xs" />
                    <Recaptcha
                      sitekey="6LcF0tsZAAAAAA5ge9CNNZVd3k8BZk5fIIu4DNV6"
                      render="explicit"
                      size="compact"
                      verifyCallback={this.verifyCallback}
                      onloadCallback={this.loadRechaptcha}
                    />
                </Form>
            </div>
        )
    }
}

export default Contact
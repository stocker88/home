import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import Dialog from 'react'

import { Nav, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'
import Button from '../elements/Button'

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    phoneNumber: '',
    message: 'I would like to subscribe to the beta.',
  }

handleSubmit(e) {
    e.preventDefault()
    const { name, email, phoneNumber, message } = this.state
    let templateParams = {
      from_name: email,
      to_name: 'aness.hussein.ali@gmail.com',
      phoneNumber: phoneNumber,
      message_html: message,
     }
     emailjs.send(
      'service_h0q75wd',
      'template_egp9ldh',
       templateParams,
      'user_QuG1TIbvzRN8kheqkRwUr'
     )
     this.resetForm()
 }
resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
render() {
    return (
      <>
          <Form onSubmit={this.handleSubmit.bind(this)} target="my_iframe" style={{alignitems:"right"}}>
          <ul>
              <Label className="text-muted" style={{ color: "#01CAFF"  }}><b>Email</b></Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
                style={{ alignItems: "right", flex:1, width: '100%', padding: "8px" }}
              />
            </ul>
          <ul>
              <Label className="text-muted" style={{ textAlign: 'center', color: "#01CAFF"  }}><b>Name</b></Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
                style={{ flex:1, width: '100%', padding: "8px" }}
              />
            </ul>
          <ul>
                <Label className="text-muted" style={{ textAlign: 'center', color: "#01CAFF" }}><b>Phone Number</b></Label>
                <Input
                  type="number"
                  name="phoneNumber"
                  className="text-primary"
                  value={this.state.phoneNumber}
                  onChange={this.handleChange.bind(this, 'phoneNumber')}
                  placeholder='Phone Number'
                  style={{ width: '100%', padding: "8px" }}
                />
            </ul>
          <ul>
              <Label className="text-muted" style={{ textAlign: 'center', color: "#01CAFF"  }}><b>Message</b></Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
                style={{ flex: 11, alignItems: 'center', width: '100%', margin: "8px 0", height: "100px"}}
              />
              </ul>
          <ul>
          <Button color="cyan" variant="primary" type="submit">
              Submit
            </Button>
            </ul>
          </Form>
      </>
    )
  }
}
export default ContactForm

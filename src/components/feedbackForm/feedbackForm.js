import React from 'react';
import axios from 'axios';
import { Root, Form, Label, Container, Button, Input, InputMessage } from './styled';
import Background from '../background/background';


class FeedbackForm extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST",
      url:"http://localhost:8080/api/feedback",
      data:  this.state
    })
    .then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent.");
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
      this.resetForm()
    })
  }

  resetForm = () => {
    this.setState({
        ...this.state,
        name: '',
        email: '',
        message: ''
    })
  }

  shoot = () => {
    alert("Comment sent!");
  }

  handleClick () {
    this.resetForm();
    this.shoot();
  }

  render() {
    return (
      <Root>
        <Background />
        <Container>
          <Form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <Label>Reach out to us!</Label>
            
            <Input
              type="text"
              id="name"
              name="name"
              label="name"
              placeholder="Your name*"
              class="text"
              value={this.state.name}
              onChange={this.onNameChange.bind(this)}
            />

            <Input
              type="text"
              id="email"
              name="email"
              placeholder="Your e-mail*"
              aria-describedby="emailHelp"
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
            />

            <InputMessage
              type="text"
              id="message"
              name="message"
              placeholder="Your message*"
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
            />

            <div>
              <Button
                type="submit"
                onClick={(e) => this.handleClick(e)}
                disabled={this.name === '' || this.number === ''}
              >
                Send message
              </Button>
            </div>
          </Form>
        </Container>
      </Root>
    );
  }

  onNameChange(event) {
	  this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	  this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	  this.setState({message: event.target.value})
  }

}
  
export default FeedbackForm;
import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseURL = 'https://localhost:8443/auth'

class Login extends Component {
  constructor(props)
  {
    super(props);
    this.state = {      
      username: "" ,      
      password: "",
    };
  }

sendLogin = event => {
  event.preventDefault();

  axios
    .post(`${baseURL}/login`, {
      username: this.state.username,
      password: this.state.password
    })
    .then((response) => {
      toast.success(response.data, {
            position: toast.POSITION.TOP_RIGHT
        });
    
    })
    .catch(error => {
      toast.error("Sending request error", {
        position: toast.POSITION.TOP_RIGHT
      });
      console.log(error)
    });;
};


  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.sendLogin}>
                      <h1>HTTPS DEMO EXAMPLE</h1>
                      <p className="text-muted">Log In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" autoComplete="username" value={this.state.username} onChange={event => this.setState({username: event.target.value})} />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" value={this.state.password} onChange={event => this.setState({password: event.target.value})} />
                      </InputGroup>
                      <Row> 
                        <Col xs="6">
                          <Button  color="primary" className="px-4" disabled={this.state.formValid}>Login</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </div>
    );
  }
}

export default Login;

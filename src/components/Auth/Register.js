import React from "react";
import {
  Grid,
  Form,
  Segment,
  Button,
  Message,
  Header,
  Icon,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const Register = (props) => {
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <Grid textAlign="center" verticalAlign="middle" className="app">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" icon color="orange" textAlign="center">
          <Icon name="puzzle piece" color="orange" />
          Register for DevChat
        </Header>

        <Form size="large">
          <Segment stacked padded clearing>
            <Form.Input
              fluid
              name="username"
              icon="user"
              iconPosition="left"
              placeholder="Username"
              type="text"
              onChange={(event) => handleChange(event)}
            />

            <Form.Input
              fluid
              name="email"
              icon="mail"
              iconPosition="left"
              placeholder="Email"
              type="email"
              onChange={(event) => handleChange(event)}
            />

            <Form.Input
              fluid
              name="password"
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={(event) => handleChange(event)}
            />

            <Form.Input
              fluid
              name="passwordConfirmation"
              icon="repeat"
              iconPosition="left"
              type="password"
              placeholder="Password Confirmation"
              onChange={(event) => handleChange(event)}
            />

            <Button type="submit" color="orange" fluid size="large">
              Submit
            </Button>
          </Segment>
        </Form>
        <Message>
          Already a user ? <Link to="/login">Login</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Register;

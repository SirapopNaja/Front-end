import React, { Component } from "react";
import { StyleSheet } from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text
} from "native-base";

class login extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Body>
            <Title>Login</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" secureTextEntry />
            </Item>
          </Form>
          <Button block style={{ margin: 15, marginTop: 50 }} onPress={()=> this.props.navigation.navigate('Details')}>
            <Text>Sign In</Text>
          </Button>
          <Button block style={{ margin: 15, marginTop: 10 }} onPress={()=> this.props.navigation.navigate('register')}>
            <Text>Register</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  }
});

export default login;
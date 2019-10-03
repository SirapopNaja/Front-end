import React, { Component } from "react";
import { StyleSheet } from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Segment
} from "native-base";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seg: 2
    };
  }
  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>OnlineCilnic</Title>
          </Body>
        </Header>
        <Segment>
          <Button
            first
            active={this.state.seg === 1 ? true : false}
            onPress={() => this.setState({ seg: 1 })}
          >
            <Text>จัดการคิว</Text>
          </Button>
          <Button
            active={this.state.seg === 2 ? true : false}
            onPress={() => this.setState({ seg: 2 })}
          >
            
            <Text>คำร้องจองคิว</Text>
          </Button>
          <Button
            last
            active={this.state.seg === 3 ? true : false}
            onPress={() => this.setState({ seg: 3 })}
          >
            <Text>แจกบัตรคิว</Text>
          </Button>
        </Segment>

        <Content padder>
          {this.state.seg === 1 && <Text>หน้าจัดการคิว</Text>}
          {this.state.seg === 2 && <Text>ยืนยันคำร้องข้อจองคิว</Text>}
          {this.state.seg === 3 && <Text>แจกบัตรคิวผู้ที่ Walk In หน้าร้าน</Text>}
        </Content>
      </Container>
    );
  }
}

export default App;
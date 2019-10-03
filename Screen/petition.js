import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
export default class petition extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://image.dek-d.com/27/0351/9622/117108517' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>ยืนยัน</Text>
              </Body>
              <Right>
                <Text note>17:00 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://s.isanook.com/ca/0/ui/279/1396205/s__152616986_1562561122.jpg' }} />
              </Left>
              <Body>
                <Text>Prepa Phong</Text>
                <Text note>เสร็จสิ้น</Text>
              </Body>
              <Right>
                <Text note>17:10 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
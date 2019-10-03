import React, { Component } from "react";
import { StyleSheet } from 'react-native'
import {Container,Header,Title,Content,Button,Icon,List,ListItem,Text,Left,Right,Body} from "native-base";


const datas = [
  "ควย",
  "react",
  "หน้าหี",
  "พ่อ",
  "มึง",
  "ตาย",
  "ไอ้",
  "สัส"
];

class Tab2 extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <List>
            {datas.map((data, i) => (
              <ListItem>
                <Left>
                  <Text>{data}</Text>
                </Left>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
});

export default Tab2;
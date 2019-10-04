import React, { Component } from 'react';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';
import { Button, Icon, Container, Header, Left, Body, Right, Title } from 'native-base';
import Tabbar from 'react-native-tabbar-bottom';

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            page: "HomeScreen",
        }
    }
    render() {
        return (
            <Container>
                <Header>
                    <Left />
                    <Body style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Title>User Interface</Title>
                    </Body>
                    <Right />
                </Header>
                <ImageBackground source={require('./Screen/Image/BG.png')} style={{ width: '100%', height: '100%' }}>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                            <View style={{ width: 100, height: 100, backgroundColor: '#FFFFFF' }}>
                                <Text>จองคิว</Text>
                            </View>
                            <View style={{ width: 100, height: 100, marginLeft: 212, backgroundColor: 'skyblue' }}>
                                <Text>แพทย์นัดตรวจ</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                            <View style={{ width: 100, height: 100, backgroundColor: '#FFFFFF' }}>
                                <Text>ตารางจองคิว</Text>
                            </View>
                            <View style={{ width: 100, height: 100, marginLeft: 212, backgroundColor: 'skyblue' }}>
                                <Text>หมายเลขคิว</Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <View style={{ flex: 1 }}>
                {
                    // if you are using react-navigation just pass the navigation object in your components like this:
                    // {this.state.page === "HomeScreen" && <MyComp navigation={this.props.navigation}>Screen1</MyComp>}
                }
                {this.state.page === "HomeScreen"}
                {this.state.page === "NotificationScreen" && <Text>Screen2</Text>}
                {this.state.page === "ProfileScreen" && <Text>Screen3</Text>}
                {this.state.page === "ChatScreen" && <Text>Screen4</Text>}
                {this.state.page === "SearchScreen" && <Text>Screen5</Text>}

                <Tabbar
                    stateFunc={(tab) => {
                        this.setState({ page: tab.page })
                        //this.props.navigation.setParams({tabTitle: tab.title})
                    }}
                    activePage={this.state.page}
                    tabs={[
                        {
                            page: "HomeScreen",
                            icon: "home",
                        },
                        {
                            page: "NotificationScreen",
                            icon: "notifications",
                            badgeNumber: 11,
                        },
                        {
                            page: "ProfileScreen",
                            icon: "person",
                        },
                        {
                            page: "ChatScreen",
                            icon: "chatbubbles",
                            badgeNumber: 7,
                        },
                        {
                            page: "SearchScreen",
                            icon: "search",
                        },
                    ]}
                />
            </View>
            </Container>
            
        );
    }
}


import React, { Component } from 'react';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Button, Icon, Container, Header, Left, Body, Right, Title } from 'native-base';

export default class Test extends Component {
    static navigationOptions = {
        title: 'Test',
      };
    render() {
        return (
            <Container>
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

            </Container>

        );
    }
}



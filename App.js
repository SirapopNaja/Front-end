import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import  Test  from './Test';
import login from './Screen/login';
import register from './Screen/register';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
      }
      
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}



const RootStack = createStackNavigator({
  login : login,
  Home: HomeScreen,
  Details: Test,
  register : register,
}, {
    initialRouteName: 'login',
}
    );

export default createAppContainer(RootStack);
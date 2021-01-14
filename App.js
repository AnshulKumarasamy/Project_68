import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import FB from './screens/fb';
import IN from './screens/in';

export default class App extends React.Component {
  render(){
    return (
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  FaceBook: {screen: FB},
  Instagram: {screen: IN}
});

const AppContainer = createAppContainer(TabNavigator);
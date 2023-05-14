import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/app-navigator';
const stack = createStackNavigator();

const App = () => {
  return ( 
    <AppNavigator/>
  )
}

const Home = () => {
  return (
  <View>
    <Text> this is home page</Text>
  </View>
  )
}
const Called = () => {
  return (
  <View>
    <Text> this is called page</Text>
  </View>
  )
}

export default App;
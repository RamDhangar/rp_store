import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Splash from './screen/splash';
import Login from './screen/login';
import SignUp from './screen/sign-up';
import Home from './screen/home';
const stack = createStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen options={{headerShown:false}}  name='Splash' component={Splash}/>
                <stack.Screen options={{headerShown:false}}  name='Login' component={Login}/>
                <stack.Screen options={{headerShown:false}}  name='Signup' component={SignUp}/>
                <stack.Screen options={{headerShown:false}}  name='Home' component={Home}/>
            </stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
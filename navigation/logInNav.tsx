// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/AuthScreens/Login';
import SignUp from '../screens/AuthScreens/SignUp';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = 'Login' component = {Login}/>
                <Stack.Screen name = 'SignUp' component = {SignUp}/>

            </Stack.Navigator>


        </NavigationContainer>
    )
}
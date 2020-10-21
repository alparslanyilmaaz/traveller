/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './src/screens/homepage';
import Description from './src/screens/description';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" >
        <Stack.Screen name='Home' component={HomePage} />
        <Stack.Screen name='Description' component={Description} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Async1 from './Async1';
import Async2 from './Async2';
 
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Async1" component={Async1Screen} />
        <Tab.Screen name="Async2" component={Async2sScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


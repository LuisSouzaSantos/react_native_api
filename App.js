import React from 'react';
import Menu from './src/templates/Menu/Menu';
import Car from './src/templates/Car/Car';
import Van from './src/templates/Van/Van';
import Motorcycle from './src/templates/Motorcycle/Motorcycle';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Menu" component={Menu}/>
            <Stack.Screen name="Car" component={Car}/>
            <Stack.Screen name="Van" component={Van}/>
            <Stack.Screen name="Truck" component={Van}/>
            <Stack.Screen name="Motorcycle" component={Motorcycle}/>
        </Stack.Navigator>
    </NavigationContainer>);
}
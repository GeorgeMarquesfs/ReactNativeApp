import React from 'react'
import DetScreens from '../screens/DetScreens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

const AppNavigator = () => {
    const Stack = createNativeStackNavigator(); 
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetScreens} />
    </Stack.Navigator>
  )
}

export default AppNavigator
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import DashBoardQrScreen from '../../../../screens/App/DashBoard/Pages/DashBoardQR';

const Stack = createStackNavigator();

const DashBoardStack = () => {
  return (
    <Stack.Navigator
        initialRouteName="DashBoardQrScreen"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="DashBoardQrScreen" component={DashBoardQrScreen} />
    </Stack.Navigator>
  )
}

export default DashBoardStack;
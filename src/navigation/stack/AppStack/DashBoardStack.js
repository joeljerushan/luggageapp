import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeKingsCrossLuggage from '../../../screens/App/Home/pages/HomeKingsCrossLuggage ';
import HomeBooking from '../../../screens/App/Home/pages/HomeBooking';
import DashBoardQrScreen from '../../../screens/App/DashBoard/Pages/DashBoardQR';

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
        <Stack.Screen name="HomeBooking" component={HomeBooking} />
    </Stack.Navigator>
  )
}

export default DashBoardStack;
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeKingsCrossLuggage from '../../../screens/App/Home/pages/HomeKingsCrossLuggage ';
import HomeBooking from '../../../screens/App/Home/pages/HomeBooking';

const Stack = createStackNavigator();

const EarningStack = () => {
  return (
    <Stack.Navigator
        initialRouteName="HomeKingsCrossLuggage"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="HomeKingsCrossLuggage" component={HomeKingsCrossLuggage} />
        <Stack.Screen name="HomeBooking" component={HomeBooking} />
    </Stack.Navigator>
  )
}

export default EarningStack;
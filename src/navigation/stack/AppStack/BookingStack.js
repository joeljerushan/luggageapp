import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeBooking from '../../../screens/App/Home/pages/HomeBooking';

const Stack = createStackNavigator();

const BookingStack = () => {
  return (
    <Stack.Navigator
        initialRouteName="HomeBooking"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="HomeBooking" component={HomeBooking} />
    </Stack.Navigator>
  )
}

export default BookingStack;
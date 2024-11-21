import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BookingHome from '../../../screens/App/Booking/Pages/BookingHome';

const Stack = createStackNavigator();

const BookingStack = () => {
  return (
    <Stack.Navigator
        initialRouteName="BookingHome"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="BookingHome" component={BookingHome} />
    </Stack.Navigator>
  )
}

export default BookingStack;
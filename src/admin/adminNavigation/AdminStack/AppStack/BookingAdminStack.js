import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BookingAdmin from '../../../adminScreens/App/Booking';

const Stack = createStackNavigator();

const BookingAdminStack = () => {
  return (
    <Stack.Navigator
        initialRouteName="BookingAdmin"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="BookingAdmin" component={BookingAdmin} />
    </Stack.Navigator>
  )
}

export default BookingAdminStack;
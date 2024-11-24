import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BookingCalendar from '../../../../screens/App/Booking/Pages/BookingCalendar';
import BookingConfirm from '../../../../screens/App/Booking/Pages/BookingConfirm';
import BookingReadyToCheckIn from '../../../../screens/App/Booking/Pages/BookingReadyToCheckIn';
import BookingCheckedIn from '../../../../screens/App/Booking/Pages/BookinCheckedIn';
import BookingHome from '../../../../screens/App/Booking/Pages/BookingHome';


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
        <Stack.Screen name="BookingCalendar" component={BookingCalendar} />
        <Stack.Screen name="BookingConfirm" component={BookingConfirm}/>
        <Stack.Screen name="BookingReadyToCheckIn" component={BookingReadyToCheckIn} />
        <Stack.Screen name="BookingCheckedIn" component={BookingCheckedIn} />
    </Stack.Navigator>
  )
}

export default BookingStack;
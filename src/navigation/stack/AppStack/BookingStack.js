import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BookingHome from '../../../screens/App/Booking/Pages/BookingHome';
import BookingConfirm from '../../../screens/App/Booking/Pages/BookingConfirm';
import BookingCalendar from '../../../screens/App/Booking/Pages/BookingCalendar';
import BookingReadyToCheckIn from '../../../screens/App/Booking/Pages/BookingReadyToCheckIn';
import BookingCheckedIn from '../../../screens/App/Booking/Pages/BookinCheckedIn';

const Stack = createStackNavigator();

const BookingStack = () => {
  return (
    <Stack.Navigator
        initialRouteName="BookingCheckedIn"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="BookingHome" component={BookingHome} />
        <Stack.Screen name="BookingCalendar" component={BookingCalendar} />
        <Stack.Screen 
          name="BookingConfirm" 
          component={BookingConfirm} 
          options={{ 
            tabBarStyle: { display: 'none' } 
          }} // Hide tab bar on BookingConfirm screen
        />
        <Stack.Screen name="BookingReadyToCheckIn" component={BookingReadyToCheckIn} />
        <Stack.Screen name="BookingCheckedIn" component={BookingCheckedIn} />
    </Stack.Navigator>
  )
}

export default BookingStack;
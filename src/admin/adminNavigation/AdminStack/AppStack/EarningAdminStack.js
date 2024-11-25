import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AdminEarningWebsite from '../../../adminScreens/App/Earning/AdminEarningWebsite';
import AdminEarningEmployee from '../../../adminScreens/App/Earning/AdminEarningEmployee';

const Stack = createStackNavigator();

const EarningAdminStack = () => {
  return (
    <Stack.Navigator
        initialRouteName="AdminEarningEmployee"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="AdminEarningEmployee" component={AdminEarningEmployee} />
        <Stack.Screen name="AdminEarningWebsite" component={AdminEarningWebsite} />
    </Stack.Navigator>
  )
}

export default EarningAdminStack;
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AccountStore from '../../../../screens/App/Account/Pages/AccountStore';
import Notifications from '../../../../screens/App/Account/Pages/Notification';

const Stack = createStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator
        initialRouteName="AccountStore"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="AccountStore" component={AccountStore} />
        <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  )
}

export default AccountStack;
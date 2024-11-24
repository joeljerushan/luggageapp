import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AccountAdmin from '../../../adminScreens/App/Account';

const Stack = createStackNavigator();

const AccountAdminStack = () => {
  return (
    <Stack.Navigator
        initialRouteName="AccountAdmin"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="AccountAdmin" component={AccountAdmin} />
    </Stack.Navigator>
  )
}

export default AccountAdminStack;
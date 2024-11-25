import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AccountStoreAdmin from '../../../adminScreens/App/Account/AccountStoreAdmin';

const Stack = createStackNavigator();

const AccountAdminStack = () => {
  return (
    <Stack.Navigator
        initialRouteName="AccountStoreAdmin"
        screenOptions={{
            headerShown: false
        }}
    >        
      <Stack.Screen name="AccountStoreAdmin" component={AccountStoreAdmin} />
    </Stack.Navigator>
  )
}

export default AccountAdminStack;
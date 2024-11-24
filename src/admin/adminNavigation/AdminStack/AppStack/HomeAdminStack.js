import { Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeAdmin from '../../../adminScreens/App/Home';

const Stack = createStackNavigator();

const HomeAdminStack = () => {
  return (
    <Stack.Navigator
        initialRouteName="HomeAdmin"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="HomeAdmin" component={HomeAdmin} />
    </Stack.Navigator>
  )
}

export default HomeAdminStack;
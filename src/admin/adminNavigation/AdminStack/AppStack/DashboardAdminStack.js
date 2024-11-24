import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import DashBoardAdmin from '../../../adminScreens/App/DashBoard';

const Stack = createStackNavigator();

const DashBoardAdminStack = () => {
  return (
    <Stack.Navigator
        initialRouteName="DashBoardAdmin"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="DashBoardAdmin" component={DashBoardAdmin} />
    </Stack.Navigator>
  )
}

export default DashBoardAdminStack;
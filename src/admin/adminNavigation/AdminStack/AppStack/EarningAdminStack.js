import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import EarningAdmin from '../../../adminScreens/App/Earning';

const Stack = createStackNavigator();

const EarningAdminStack = () => {
  return (
    <Stack.Navigator
        initialRouteName="EarningAdmin"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="EarningAdmin" component={EarningAdmin} />
    </Stack.Navigator>
  )
}

export default EarningAdminStack;
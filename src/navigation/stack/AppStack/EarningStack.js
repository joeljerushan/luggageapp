import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeKingsCrossLuggage from '../../../screens/App/Home/pages/HomeKingsCrossLuggage ';
import HomeBooking from '../../../screens/App/Home/pages/HomeBooking';
import EarningTableScreen from '../../../screens/App/Earnings/Pages/EarningTableScreen';
import Billing from '../../../screens/App/Earnings/Pages/Billing';
import Notifications from '../../../screens/App/Earnings/Pages/Notification';
import EarningStore01 from '../../../screens/App/Earnings/Pages/EarningStore01';
import EarningCard from '../../../screens/App/Earnings/Pages/EarningCard';
import EarningStore02 from '../../../screens/App/Earnings/Pages/EarningStore02';
import EarningEmployee01 from '../../../screens/App/Earnings/Pages/EarningEmployee';

const Stack = createStackNavigator();

const EarningStack = () => {
  return (
    <Stack.Navigator
        initialRouteName="EarningEmployee01"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="EarningTableScreen" component={EarningTableScreen} />
        <Stack.Screen name="Billing" component={Billing} />
        <Stack.Screen name="Notifications" component={Notifications} />

        <Stack.Screen name="EarningStore01" component={EarningStore01} />
        <Stack.Screen name="EarningCard" component={EarningCard} />
        <Stack.Screen name='EarningStore02' component={EarningStore02}/>
        <Stack.Screen name="EarningEmployee01" component={EarningEmployee01} />
    </Stack.Navigator>
  )
}

export default EarningStack;
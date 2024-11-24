import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EarningCard from '../../../../screens/App/Earnings/Pages/EarningCard';
import EarningTableScreen from '../../../../screens/App/Earnings/Pages/EarningTableScreen';
import EarningOrders from '../../../../screens/App/Earnings/Pages/EarningOrders';
import Billing from '../../../../screens/App/Earnings/Pages/Billing';
import EarningStore01 from '../../../../screens/App/Earnings/Pages/EarningStore01';
import EarningStore02 from '../../../../screens/App/Earnings/Pages/EarningStore02';
import EarningEmployee01 from '../../../../screens/App/Earnings/Pages/EarningEmployee';
import EarningWebsite from '../../../../screens/App/Earnings/Pages/EarningWebsite';


const Stack = createStackNavigator();

const EarningStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="EarningCard"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="EarningCard" component={EarningCard} />
      <Stack.Screen name="EarningTableScreen" component={EarningTableScreen} />
      <Stack.Screen name="EarningOrders" component={EarningOrders} />
      <Stack.Screen name="Billing" component={Billing} />
      <Stack.Screen name="EarningStore01" component={EarningStore01} />
      <Stack.Screen name="EarningStore02" component={EarningStore02} />
      <Stack.Screen name="EarningEmployee01" component={EarningEmployee01} />
      <Stack.Screen name="EarningWebsite" component={EarningWebsite} />
    </Stack.Navigator>
  );
};

export default EarningStack;

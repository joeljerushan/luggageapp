import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EarningCard from '../../../../screens/App/Earnings/Pages/EarningCard';
import EarningTableScreen from '../../../../screens/App/Earnings/Pages/EarningTableScreen';
import EarningOrders from '../../../../screens/App/Earnings/Pages/EarningOrders';
import Billing from '../../../../screens/App/Earnings/Pages/Billing';
import EarningStore from '../../../../screens/App/Earnings/Pages/EarningStore';

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
      <Stack.Screen name="EarningStore" component={EarningStore} />
    </Stack.Navigator>
  );
};

export default EarningStack;

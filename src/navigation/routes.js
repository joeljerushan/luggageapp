import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './stack/AppStack/HomeStack';
import BottomTab from './BottomTab';


const Routes = () => {
  return (
    <NavigationContainer>
        <BottomTab/>
    </NavigationContainer>
  )
}

export default Routes;
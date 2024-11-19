import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './stack/AuthStack/HomeStack';


const Routes = () => {
  return (
    <NavigationContainer>
        <HomeStack/>
    </NavigationContainer>
  )
}

export default Routes

const styles = StyleSheet.create({})
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import FlashMessage from 'react-native-flash-message';
import Routes from './src/navigation/routes';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar barStyle="light-content" />
      <FlashMessage
        position="top"
        floating
        statusBarHeight={Platform.OS == 'ios' ? (5) : (7)}
      />
      <Routes />
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});

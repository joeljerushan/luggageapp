import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import FlashMessage from 'react-native-flash-message';
import {SafeAreaProvider} from 'react-native-safe-area-context'; // Import SafeAreaProvider
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import Routes from './src/navigation/routes';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import store, {persistor} from '@/features/user/store';

const App = () => {
  return (
    <SafeAreaProvider>
      {' '}
      {/* Wrap the entire app with SafeAreaProvider */}
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <GestureHandlerRootView style={{flex: 1}}>
            <StatusBar barStyle="dark-content" />
            <FlashMessage
              position="top"
              floating
              statusBarHeight={Platform.OS === 'ios' ? 5 : 7}
            />
            <BottomSheetModalProvider>
              <Routes />
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </Provider>
      </PersistGate>
    </SafeAreaProvider>
  );
};

export default App;

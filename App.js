/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Platform,
  StatusBar,
  useColorScheme,
  SafeAreaView
} from 'react-native';
import { Provider } from 'react-redux'
import Navigation from './src/navigations/Navigation';
import store from './src/state/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      {Platform.OS === 'ios' && <SafeAreaView style={{ flex: 0}} />}
      <SafeAreaView style={{ flex: 1}}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          hidden={false}
        />
        <Navigation />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

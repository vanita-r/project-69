import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScanScreen from './screens/ScanScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

export default function App() {
  return (
    <AppContainer/>
  );
}
const tabNavigator = createBottomTabNavigator({
  Scan:{screen:ScanScreen}
},

const AppContainer = createAppContainer(tabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


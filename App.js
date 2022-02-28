import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNav from './src/components/BottomNav.js';

//Icons
import accounticon from './src/components/assets/Account.svg';
import expensesicon from './src/components/assets/Expenses.svg';
import groupsicon from './src/components/assets/Groups.svg';
import homeicon from './src/components/assets/Home.svg';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function App() {
  return (
    <BottomNav />
  );
}

export default App;
import React, { Component } from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNav from './src/components/BottomNav.js';
import PrimaryButton from './src/components/Buttons.js'
import { MyContext } from './src/components/context/index.js';

//Icons
import accounticon from './src/components/assets/Account.svg';
import expensesicon from './src/components/assets/Expenses.svg';
import groupsicon from './src/components/assets/Groups.svg';
import homeicon from './src/components/assets/Home.svg';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

class App extends Component {
  static ContextType = MyContext;
  
  render() {
    return (
      <BottomNav />
    );
  }
}

export default App;
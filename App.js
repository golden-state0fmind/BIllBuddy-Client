import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNav from './src/components/BottomNav.js';
import { MyContext } from './src/components/context/index.js';

//Screens
import { HomeScreen } from './src/screens/HomeScreen';
import { ExpensesScreen } from './src/screens/ExpensesScreen';
import { GroupsScreen } from './src/screens/GroupsScreen';
import { AccountScreen } from './src/screens/AccountScreen';
import { CreateGroupScreen } from './src/screens/CreateGroupScreen';

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
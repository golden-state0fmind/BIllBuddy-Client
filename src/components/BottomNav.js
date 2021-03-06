import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen.js';
import ExpensesScreen from '../screens/ExpensesScreen.js';
import GroupsScreen from '../screens/GroupsScreen.js';
import AccountScreen from '../screens/AccountScreen.js';

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          header: () => null
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('../components/assets/Home.png')}
                style={{ width: 20, height: 20, tintColor: color }} />
            )
          }}
        />
        <Tab.Screen
          name="Groups"
          component={GroupsScreen}
          options={{
            tabBarLabel: 'Groups',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('../components/assets/Groups.png')}
                style={{ width: 20, height: 20, tintColor: color }}
              />
            )
          }}
        />
        <Tab.Screen
          name="Expenses"
          component={ExpensesScreen}
          options={{
            tabBarLabel: 'Expenses',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('../components/assets/Expenses.png')}
                style={{ width: 20, height: 20, tintColor: color }}
              />
            )
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('../components/assets/Account.png')}
                style={{ width: 20, height: 20, tintColor: color }}
              />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import AccountScreen from "../screens/AccountScreen";
import CreateGroupScreen from "../screens/CreateGroupScreen";
import ExpensesScreen from "../screens/ExpensesScreen";
import GroupsScreen from "../screens/GroupsScreen";

const HomeStack = createStackNavigator();



export function HomeStackScreen() {
    return (
<HomeStack.Navigator    
 >
    <HomeStack.Screen name="HomeScreen" component={HomeScreen} 
    
    />
    <HomeStack.Screen
      name="AccountScreen"
      component={AccountScreen}
    />
    <HomeStack.Screen
      name="CreateGroupScreen"
      component={CreateGroupScreen}
    />
       <HomeStack.Screen
      name="ExpensesScreen"
      component={ExpensesScreen}
    />
        <HomeStack.Screen
      name="GroupsScreen"
      component={GroupsScreen}
    />
  </HomeStack.Navigator>

    )
}
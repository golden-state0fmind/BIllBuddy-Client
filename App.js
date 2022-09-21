import React, { Component } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomNav from "./src/components/BottomNav.js";
import { MyContext } from "./src/components/context/index.js";
import { useNavigation } from '@react-navigation/native';

//Screens
import HomeScreen from "./src/screens/HomeScreen";
import ExpensesScreen from "./src/screens/ExpensesScreen";
import GroupsScreen from "./src/screens/GroupsScreen";
import AccountScreen from "./src/screens/AccountScreen";
import CreateGroupScreen from "./src/screens/CreateGroupScreen";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
// const navigation = useNavigation();


class App extends Component {
  
  // static ContextType = MyContext;
  

  render() {
    // return <BottomNav />;

    return (
      <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="BottomNav" component={BottomNav} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ExpensesScreen" component={ExpensesScreen} />
          <Stack.Screen name="GroupsScreen" component={GroupsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
   </> );
  }
}

export default App;

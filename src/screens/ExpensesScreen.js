// import React, { useState, Component } from 'react';

// import { Text, View } from 'react-native';
// import { CreateGroupForm } from '../components/CreateGroupForm';
// import { ExpensesTab } from '../components/ExpensesTab';
// import { TitleText } from '../components/TitleText';


// export default function ExpensesScreen() {
//   return (
//     <View style={{ flex: 1, backgroundColor: "#FBFBFB" }}>
//       <ExpensesTab />
//     </View>
//   );
// };

import React from "react";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { View, StyleSheet, Text } from 'react-native';
import ExpensesCompletedScreen from "./ExpensesCompletedScreen";
import ExpensesPendingScreen from "./ExpensesPendingScreen";
import AddExpenseBar from '../components/AddExpenseBar';

export function ExpensesLabel1(props) {

  return (
    <Text style={[styles.tabBarLabel, props.focused ? styles.tabBarLabelActive : {}]} >{props.title}</Text>
  );
}

const styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: 17,
    fontWeight: 'bold',
    width: 144,
    paddingTop: 6,
    height: 45,
    paddingTop: 9,
    textAlign: 'center',
    color: '#BDBDBD',
    marginLeft: 6
  },
  tabBarLabelActive: {
    color: '#3D7566',
    backgroundColor: '#EEEEEE',
    borderColor: '#EEEEEE',
    overflow: 'hidden',
    borderWidth: 5,
    marginLeft: 10,
    borderRadius: 21
  }
});

export function ExpensesLabel2(props) {

  return (
    <Text style={[styles2.tabBarLabel, props.focused ? styles2.tabBarLabelActive : {}]} >{props.title}</Text>
  );
}

const styles2 = StyleSheet.create({
  tabBarLabel: {
    fontSize: 17,
    fontWeight: 'bold',
    width: 144,
    height: 45,
    paddingTop: 9,
    textAlign: 'center',
    color: '#BDBDBD',
  },
  tabBarLabelActive: {
    color: '#3D7566',
    backgroundColor: '#EEEEEE',
    borderColor: '#EEEEEE',
    overflow: 'hidden',
    borderWidth: 5,
    marginRight: 10,
    borderRadius: 21
  }
});

const TabNavigator = createMaterialTopTabNavigator(
  {
    ExpensesPending: {
      screen: ExpensesPendingScreen,
      navigationOptions: {
        tabBarLabel: ({ focused }) => <ExpensesLabel1 title={"You owe"} focused={focused} />,
        showLabel: ({ focused }) => {
          console.log(focused);
          return focused ? true : false;
        }
      },
    },
    ExpensesCompleted: {
      screen: ExpensesCompletedScreen,
      navigationOptions: {
        tabBarLabel: ({ focused }) => <ExpensesLabel2 title={"You are owed"} focused={focused} />
      },
    },
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: "#E0E0E0",
        width: 'auto',
        marginTop: 48,
        marginBottom: 20,
        width: 320,
        alignSelf: 'center',
        borderRadius: 30,
        justifyContent: 'center'
      },
      indicatorStyle: {
        backgroundColor: 'transparent'
      },
      labelStyle: { textTransform: 'capitalize' },
    }
  }
);

const Navigator = createAppContainer(TabNavigator);

export default function ExpensesScreen() {
  return (
    <Navigator>
      <ExpensesPendingScreen />
    </Navigator>
  );
}
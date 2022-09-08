
import React from "react";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { View } from 'react-native';
import BalanceOweScreen from "./BalanceOweScreen";
import BalanceOwedScreen from "./BalanceOwedScreen";
import { StyleSheet, Text } from "react-native";

export function MyTabBarLabel1(props) {

    return (
        <Text style={[styles.tabBarLabel, props.focused ? styles.tabBarLabelActive : {}]} >{props.title}</Text>
    );
}

const styles = StyleSheet.create({
    tabBarLabel: {
        paddingBottom: 6,
        fontSize: 17,
        textAlign: 'center',
        color: '#E0E0E0'
    },
    tabBarLabelActive: {
        color: '#B52044'
    },
    indicatorStyle: {
        backgroundColor: '#B52044'
    }
});

export function MyTabBarLabel2(props) {

    return (
        <Text style={[styles2.tabBarLabel, props.focused ? styles2.tabBarLabelActive : {}]} >{props.title}</Text>
    );
}

const styles2 = StyleSheet.create({
    tabBarLabel: {
        paddingBottom: 6,
        fontSize: 17,
        textAlign: 'center',
        color: '#E0E0E0'
    },
    tabBarLabelActive: {
        color: '#008763'
    }
});

const TabNavigator = createMaterialTopTabNavigator(
    {
        BalanceOwe: {
            screen: BalanceOweScreen,
            navigationOptions: {
                tabBarLabel: ({ focused }) => <MyTabBarLabel1 title={"You owe"} focused={focused} />,
                showLabel: ({ focused }) => {
                    console.log(focused);
                    return focused ? true : false;
                }
            },
        },
        BalanceOwed: {
            screen: BalanceOwedScreen,
            navigationOptions: {
                tabBarLabel: ({ focused }) => <MyTabBarLabel2 title={"You are owed"} focused={focused} />,
            }
        },
    },
    {
        tabBarOptions: {
            style: {
                backgroundColor: "#FFFFFF",
                marginTop: 48,
                marginBottom: 20,
                width: 390,
                alignSelf: 'center'
            },
            indicatorStyle: {
                backgroundColor: '#B52044'
            },
            labelStyle: { textTransform: 'none' }
        }
    }
);

const Navigator = createAppContainer(TabNavigator);

export default function BalanceScreen() {
    return (
        <Navigator>
            <BalanceOweScreen />
        </Navigator>
    );
}
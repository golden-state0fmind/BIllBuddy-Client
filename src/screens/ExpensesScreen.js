import React, { Component } from 'react';
import { Text, View, Switch } from 'react-native';



export default function ExpensesScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Switch/>
        <Text>Expenses Screen</Text>
      </View>
    );
  }
;
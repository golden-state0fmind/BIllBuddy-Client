import React, { Component } from 'react';
import { Text, View, Switch, Button } from 'react-native';
import Calendar from '../components/Calendar';



export default function ExpensesScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                  title="Calendar"
                  onPress={Calendar}
                />
      </View>
    );
  }
;
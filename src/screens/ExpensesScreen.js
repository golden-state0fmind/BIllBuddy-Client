import React, { Component } from 'react';
import { Text, View, Switch } from 'react-native';
import { CreateGroupForm } from '../components/CreateGroupForm';



export default function ExpensesScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
               <CreateGroupForm></CreateGroupForm>
      </View>
    );
  }
;
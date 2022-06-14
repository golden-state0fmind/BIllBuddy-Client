import React, { useState, Component } from 'react';

import { Text, View } from 'react-native';
import { CreateGroupForm } from '../components/CreateGroupForm';
import { ExpensesTab } from '../components/ExpensesTab';


export default function ExpensesScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ExpensesTab />
    </View>
  );
};
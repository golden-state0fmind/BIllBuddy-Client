import React, { Component } from 'react';
// import BottomNav from '../components/BottomNav.js';
import { Text, View} from 'react-native';
import { TripBoxExpensesFinal } from '../components/TripBoxEspensesFinal';
import { TripBoxExpenses } from '../components/TripBoxExpenses';
import { PrimaryButton }from '../components/Buttons';

export default function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "#fff" }}>
        {/* <PrimaryButton>Test</PrimaryButton> */}
        <TripBoxExpensesFinal />
        <TripBoxExpenses />
      </View>
    );
  }
;

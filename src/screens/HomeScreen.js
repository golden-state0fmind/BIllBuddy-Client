import React, { Component } from 'react';
// import BottomNav from '../components/BottomNav.js';
import { Text, View} from 'react-native';
import { TripBoxExpenses } from '../components/TripBoxEspenses';
// import { PrimaryButton }from '../components/Buttons'

export default function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        {/* <PrimaryButton></PrimaryButton> */}
        <TripBoxExpenses />
      </View>
    );
  }
;

import React, { Component } from 'react';
// import BottomNav from '../components/BottomNav.js';
import { Text, View} from 'react-native';
import { TopNavigation } from '../components/TopNavigation';
import { TripBoxExpensesFinal } from '../components/TripBoxEspensesFinal';
import { TripBoxExpenses } from '../components/TripBoxExpenses';
import { CalculatedExpenses } from '../components/CalculatedExpenses';
import { GroupInfoHeader } from '../components/GroupInfoHeader';
import { AddExpenseBar } from '../components/AddExpenseBar';
import { PrimaryButton }from '../components/Buttons';

export default function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "#fff" }}>
        {/* <PrimaryButton>Test</PrimaryButton> */}
        <TopNavigation />
        <GroupInfoHeader />
        <CalculatedExpenses />
        <TripBoxExpensesFinal />
        <TripBoxExpenses />
        <AddExpenseBar />
      </View>
    );
  }
;

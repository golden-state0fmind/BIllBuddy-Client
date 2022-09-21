import React, { Component } from 'react';
// import BottomNav from '../components/BottomNav.js';
import { Text, View, ScrollView } from 'react-native';
import { TopNavigation } from '../components/TopNavigation';
import { TripBoxExpensesFinal } from '../components/TripBoxEspensesFinalOld';
import { TripBoxExpenses } from '../components/TripBoxExpensesOld';
import { CalculatedExpenses } from '../components/CalculatedExpenses';
import { GroupInfoHeader } from '../components/GroupInfoHeader';
import { AddExpenseBar } from '../components/AddExpenseBar';
import { CreateBoxes } from '../components/CreateBox';
import { PrimaryButton } from '../components/Buttons';
import { RecentExpenses } from '../components/RecentExpenses';
import { ExpenseBoxes } from '../components/TripBoxExpenses';
import { TitleText } from '../components/TitleText';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "#FBFBFB" }}>
      {/* <PrimaryButton>Test</PrimaryButton> */}
      <ScrollView>
        <CalculatedExpenses />
        <CreateBoxes />
        <ExpenseBoxes />
      </ScrollView>
    </View>
  );
}
;

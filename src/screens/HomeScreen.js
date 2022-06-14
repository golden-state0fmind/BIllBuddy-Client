import React, { Component } from 'react';
// import BottomNav from '../components/BottomNav.js';
import { Text, View, ScrollView } from 'react-native';
import { TopNavigation } from '../components/TopNavigation';
import { TripBoxExpensesFinal } from '../components/TripBoxEspensesFinal';
import { TripBoxExpenses } from '../components/TripBoxExpenses';
import { CalculatedExpenses } from '../components/CalculatedExpenses';
import { GroupInfoHeader } from '../components/GroupInfoHeader';
import { AddExpenseBar } from '../components/AddExpenseBar';
import { CreateBoxes } from '../components/CreateBox';
import { PrimaryButton } from '../components/Buttons';
import { RecentExpenses } from '../components/RecentExpenses';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "#FBFBFB" }}>
      {/* <PrimaryButton>Test</PrimaryButton> */}
      <TopNavigation />
      <ScrollView>
        <CalculatedExpenses />
        <CreateBoxes />
        <RecentExpenses />
      </ScrollView>
    </View>
  );
}
;

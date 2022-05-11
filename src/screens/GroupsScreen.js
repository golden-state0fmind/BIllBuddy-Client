import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { AddGroupBar } from '../components/AddGroupBar';
import { TripBoxContainer } from '../components/TripBoxContainer';
import { TripBox } from '../components/TripBox';
import { TripBoxHighlight } from '../components/TripBoxHighlight';
import { GroupYear } from '../components/GroupYear';
import { GroupSettingsNav } from '../components/GroupSettingsNav';

export default function GroupScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "#fff" }}>
        <ScrollView>
        <GroupSettingsNav />
        <GroupYear>2022</GroupYear>
        <TripBoxContainer />
        <GroupYear>2021</GroupYear>
        <TripBoxContainer />
        </ScrollView>
        <AddGroupBar />
      </View>
    );
  }
;

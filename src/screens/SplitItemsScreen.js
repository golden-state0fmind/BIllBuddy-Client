import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { AccountBox } from '../components/AccountBox';
import { SplitItemsTab } from '../components/SplitItemsTab';
import { PhotoAdder, ImagePicker } from '../components/PhotoAdder';

export default function SplitItemsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "#FBFBFB" }}>
      <SplitItemsTab />
      <PhotoAdder />
    </View>
  );
}
;
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { AccountBox } from '../components/AccountBox';

export default function AccountScreen() {
    return (
      <View style={{ flex: 1,  backgroundColor: "#fff" }}>

        <AccountBox></AccountBox>
      </View>
    );
  }
;
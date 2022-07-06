import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { AccountBox } from '../components/AccountBox';
import { RegisterButtons } from '../components/Launch';
import { GmailButton } from '../components/GmailButton';
import { Register } from '../components/Register';
import { Login } from '../components/Login';

export default function AccountScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FBFBFB" }}>
      {/* <AccountBox /> */}
      {/* <RegisterButtons /> */}
      <Login />
    </View>
  );
}
;
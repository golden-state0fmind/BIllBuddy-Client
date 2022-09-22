import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { AccountBox } from '../components/AccountBox';
import { CreateGroupForm } from '../components/CreateGroupForm';

export default function CreateGroupScreen() {
    return (
      <View >
        <CreateGroupForm></CreateGroupForm>

      </View>
    );
  }
;
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Text, View, StyleSheet, Switch, FlatList, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';

const TabContainer = styled.View`
height: 56px;
width: 320px;
margin-top: 24px;
border-radius: 30px;
background-color: #EEEEEE;
flex-direction: row;
align-self: center;
`

const TabPill = styled(TouchableOpacity)`
height: 44px;
width: 160px;
border-radius: 30px;
padding: 12px;
margin-top: 6px;
background: ${props => (props.status ? '#FFFFFF' : '#EEEEEE')};
&.status {
    background-color: #FFFFFF;
}
`

const TabText = styled.Text`
font-family: DM Sans;
font-size: 17px;
font-weight: 700;
text-align: center;
color: ${props => (props.status ? '#3D7566' : '#BDBDBD')};
&.status {
    color: #3D7566;
}
`

const listTab = [
    {
        status: 'Pending'
    },
    {
        status: 'Completed'
    }
]

export function ExpensesTab() {
    const [status, setStatus] = useState('Pending')
    const setStatusFilter = status => {
        setStatus(status)
    }
    console.log(status)
    return (
        <TabContainer>
            {
                listTab.map(props => (
                    <TabPill onPress={() => setStatusFilter(props.status)}>
                        <TabText>
                            {props.status}
                        </TabText>
                    </TabPill>
                ))
            }
        </TabContainer>
    );
}
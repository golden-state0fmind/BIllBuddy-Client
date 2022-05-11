import styled from 'styled-components/native';
import { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import Modal from "react-native-modal";
import { TouchableOpacity } from 'react-native-gesture-handler';

const GroupSettingsContainer = styled.View`
height: 32px; 
margin-left: 16px;
margin-top: 12px;
display: flex;
flex-direction: row;
`

const SortPill = styled(TouchableOpacity)`
height: 32px;
width: 71px;
border-radius: 20px;
background-color: #F5F5F5;
margin-right: 4px;
align-items: center;
`

const FilterPill = styled.View`
height: 32px;
width: 134px;
border-radius: 20px;
background-color: #F5F5F5;
margin-left: 4px;
margin-right: 4px;
align-items: center;
`

const EditPill = styled.View`
height: 32px;
width: 55px;
border-radius: 20px;
background-color: #F5F5F5;
margin-left: 8px;
align-items: center;
`

const SettingsText = styled.Text`
font-size: 14px;
font-weight: 400;
text-align: left;
margin-top: 6px;
margin-bottom: 6px;
`

const SortSettings = styled.View`
height: 146px;
width: 357px;
border-radius: 16px;
margin-top: 16px;
margin-bottom: 16px;
margin-right: 8px;
margin-left: 8px;
background-color: #FFFFFF;
`

const TopModalContainer = styled.View`
height: 50px;
width: 325px;
margin-left: 16px;
margin-right: 16px;
margin-top: 16px;
display: flex;
`

const TopModalInnerContainer = styled.View`
height: 25px;
width: 325px;
flex-direction: row;
justify-content: space-between;
`

const TopModalText = styled.Text`
font-family: System;
font-size: 20px;
font-weight: 700, bold;
text-align: left;
`

const IconContainer = styled(TouchableOpacity)`
height: 24px;
width: 24px;
border-radius: 0px;
align-items: center;
margin-left: auto;
margin-bottom: auto;
display: flex;
`

const BottomModalContainer = styled.View`
height: 64px;
width: 326px;
margin-left: 16px;
margin-right: 16px;
margin-bottom: 16px;
`

const BottomModalInnerContainer = styled.View`
height: 32px;
width: 326px;
justify-content: space-between;
flex-direction: row;
`

const BottomModalText = styled.Text`
font-family: System;
font-size: 17px;
font-weight: 400;
text-align: left;
`

export default function SortModal() {
    const [isModalVisible, setModalVisible] = useState(false);
  
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
  
    return (
      <View>
        <SortPill onPress={toggleModal}>
            <SettingsText>Sort</SettingsText>
        </SortPill>
  
        <Modal isVisible={isModalVisible}>
          <SortSettings>
            <TopModalContainer>
                <TopModalInnerContainer>
                    <TopModalText>Filter by</TopModalText>
                    <IconContainer onPress={toggleModal}>
                        <Image source={require('./assets/ExitS.png')} />  
                    </IconContainer>
                </TopModalInnerContainer>
            </TopModalContainer>
            <BottomModalContainer>
                <BottomModalInnerContainer>
                    <BottomModalText>Pending</BottomModalText>
                    <Image source={require('./assets/Radio.png')} />
                </BottomModalInnerContainer>
                <BottomModalInnerContainer>
                    <BottomModalText>Completed</BottomModalText>
                    <Image source={require('./assets/Radio.png')} />
                </BottomModalInnerContainer>
            </BottomModalContainer>
          </SortSettings>
        </Modal>
      </View>
    );
  }

export function GroupSettingsNav() {
    return (
        <GroupSettingsContainer>
            <SortModal />
            <FilterPill>
                <SettingsText>Filter: Pending</SettingsText>
            </FilterPill>
            <EditPill>
                <SettingsText>Edit</SettingsText>
            </EditPill>
        </GroupSettingsContainer>
    )
}
import styled from 'styled-components/native';
import { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import Modal from "react-native-modal";
import { TouchableOpacity } from 'react-native';
import { LinearProgress } from 'react-native-elements';

const GroupSettingsContainer = styled.View`
height: 32px; 
margin-left: 16px;
margin-top: 12px;
display: flex;
flex-direction: row;
`

const SortPill = styled(TouchableOpacity)`
height: 36px;
width: 165px;
border-radius: 40px;
background-color: #F5F5F5;
margin-right: 4px;
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
height: 600px;
width: 350px;
border-radius: 16px;
margin-top: 16px;
margin-bottom: 16px;
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
height: 128px;
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

const LineContainer = styled.View`
height: 48px;
width: 358px;
display: flex;
align-items: center;
`

const FilterContainer = styled.View`
height: 144px;
width: 390px;
`

export default function SortModal() {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View>
            <SortPill onPress={toggleModal}>
                <SettingsText>Sort and filter</SettingsText>
            </SortPill>

            <Modal isVisible={isModalVisible}>
                <SortSettings>
                    <IconContainer onPress={toggleModal}>
                        <Image source={require('./assets/ExitS.png')} />
                    </IconContainer>
                    <TopModalContainer>
                        <TopModalInnerContainer>
                            <TopModalText>Sort by</TopModalText>
                        </TopModalInnerContainer>
                    </TopModalContainer>
                    <BottomModalContainer>
                        <BottomModalInnerContainer>
                            <BottomModalText>Newest</BottomModalText>
                            <Image source={require('./assets/Radio.png')} />
                        </BottomModalInnerContainer>
                        <BottomModalInnerContainer>
                            <BottomModalText>Oldest</BottomModalText>
                            <Image source={require('./assets/Radio.png')} />
                        </BottomModalInnerContainer>
                        <BottomModalInnerContainer>
                            <BottomModalText>A-Z</BottomModalText>
                            <Image source={require('./assets/Radio.png')} />
                        </BottomModalInnerContainer>
                        <BottomModalInnerContainer>
                            <BottomModalText>Z-A</BottomModalText>
                            <Image source={require('./assets/Radio.png')} />
                        </BottomModalInnerContainer>
                    </BottomModalContainer>
                    <LineContainer>
                        <Image source={require('./assets/Line.png')} />
                    </LineContainer>
                    <FilterContainer>
                        <TopModalContainer>
                            <TopModalInnerContainer>
                                <TopModalText>Filter by</TopModalText>
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
                    </FilterContainer>
                </SortSettings>
            </Modal>
        </View>
    );
}

export function GroupSettingsNav() {
    return (
        <GroupSettingsContainer>
            <SortModal />
        </GroupSettingsContainer>
    )
}
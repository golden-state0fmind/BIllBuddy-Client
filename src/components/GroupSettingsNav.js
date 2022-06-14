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
margin-top: 8px;
`

const SortSettings = styled.View`
height: 600px;
width: 350px;
border-radius: 16px;
margin-top: 16px;
margin-bottom: 16px;
background-color: #FFFFFF;
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

const SortContainer = styled.View`
height: 304px;
width: 350px;
border-radius: 0px;
padding-left: 24px;
padding-right: 24px;
`

const FilterContainer = styled.View`
height: 144px;
width: 350px;
padding-left: 24px;
padding-right: 24px;
`

const SaveContainer = styled.View`
height: 104px;
width: 350px;
`

const TextInnerContainer = styled.View`
height: 48px;
width: 300px;
justify-content: space-between;
flex-direction: row;
`

const ModalText = styled.Text`
font-family: DM Sans;
font-size: 17px;
font-weight: 400;
text-align: left;
`

const ModalTextBold = styled.Text`
font-family: DM Sans;
font-size: 17px;
font-weight: 400, bold;
text-align: left;
`

const LineContainer = styled.View`
height: 48px;
width: 358px;
align-items: center;
`

const SaveButton = styled(TouchableOpacity)`
height: 48px;
width: 300px;
border-radius: 40px;
margin-top: 24px;
/* margin-left: 24px; */
margin-right: 24px;
margin-bottom: 32px;
background-color: #448271;
align-items: center;
`

const SaveText = styled.Text`
font-size: 14px;
font-weight: 400;
text-align: left;
margin-top: 15px;
color: white;
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
                    <SortContainer>
                        <IconContainer onPress={toggleModal}>
                            <Image source={require('./assets/ExitS.png')} />
                        </IconContainer>
                        <TextInnerContainer>
                            <ModalTextBold>Sort by</ModalTextBold>
                        </TextInnerContainer>
                        <TextInnerContainer>
                            <ModalText>Newest</ModalText>
                            <Image source={require('./assets/Radio.png')} />
                        </TextInnerContainer>
                        <TextInnerContainer>
                            <ModalText>Oldest</ModalText>
                            <Image source={require('./assets/Radio.png')} />
                        </TextInnerContainer>
                        <TextInnerContainer>
                            <ModalText>A-Z</ModalText>
                            <Image source={require('./assets/Radio.png')} />
                        </TextInnerContainer>
                        <TextInnerContainer>
                            <ModalText>Z-A</ModalText>
                            <Image source={require('./assets/Radio.png')} />
                        </TextInnerContainer>
                    </SortContainer>
                    <LineContainer>
                        <Image source={require('./assets/Line.png')} style={{ width: 300 }} />
                    </LineContainer>
                    <FilterContainer>
                        <TextInnerContainer>
                            <ModalTextBold>Filter by</ModalTextBold>
                        </TextInnerContainer>
                        <TextInnerContainer>
                            <ModalText>Pending</ModalText>
                            <Image source={require('./assets/Radio.png')} />
                        </TextInnerContainer>
                        <TextInnerContainer>
                            <ModalText>Completed</ModalText>
                            <Image source={require('./assets/Radio.png')} />
                        </TextInnerContainer>
                        <SaveContainer>
                            <SaveButton onPress={toggleModal}>
                                <SaveText>Save</SaveText>
                            </SaveButton>
                        </SaveContainer>
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
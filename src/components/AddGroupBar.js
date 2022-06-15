import styled from 'styled-components/native';
import { TouchableOpacity, Image } from 'react-native';

const AddGroupContainer = styled(TouchableOpacity)`
height: 48px;
width: 342px;
background-color: #448271;
margin-top: auto;
margin-bottom: 16px;
align-self: center;
border-radius: 48px;
align-items: center;
`

const AddGroupInnerContainer = styled.View`
flex-direction: row;
height: 23px;
margin-top: 12px;
align-items: center;
`

const AddGroupText = styled.Text`
height: 26px;
width: 104px;
margin-top: 11px;
margin-bottom: 11px;
font-family: 'System';
font-size: 17px;
text-align: center;
color: #F5F5F5;
`

export function AddGroupBar() {
    return (
        <AddGroupContainer>
            <AddGroupInnerContainer>
                <Image source={require('./assets/Cross.png')} />
                <AddGroupText>Add Group</AddGroupText>
            </AddGroupInnerContainer>
        </AddGroupContainer>
    )
}
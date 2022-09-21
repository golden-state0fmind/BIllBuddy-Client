import styled from "styled-components";
import { TouchableOpacity, Image } from "react-native";

const ButtonContainer = styled(TouchableOpacity)`
height: 48px;
width: 342px;
border-radius: 40px;
border: 1px #3D7566;
flex-direction: row;
align-items: center;
`

const ButtonText = styled.Text`
font-family: DM Sans;
font-size: 17px;
font-weight: 400;
text-align: center;
color: #448271;
`

const IconContainer = styled.View`
height: 17.911439895629883px;
width: 24px;
border-radius: 0px;
margin-left: 72px;
margin-right: 12px;
`

export function GmailButton() {
    return (
        <ButtonContainer>
            <IconContainer>
                <Image source={require('./assets/Gmail.png')} />
            </IconContainer>
            <ButtonText>Continue with Gmail</ButtonText>
        </ButtonContainer>
    )
}
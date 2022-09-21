import styled from "styled-components";
import { TouchableOpacity, TextInput, Image } from "react-native";
import { GmailButton } from "./GmailButton";

const TopContainer = styled.View`
margin-left: 24px;
flex-direction: column;
`

const LoginText = styled.Text`
height: 44px;
width: 225px;
font-family: DM Sans;
font-size: 27px;
font-weight: 700;
margin-left: 122.5px;
color: #212121;
margin-top: 48px;
margin-bottom: 32px;
`

const InfoContainer = styled.View`
height: 208px;
width: 342px;
border-radius: 0px;
flex-direction: column;
`

const LabelContainer = styled.View`
height: 56px;
width: 342px;
border-radius: 4px;
border: 1px #E0E0E0;
margin-bottom: 24px;
`

const LabelText = styled(TextInput)`
font-family: DM Sans;
font-size: 17px;
font-weight: 400;
text-align: left;
margin-left: 16px;
margin-top: 15px;
`

const LoginButton = styled(TouchableOpacity)`
height: 48px;
width: 342px;
border-radius: 40px;
align-items: center;
background-color: #448271;
`

const ButtonText = styled.Text`
font-family: DM Sans;
font-size: 17px;
font-weight: 400;
text-align: center;
color: #FFFFFF;
margin-top: 11px;
`

const LineContainer = styled.View`
height: 21px;
width: 342px;
border-radius: 0px;
flex-direction: row;
margin-top: 24px;
margin-bottom: 24px;
align-items: center;
justify-content: space-between;
`

const LineText = styled.Text`
font-family: DM Sans;
font-size: 17px;
font-weight: 700;
text-align: left;
color: #757575;
`

const RegisterContainer = styled.View`
height: 40px;
width: 342px;
border-radius: 0px;
flex-direction: row;
align-items: center;
margin-top: 24px;
`

const RegularText = styled.Text`
font-family: DM Sans;
font-size: 17px;
font-weight: 400;
text-align: left;
color: #000000;
margin-left: 36.5px;
margin-right: 4px;
`

const Highlight = styled(TouchableOpacity)``

const HighlightText = styled.Text`
font-family: DM Sans;
font-size: 17px;
font-weight: 700;
text-align: center;
color: #448271;
margin-left: 4px;
`

export function Login() {
    return (
        <TopContainer>
            <LoginText>Log In</LoginText>
            <InfoContainer>
                <LabelContainer>
                    <LabelText placeholder="Name" />
                </LabelContainer>
                <LabelContainer>
                    <LabelText placeholder="Password" />
                </LabelContainer>
                <LoginButton>
                    <ButtonText>Log in</ButtonText>
                </LoginButton>
            </InfoContainer>
            <LineContainer>
                <Image source={require('./assets/RegisterLine.png')} />
                <LineText>or</LineText>
                <Image source={require('./assets/RegisterLine.png')} />
            </LineContainer>
            <GmailButton />
            <RegisterContainer>
                <RegularText>Don't have an account?</RegularText>
                <Highlight>
                    <HighlightText>Register</HighlightText>
                </Highlight>
            </RegisterContainer>
        </TopContainer>
    )
}
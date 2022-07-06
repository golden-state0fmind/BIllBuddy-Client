import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

const ButtonContainer = styled.View`
height: 48px;
width: 390px;
border-radius: 0px;
flex-direction: row;
padding-left: 24px;
padding-right: 24px;
`

const RegisterButton = styled(TouchableOpacity)`
height: 48px;
width: 159px;
border-radius: 40px;
border: 1.5px #448271;
margin-right: 12px;
`

const LoginButton = styled(TouchableOpacity)`
height: 48px;
width: 159px;
border-radius: 40px;
background-color: #448721;
margin-left: 12px;
`

const RegisterText = styled.Text`
font-family: DM Sans;
font-size: 17px;
font-weight: 400;
text-align: center;
color: #448721;
margin-top: 11px;
`

const LoginText = styled.Text`
font-family: DM Sans;
font-size: 17px;
font-weight: 400;
text-align: center;
color: #FFFFFF;
margin-top: 11px;
`

const LogoText = styled.Text`
font-family: DM Sans;
font-size: 27px;
font-weight: 700;
text-align: center;
margin-top: 308px;
margin-bottom: 283px;
`

const FullContainer = styled.View`
`

export function RegisterButtons() {
    return (
        <FullContainer>
            <LogoText>Logo</LogoText>
            <ButtonContainer>
                <RegisterButton>
                    <RegisterText>Register</RegisterText>
                </RegisterButton>
                <LoginButton>
                    <LoginText>Log In</LoginText>
                </LoginButton>
            </ButtonContainer>
        </FullContainer>
    )
}

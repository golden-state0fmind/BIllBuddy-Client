import styled from 'styled-components';
import { TextInput, Button } from 'react-native-gesture-handler';


export  const ProfilePicture  = styled.View`
margin-top: 16px ;
height: 88px;
width: 88px;
border-radius: 100;
background-color: #E0E0E0 ;
margin-left: auto;
margin-right: auto;

`

export const AccountBoxContainer = styled.View`
height: 92px;
width: 358px;
margin-left: 16px;
margin-right: 16px;
display: flex;
flex-direction: column;
align-items: flex-start;


`

export const LabelContainer = styled.Text`
height: 20px;
width: 358px;
font-family: 'System';
font-size: 21px;
font-weight: 700, Bold;
text-align: left;
margin-bottom: 16px;
margin-top: 32px;
`

export const InputContainer = styled.TextInput`
height: 56px;
width: 358px;
border-radius: 5px;
border: 1px #E0E0E0 solid;
`
export const ChangePassword = styled.Text`

margin-top: 26px;
padding: 16px;
border-radius: 10px;
border: 1px #E0E0E0 solid;

`
export const Divider = styled.Text`

margin-top: 26px;
width: 100% ;
height:0% ;
border-radius: 10px;
border: 1px #E0E0E0 solid;
`
export const TextButtonOptions = styled.Text`

margin-top: 26px;

`




export function AccountBox() {
    return(
        <AccountBoxContainer>
            <ProfilePicture></ProfilePicture>
            <LabelContainer>Name</LabelContainer>

            <InputContainer></InputContainer>

            <LabelContainer>Phone</LabelContainer>

            <InputContainer></InputContainer>

            <LabelContainer>Email</LabelContainer>
            
            <InputContainer></InputContainer>
            <ChangePassword> Change Password</ChangePassword>

            <Divider></Divider>
            <TextButtonOptions>Log out</TextButtonOptions>
            <TextButtonOptions>Delete  Account</TextButtonOptions>


        </AccountBoxContainer>
    )
}
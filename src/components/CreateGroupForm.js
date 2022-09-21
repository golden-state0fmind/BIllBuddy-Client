import styled from 'styled-components';
import { TextInput, Button } from 'react-native-gesture-handler';
import { Image } from 'react-native';
import { PhotoAdder } from './PhotoAdder';

const TopNavigationContainer = styled.View`
height: 25px;
width: 390px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-bottom: auto;
`

const ArrowContainer = styled.View`
height: 54px;
width: 54px;
display: flex;
flex-direction: row;
align-items: center;
`


const IconContainer = styled.View`
height: 15px;
width: 20px;
margin: 1px;
display: flex;
`



const FormContainer = styled.View`
margin: 16px;
display: flex ;
`
const TitleText = styled.Text`
font-size: 30px;
font-weight: 700;
text-align: left;
margin-top: 10%;
margin-bottom: 15%;
`

const LabelText = styled.Text`
font-size: 21px;
font-weight: 700;
text-align: left;
`

const SmallText = styled.Text`
font-size: 15px;
text-align: left;
margin: 5px ;
`

const InputText = styled.TextInput`
height: 40px;
width: 360px;
margin: 12px;
padding: 20px;
border: 2px #9E9E9E solid;
border-radius: 6px;
`
const InputTextArea = styled.TextInput`

margin: 12px;
padding: 20px;
border: 2px #9E9E9E solid;
border-radius: 6px;
`


const DateEntry = styled.TextInput`
height: 40px;
width: 130px;
margin: 12px;
padding: 20px;
border: 2px #9E9E9E solid;
border-radius: 6px;
`

const Continue = styled.View`
height: 48px;
width: 110%;
background-color: #616161;
align-items: center;
align-self: flex-end;
margin-top: auto;
`

const ContinueText = styled.Text`
height: 26px;
width: 104px;
margin-top: 11px;
margin-bottom: 11px;
font-family: 'System';
font-size: 17px;
text-align: center;
color: #F5F5F5;
`


export function CreateGroupForm() {
    return (
        <FormContainer>
            <TopNavigationContainer>
                <ArrowContainer>
                    <IconContainer>
                        <Image source={require('./assets/NavArrow.png')} />
                    </IconContainer>
                </ArrowContainer>
            </TopNavigationContainer>
            <TitleText>First, some details</TitleText>

            <LabelText>Group Name</LabelText>
            <InputText
                placeholder="LA Roadtrip, knitting club, bike buddies..."
            />
            <LabelText>Dates</LabelText>
            <DateEntry
                placeholder="Tap to add"
            />
            <LabelText>Who is Involved?</LabelText>
            <SmallText>Group Total: 0</SmallText>
            <InputTextArea
                numberOfLines={4}
                placeholder="Start adding names here" >
            </InputTextArea>
            <PhotoAdder />
        </FormContainer>
    )
}
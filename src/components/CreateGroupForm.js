import styled from 'styled-components';
import { TextInput, Button } from 'react-native-gesture-handler';
import { Image } from 'react-native';

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



const FormContainer  = styled.View`
margin: 16px;

`
const TitleText  = styled.Text`
font-size: 30px;
font-weight: 700;
text-align: left;
margin-top: 10%;
margin-bottom: 15%;
`

const LabelText  = styled.Text`
font-size: 21px;
font-weight: 700;
text-align: left;
`
const InputText  = styled.TextInput`
height: 40px;
width: 360px;
margin: 12px;
padding: 20px;
border: 2px grey solid;
border-radius: 6px;
`

const DateEntry  = styled.TextInput`
height: 40px;
width: 360px;
margin: 12px;
padding: 20px;
border: 2px grey solid;
border-radius: 6px;
`


export function CreateGroupForm() {
    return(
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

        </FormContainer>
    )
}
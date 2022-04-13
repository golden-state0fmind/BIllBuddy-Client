import styled from 'styled-components/native';
import { Image } from 'react-native';

const CreateBoxAcrossContainer = styled.View`
height: 160px;
width: 357px;
margin-left: 16px;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;
`

const CreateBoxContainer = styled.View`
height: 160px;
width: 167px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #F8F8F8;
border-radius: 8px;
`

const CreateBoxTextContainer = styled.Text`
height: 51px;
width: 120px;
font-family: 'System';
font-size: 21px;
font-weight: bold;
text-align: center;
display: flex;
flex-direction: column;
`

 function CreateBoxContainer1() {
    return(
        <CreateBoxContainer>
            <Image source={require('./assets/Expense.png')} />  
            <CreateBoxTextContainer>Create{"\n"} expense</CreateBoxTextContainer>
        </CreateBoxContainer>
    )
}

function CreateBoxContainer2() {
    return(
        <CreateBoxContainer>
            <Image source={require('./assets/Envelope.png')} />  
            <Image source={require('./assets/Envelope.png')} />  
            <CreateBoxTextContainer>Create{"\n"} group</CreateBoxTextContainer>
        </CreateBoxContainer>
    )
}

export function CreateBoxes() {
    return(
        <CreateBoxAcrossContainer>
            <CreateBoxContainer1 />
            <CreateBoxContainer2 />
        </CreateBoxAcrossContainer>
    )
}
import styled from 'styled-components/native';
import { Image, TouchableOpacity } from 'react-native';

const ExpensesBoxContainer = styled(TouchableOpacity)`
height: 106px;
width: 342px;
border-radius: 8px;
background-color: #FFFFFF;
display: flex;
margin-top: 10px;
margin-bottom: 10px;
align-self: center;
box-shadow: 2px 4px 16px #0646350D;
`

const ExpensesBoxInnerContainer = styled.View`
height: 48px;
width: 310px;
flex-direction: column;
margin-left: 16px;
margin-right: 16px;
margin-top: 29px;
margin-bottom: 29px;
`

const ExpensesBoxUpperContainer = styled.View`
height: 24px;
width: 310px;
justify-content: space-between;
flex-direction: row;

`

const ExpensesBoxLowerContainer = styled.View`
height: 24px;
width: 310px;
justify-content: space-between;
flex-direction: row;
`

const ExpenseText = styled.Text`
font-family: DM Sans;
font-size: 17px;
font-weight: 700, bold;
text-align: left;
color: #424242;
`

const OweText = styled.Text`
font-family: DM Sans;
font-size: 14px;
font-weight: 400;
text-align: right;
color: #B52044;
`

const OwedText = styled.Text`
font-family: DM Sans;
font-size: 14px;
font-weight: 400;
text-align: right;
color: #448271;
`

const InfoText = styled.Text`
font-family: DM Sans;
font-size: 14px;
font-weight: 400;
text-align: left;
color: #757575;
`

const OwePriceText = styled.Text`
font-family: DM Sans;
font-size: 21px;
font-weight: 700, bold;
text-align: right;
color: #B52044;
`

const OwedPriceText = styled.Text`
font-family: DM Sans;
font-size: 21px;
font-weight: 700, bold;
text-align: right;
color: #008763;
`
const ExpenseBoxOuterContainer = styled.View`
width: 390px;
flex-direction: column;
align-self: center;
`

const TopText = styled.Text`
font-family: DM Sans;
font-size: 21px;
font-weight: 700, bold;
text-align: left;
color: #000000;
margin-bottom: 10px;
margin-top: 10px;
width: 342px;
height: 24px;
align-self: center;
`

export function ExpenseBox1() {
    return (
        <ExpensesBoxContainer>
            <ExpensesBoxInnerContainer>
                <ExpensesBoxUpperContainer>
                    <ExpenseText>Steak dinner</ExpenseText>
                    <OweText>You owe</OweText>
                </ExpensesBoxUpperContainer>
                <ExpensesBoxLowerContainer>
                    <InfoText>Trip to AZ • Apr 14</InfoText>
                    <OwePriceText>$11.75</OwePriceText>
                </ExpensesBoxLowerContainer>
            </ExpensesBoxInnerContainer>
        </ExpensesBoxContainer>
    )
}


export function ExpenseBox2() {
    return (
        <ExpensesBoxContainer>
            <ExpensesBoxInnerContainer>
                <ExpensesBoxUpperContainer>
                    <ExpenseText>Fancy Schmancy</ExpenseText>
                    <OwedText>You are owed</OwedText>
                </ExpensesBoxUpperContainer>
                <ExpensesBoxLowerContainer>
                    <InfoText>Group name • Feb 14</InfoText>
                    <OwedPriceText>$11.75</OwedPriceText>
                </ExpensesBoxLowerContainer>
            </ExpensesBoxInnerContainer>
        </ExpensesBoxContainer>
    )
}

export function ExpenseBoxes() {
    return (
        <ExpenseBoxOuterContainer>
            <TopText>Recent</TopText>
            <ExpenseBox1 />
            <ExpenseBox2 />
        </ExpenseBoxOuterContainer>
    )
}
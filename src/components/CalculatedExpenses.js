import styled from 'styled-components/native';
import { Image } from 'react-native';


const CalculatedExpensesContainer = styled.View`
height: 124px;
width: 358px;
margin-left: 16px;
margin-right: 16px;
margin-top: 8px;
margin-bottom: 8px;
background-color: #F5F5F5;
align-items: center;
display: flex;
flex-direction: row;
border-radius: 8px;
`

const BalanceSummaryContainer = styled.View`
height: 104px;
width: 178.5px;
`

const TitleContainer = styled.Text`
height: 24px;
width: 178.5px;
font-family: 'System';
font-weight: bold;
font-size: 17px;
text-align: center;
margin-top: 19px;
`

const AmountContainer = styled.Text`
height: 40px;
width: 178.5px;
margin-bottom: 19px;
font-family: 'System';
font-weight: bold;
display: flex;
flex-direction: row;
font-size: 33px;
text-align: center;
`

const RectangleContainer = styled.View`
height: 0.9999969601631173px;
width: 80.00000000000007px;
`

export function CalculatedExpenses() {
    return(
        <CalculatedExpensesContainer>
            <BalanceSummaryContainer>
                <TitleContainer>You owe</TitleContainer>
                <AmountContainer>$23.25</AmountContainer>
            </BalanceSummaryContainer>
            <Image source={require('./assets/Rectangle.png')} />  
            <BalanceSummaryContainer>
                <TitleContainer>You are owed</TitleContainer>
                <AmountContainer>$78.35</AmountContainer>
            </BalanceSummaryContainer>
        </CalculatedExpensesContainer>
    )
}
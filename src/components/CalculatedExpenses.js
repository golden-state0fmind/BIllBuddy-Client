import styled from 'styled-components/native';
import { Image } from 'react-native';


const CalculatedExpensesContainer = styled.View`
height: 124px;
width: 358px;
margin-top: 8px;
margin-bottom: 8px;
align-self: center;
background-color: #FFFFFF;
align-items: center;
display: flex;
flex-direction: row;
border-radius: 8px;
box-shadow: 0px 4px #00000040;

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
    return (
        <CalculatedExpensesContainer>
            <BalanceSummaryContainer>
                <TitleContainer style={{ color: '#B52044' }}>You owe</TitleContainer>
                <AmountContainer style={{ color: '#B52044' }}>$23.25</AmountContainer>
            </BalanceSummaryContainer>
            <Image source={require('./assets/Rectangle.png')} />
            <BalanceSummaryContainer>
                <TitleContainer style={{ color: '#008763' }}>You are owed</TitleContainer>
                <AmountContainer style={{ color: '#008763' }}>$78.35</AmountContainer>
            </BalanceSummaryContainer>
        </CalculatedExpensesContainer>
    )
}
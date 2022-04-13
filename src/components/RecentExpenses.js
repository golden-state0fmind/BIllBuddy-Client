import styled from 'styled-components';
import { TripBoxExpensesFinal } from './TripBoxEspensesFinal';
import { TripBoxExpenses } from './TripBoxExpenses';

const RecentExpensesContainer = styled.View`
height: 293px;
width: 390px;
margin-top: 40px;
display: flex;
flex-direction: column;
align-items: flex-start;
`

const RecentTitle = styled.Text`
height: 24px;
width: 358px;
margin-left: 16px;
font-family: 'System';
font-size: 21px;
font-weight: 700, Bold;
text-align: left;
margin-bottom: 8px;
`

export function RecentExpenses() {
    return(
        <RecentExpensesContainer>
            <RecentTitle>Recent</RecentTitle>
            <TripBoxExpensesFinal />
            <TripBoxExpenses />
        </RecentExpensesContainer>
    )
}
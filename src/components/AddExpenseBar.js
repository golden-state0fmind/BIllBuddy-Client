import styled from 'styled-components/native';

const AddExpenseContainer = styled.View`
height: 48px;
width: 420px;
background-color: #616161;
align-items: center;
margin-top: auto;
`

const AddExpenseText = styled.Text`
height: 26px;
width: 104px;
margin-top: 11px;
margin-bottom: 11px;
font-family: 'System';
font-size: 17px;
text-align: center;
color: #F5F5F5;
`

export function AddExpenseBar() {
    return(
        <AddExpenseContainer>
            <AddExpenseText>Add Expense</AddExpenseText>
        </AddExpenseContainer>
    )
}
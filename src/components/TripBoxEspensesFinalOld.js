import styled from 'styled-components/native';
import { Image } from 'react-native';
import groups from './assets/Groups.png';

const ExpensesBoxContainer = styled.View`
width: 358px;
height: 151px;
border: 2px #BDBDBD;
margin-left: 16px;
margin-right: 16px;
margin-top: 8px;
margin-bottom: 8px;
display: flex;
background-color: #F5F5F5;
border-radius: 8px;
`

const ExpensesBoxInnerContainer = styled.View`
height: 120px;
width: 358px;
padding-top: 15.5px;
padding-bottom: 15.5px;
`

const HeaderContainer = styled.View`
height: 46px;
width: 326px;
margin-top: 6px;
margin-left: 16px;
margin-right: 16px;
flex-direction:row;
`

const TitleContainer = styled.View`
height: 46px;
width: 237px;
margin-right: 12px;
`

const ExpensesBoxTitle = styled.Text`
width: 237px;
height: 26px;
font-family: 'System';
font-style: normal;
font-weight: 700;
font-size: 21px;
letter-spacing: -0.5px;
color: #212121;
`

const ExpensesBoxGroupTitle = styled.Text`
width: 237px;
height: 20px;
font-family: 'System';
font-style: normal;
font-weight: 700;
font-size: 13.5px;
letter-spacing: -0.5px;
color: #212121;
`

const InfoContainer = styled.View`
height: 46px;
width: 77px;
display: flex;
align-items: baseline;
flex-direction: row;
`

const IconContainer = styled.View`
height: 12.75px;
width: 16.48px;
margin-left: 12.75px;
margin-right: 8.77px;
margin-bottom: 30.62px;
display: flex;
`

const DateContainer = styled.Text`
height: 17px;
width: 39px;
margin-bottom: 29px;
font-family: 'System';
font-size: 14px;
text-align: left;
`

const ExpensesContainer = styled.Text`
width: 326px;
height: 26px;
font-family: 'System';
font-weight: 400;
font-size: 17px;
color: #7A7A7A;
margin-top: 8px;
margin-bottom: 8px;
margin-left: 16px;
margin-right: 16px;
`

const FriendsContainer = styled.Text`
width: 326px;
height: 20px;
font-family: 'System';
font-weight: 400;
font-size: 13.5px;
color: #BDBDBD;
margin-bottom: 21.5px;
margin-left: 16px;
margin-right: 16px;
`

export function TripBoxExpensesFinal() {
    return (
        <ExpensesBoxContainer>
            <ExpensesBoxInnerContainer>
                <HeaderContainer>
                    <TitleContainer>
                        <ExpensesBoxTitle>Steak dinner</ExpensesBoxTitle>
                        <ExpensesBoxGroupTitle>San Fran Trip!</ExpensesBoxGroupTitle>
                    </TitleContainer>
                    <InfoContainer>
                        <IconContainer>
                            <Image
                                source={require('./assets/Groups.png')}
                                style={{ width: 16.48, height: 12.75 }} />
                        </IconContainer>
                        <DateContainer>02/14</DateContainer>
                    </InfoContainer>
                </HeaderContainer>
                <ExpensesContainer>Everyone owes you a total of $33.56</ExpensesContainer>
                <FriendsContainer>Anna • Rochelle • Roy</FriendsContainer>
            </ExpensesBoxInnerContainer>
        </ExpensesBoxContainer>
    )
}
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

const TripBoxContainer = styled(TouchableOpacity)`
height: 159px;
width: 158px;
border-radius: 8px;
background-color: #FFFFFF;
display: flex;
flex-direction: column;
`

const TripBoxTop = styled.View`
height: 8px;
width: 158px;
padding-top: auto;
background-color: #448271;
border-top-left-radius: 8px;
border-top-right-radius: 8px;
`

const TripBoxTextContainer = styled.View`
height: 97px;
width: 134px;
margin-left: 16px;
margin-right: 17px;
margin-top: 8px;
margin-bottom: 15px;
display: flex;
flex-direction: column;
`

const TripBoxDateContainer = styled.Text`
height: 17px;
width: 134px;
margin-top: 16px;
font-family: 'System';
font-size: 14px;
color: #C4C4C4;

`

const TripBoxNameContainer = styled.Text`
height: 72px;
width: 134px;
font-family: 'System';
font-size: 17px;
font-weight: 700, Bold;
`

const TripBoxProfileContainer = styled.View`
height: 24px;
width: 143px;
`

export function TripBoxHighlight() {
    return (
        <TripBoxContainer>
            <TripBoxTop />
            <TripBoxTextContainer>
                <TripBoxDateContainer>Mar 14 - 17</TripBoxDateContainer>
                <TripBoxNameContainer>San Fran Trip!</TripBoxNameContainer>
            </TripBoxTextContainer>
        </TripBoxContainer>
    )
}
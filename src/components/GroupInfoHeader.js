import styled from 'styled-components/native';

const GroupInfoContainer = styled.View`
height: 69px;
width: 358px;
margin-left: 16px;
margin-right: 16px;
margin-bottom: 21px;
`

const DateContainer = styled.Text`
height: 30px;
width: 358px;
font-family: 'System';
font-size: 17px;
text-align: left;
color: #767676;
`

const GroupNameContainer = styled.Text`
height: 39px;
width: 358px;
font-family: 'System';
font-size: 33px;
font-weight: bold;
text-align: left;
`

export function GroupInfoHeader() {
    return(
        <GroupInfoContainer>
            <DateContainer>Mar 14 - 17</DateContainer>
            <GroupNameContainer>San Fran Trip!</GroupNameContainer>
        </GroupInfoContainer>
    )
}
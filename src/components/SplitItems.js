import styled from 'styled-components';
import { TextInput, Button } from 'react-native-gesture-handler';

export  const SplitItemsContainer  = styled.View`
margin: 26px;
`

export  const TitleTextSplitItem  = styled.Text`
font-family: DM Sans;
font-size: 21px;
font-weight: 700;
line-height: 26px;
letter-spacing: -0.02em;
text-align: center;
`
export  const SubTextSplitItem  = styled.Text`
font-family: DM Sans;
font-size: 21px;
font-weight: 700;
line-height: 26px;
letter-spacing: -0.02em;
text-align: center;
`
export  const ExplanationTextSplitItem  = styled.Text`

font-size: 14px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: center;
`
export  const IconName = styled.Text`
height: 26px;
width: 29px;
left: 44px;
top: 15px;
`
export const  Icon = styled.Image`

position: absolute;
width: 32px;
height: 32px;
left: 0px;
top: 0px;

`
export function SpitItems() {
    return (
        <SplitItemsContainer>
            <TitleTextSplitItem>Recent</TitleTextSplitItem>
            <SubTextSplitItem> Hey <SubTextSplitItem/>
            <ExplanationTextSplitItem> test <ExplanationTextSplitItem/>
        </SplitItemsContainer>
    )
}
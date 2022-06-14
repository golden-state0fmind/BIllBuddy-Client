import styled from 'styled-components/native';
import { TripBoxHighlight } from './TripBoxHighlight';
import { TripBox } from './TripBox';

const TripBoxOuterContainer = styled.View`
width: 384px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin-left: 16px;
margin-right: 8px;
margin-top: 14px;
justify-content: space-between;
`

export function TripBoxContainer() {
    return (
        <TripBoxOuterContainer>
            <TripBoxHighlight />
            <TripBox />
            <TripBox />
        </TripBoxOuterContainer>
    )
}
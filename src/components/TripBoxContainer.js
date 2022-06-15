import styled from 'styled-components/native';
import { TripBoxHighlight } from './TripBoxHighlight';
import { TripBox } from './TripBox';

const TripBoxOuterContainer = styled.View`
flex-direction: row;
flex-wrap: wrap;
width: 342px;
align-self: center;
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
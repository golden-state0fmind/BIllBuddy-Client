import React from 'react';
import styled from 'styled-components/native';
import { View, TouchableOpacity, Text } from 'react-native';

const StyledPrimaryButton = styled.TouchableOpacity`
  height: 48px;
  width: 142px;
  margin-left: 24px;
  margin-top: 24px;
  border-radius: 8px;

  background: #616161;
  color: #fff;
  &:disabled {
    background: #9E9E9E;
    color: #F8F8F8;
  }
`
const StyledButtonText = styled.Text`
  align-self: center;
  color: #fff;
  &:disabled {
    background: #9E9E9E;
    color: #F8F8F8;
  }
`
// export const SecondaryButton = styled.button`
// border: 1px solid #BDBDBD;
// box-sizing: border-box;
// border-radius: 8px;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.5em 1em;
//   border-radius: 4px;
//   background: #616161;
//   color: #fff;
//   &:disabled {
//     background: #F8F8F8;
//     color: #9E9E9E;
//   }
// `
// const TertiaryButton = styled.button`
// border: 1px solid #BDBDBD;
// box-sizing: border-box;
// border-radius: 8px;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.5em 1em;
//   border-radius: 4px;
//   background: #616161;
//   color: #fff;
// `

export function PrimaryButton( ) {
  return (
      
      <StyledPrimaryButton><StyledButtonText>Primary</StyledButtonText></StyledPrimaryButton>
      
  )
}

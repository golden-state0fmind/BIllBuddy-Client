import React from 'react';
import styled from 'styled-components/native'



export default function Button({ children, theme, onClick, disabled }) {
  console.log(children);
  const renderButton = () => {
    switch (theme) {
      case "primary":
        return (
          <PrimaryButton onClick={onClick} disabled={disabled}>
            {children}
          </PrimaryButton>
        );
      case "secondary":
        return (
          <SecondaryButton onClick={onClick} disabled={disabled}>
            {children}
          </SecondaryButton>
        );
      case "tertiary":
        return (
          <TertiaryButton onClick={onClick} disabled={disabled}>
            {children}
          </TertiaryButton>
        );
      default:
        return (
          <PrimaryButton onClick={onClick} disabled={disabled}>
            {children}
          </PrimaryButton>
        );
    }
  };

  return <>{renderButton()}</>;
}

export const PrimaryButton = styled.button`
  border: 1px solid #BDBDBD;
  box-sizing: border-box;
  border-radius: 8px;
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border-radius: 4px;
  background: #616161;
  color: #fff;
  &:disabled {
    background: #9E9E9E;
    color: #F8F8F8;
  }
`
export const SecondaryButton = styled.button`
border: 1px solid #BDBDBD;
box-sizing: border-box;
border-radius: 8px;
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border-radius: 4px;
  background: #616161;
  color: #fff;
  &:disabled {
    background: #F8F8F8;
    color: #9E9E9E;
  }
`
export const TertiaryButton = styled.button`
border: 1px solid #BDBDBD;
box-sizing: border-box;
border-radius: 8px;
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border-radius: 4px;
  background: #616161;
  color: #fff;
`

// export default function PrimaryButton({ text, onPress }) {
//     return (
//       <TouchableOpacity onPress={onPress}>
//         <View style={styles.button}>
//           <Text style={styles.buttonText}>{text}</Text>
//         </View>
//       </TouchableOpacity>
//     );
//   }
  
//   const styles = StyleSheet.create({
//     button: {
//       borderRadius: 8,
//       paddingVertical: 12,
//       paddingHorizontal: 24,
//       border: 1,
//       backgroundColor: '#f01d71',
//       height: 48,
//       width: 142,
//       left: 24,
//       top: 24,
//       padding: 12,

//     },
//     buttonText: {
//       color: 'white',
//       fontWeight: 'bold',
//       textTransform: 'uppercase',
//       fontSize: 17,
//       textAlign: 'center',
//     }
//   });

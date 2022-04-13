import styled from 'styled-components/native';
import { Image } from 'react-native';

const TopNavigationContainer = styled.View`
height: 44px;
width: 390px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-bottom: auto;
`

const ArrowContainer = styled.View`
height: 44px;
width: 44px;
margin-left: 12px;
display: flex;
flex-direction: row;
align-items: center;
`

const SettingsContainer = styled.View`
height: 44px;
width: 44px;
margin-right: 12px;
align-items: center;
`

const IconContainer = styled.View`
height: 12.75px;
width: 16.48px;
margin: 11px;
display: flex;
`

export function TopNavigation() {
    return(
        <TopNavigationContainer>
            <ArrowContainer>
                <IconContainer>
                    <Image source={require('./assets/NavArrow.png')} />  
                </IconContainer>
            </ArrowContainer>
            <SettingsContainer>
                <IconContainer>
                    <Image source={require('./assets/Settings.png')} />  
                </IconContainer>
            </SettingsContainer>
        </TopNavigationContainer>
    )
}
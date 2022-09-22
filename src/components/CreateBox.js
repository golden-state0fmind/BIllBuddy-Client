import styled from 'styled-components/native';
import { Image, TouchableOpacity } from 'react-native';
import ExpensesScreen from '../screens/ExpensesScreen';
import { useNavigation } from '@react-navigation/native';

const CreateBoxAcrossContainer = styled.View`
height: 160px;
width: 357px;
align-self: center;
margin-top: 12px;
margin-bottom: 12px;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;
`

const CreateBoxContainer = styled(TouchableOpacity)`
height: 160px;
width: 167px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #FFFFFF;
border-radius: 8px;
box-shadow: 2px 4px 16px #0646350D;
`

const CreateBoxTextContainer = styled.Text`
height: 51px;
width: 120px;
font-family: 'System';
font-size: 21px;
font-weight: bold;
text-align: center;
display: flex;
flex-direction: column;
`

function CreateBoxContainer1() {
    const navigation = useNavigation();
    return (
        <CreateBoxContainer onPress={() => navigation.navigate('CreateGroupScreen')} >
        
            <Image source={require('./assets/CreateExpense.png')} 
            />
            <CreateBoxTextContainer>Create{"\n"} expense</CreateBoxTextContainer>
        </CreateBoxContainer>
    )
}

function CreateBoxContainer2() {
    const navigation = useNavigation();
    return (
        
        <CreateBoxContainer onPress={() => navigation.navigate('GroupsScreen')} >
            <Image source={require('./assets/CreateGroup.png')} />
            <CreateBoxTextContainer>Create{"\n"} group</CreateBoxTextContainer>
        </CreateBoxContainer>
    )
}

export function CreateBoxes() {
    return (
        <CreateBoxAcrossContainer>
            <CreateBoxContainer1 />
            <CreateBoxContainer2 />
        </CreateBoxAcrossContainer>
    )
}
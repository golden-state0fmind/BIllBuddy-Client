import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button, Platform, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
// import { baseUrl } from '../shared/baseUrl';

const AddPhotoContainer = styled(TouchableOpacity)`
height: 84px;
width: 342px;
border-radius: 4px;
border: 1px dashed #757575;
align-self: center;
align-items: center;
`

const AddPhotoInnerContainer = styled.View`
margin-top: 18;
margin-bottom: 18;
flex-direction: column;
align-items: center;
`

const AddPhotoText = styled.Text`
font-family: DM Sans;
font-size: 14px;
font-weight: 400;
text-align: center;
margin-top: 7.75;
`

export function PhotoAdder() {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <AddPhotoContainer onPress={pickImage}>
                <AddPhotoInnerContainer>
                    <Image source={require('./assets/Camera.png')} />
                    <AddPhotoText>Add photo</AddPhotoText>
                </AddPhotoInnerContainer>
            </AddPhotoContainer>
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
    );
}
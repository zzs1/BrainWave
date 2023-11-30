import React, { useEffect, useState } from 'react'

import { getAuth } from 'firebase/auth';
import { collection, addDoc, getFirestore, setDoc, doc, getDoc } from "firebase/firestore";

import { StyleSheet, View, Dimensions, Text, Platform, Pressable, TextInput } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker'

import WimmyAnimated from '../../Atoms/WimmyAnimated';
import PrimaryButtonSmall from '../../Atoms/PrimaryButtonSmall';

import { AppContext } from '../../../context/AppContext.js'
import { db } from '../../../firebase/firebaseConfig.js';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function EditPopup({
    active = true,
    onPress = () => {}
}) {
    const { isDyslexic, pfp, setPfp, userName, setUserName } = React.useContext(AppContext);
    const { colors } = useTheme();

    const [isActive, setIsActive] = useState(null);

    useEffect(() => {
        setIsActive(active);
    }, [active])


    const permission = async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert("Permission Denied")
            }
        }
    }

    useEffect(() => {
        permission();
    }, [])

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        })
        console.log(result);
        if (!result.canceled) {
            setPfp(result.uri)
        }
    }

    const updateUser = async () => {
        const userCreds = getAuth();
        const userRef = doc(db, "users", userCreds.currentUser.uid)
        setDoc(
            userRef,
            {
                userName: userName,
                avatar: pfp,
            },
            { merge: true }
        )
        alert("Your changes have been saved!")
    }

    return (
        <>
            {
                isActive ? <View style={styles.container}>
                    <View style={styles.bg}></View>
                    <View style={styles.wimmyDialogue}>
                        <View style={{
                            ...styles.dialogue,
                            borderColor: colors.dialogueBorder,
                            backgroundColor: colors.dialogueBG
                        }}>
                            <Text style={{
                                ...styles.title,
                                color: colors.text,
                                fontFamily: isDyslexic ? 'Lexend-Bold' : 'Poppins-Bold'
                            }}>Edit Your Profile Here</Text>
                            <View style={styles.editCont}>
                                <Text style={{
                                    fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular',
                                    fontSize: 18,
                                    color: colors.text
                                }}>Change Your Avatar</Text>
                                <Pressable style={styles.avartar} onPress={pickImage}>
                                    <Image
                                        source={{ uri: pfp }}
                                        width={150}
                                        height={150}
                                        style={{
                                            borderRadius: 10,
                                            borderColor: colors.dialogueBorder,
                                            borderWidth: 3
                                        }}
                                    />
                                </Pressable>
                            </View>
                            <View style={styles.editCont}>
                                <Text style={{
                                    fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular',
                                    fontSize: 18,
                                    color: colors.text
                                }}>Enter New Username</Text>
                                <TextInput
                                    style={{
                                        ...styles.userNameInput,
                                        borderColor: colors.inputBorder,
                                        backgroundColor: colors.inputBG,
                                        color: colors.text,
                                        fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                                    }}
                                    placeholder="Type your name..."
                                    onChangeText={(text) => setUserName(text)}
                                    value={userName}
                                />
                            </View>
                            <PrimaryButtonSmall name="SAVE CHANGES" onPress={() => {
                                updateUser();
                                onPress();
                            }} />
                        </View>
                        <WimmyAnimated />
                        {/* <Image source={Splash} style={{ width: 400, height: 200, position: 'absolute', zIndex: -1, bottom: -125}} /> */}
                    </View>
                </View> : <></>
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: screenHeight,
        position: 'absolute',
        bottom: 0,
        zIndex: 2,
        paddingBottom: 30
    },
    bg: {
        width: screenWidth,
        height: screenHeight,
        backgroundColor: 'black',
        opacity: 0.6,
        position: 'absolute',
        bottom: 0
    },
    wimmyDialogue: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    dialogue: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 315,
        borderRadius: 20,
        borderWidth: 2,
        padding: 15,
    },
    title: {
        fontSize: 22,
        margin: 0
    },
    desc: {
        fontSize: 18,
        marginTop: 20,
        marginBottom: 20
    },
    userNameInput: {
        width: 280,
        height: 50,
        borderRadius: 6,
        borderWidth: 1.5,
        fontSize: 20,
        textAlign: 'center',
    },
    editCont: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 20
    }
})
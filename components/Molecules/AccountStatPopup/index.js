import React, { useEffect, useState } from 'react'

import { StyleSheet, View, Dimensions, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Image } from 'expo-image';

import DialogueBoxLower from '../../Atoms/DialogueBoxLower';
import Wimmy from '../../../assets/Illustrations/Wimmy/WimmyFront.png';
import Splash from '../../../assets/Illustrations/Splash.png';
import WimmyAnimated from '../../Atoms/WimmyAnimated';
import PrimaryButtonSmall from '../../Atoms/PrimaryButtonSmall';

import { AppContext } from '../../../context/AppContext.js'

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function AccountStatPopup({
    navigation,
    title = ""
}) {
    const { isDyslexic } = React.useContext(AppContext);
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
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
                    }}>{title}</Text>
                    <Text style={{
                        ...styles.desc,
                        color: colors.text,
                        fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                    }}>You're all set! Time to improve your critical thinking! Enjoy your stay!</Text>
                    <PrimaryButtonSmall name="VIEW PROFILE" onPress={() => {
                        navigation.push("AccountProfile");
                    }} />
                </View>
                <WimmyAnimated />
                {/* <Image source={Splash} style={{ width: 400, height: 200, position: 'absolute', zIndex: -1, bottom: -125}} /> */}
            </View>
        </View>
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
})
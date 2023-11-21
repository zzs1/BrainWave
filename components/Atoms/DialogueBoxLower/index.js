import React from 'react';

import { StyleSheet, Text, View, Button,useColorScheme } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { AppContext } from '../../../context/AppContext.js'

export default function DialogueBoxLower({
    title='',
    desc='',
    instuction=''
}) {
    const { isDyslexic } = React.useContext(AppContext);
    const { colors } = useTheme();

    return(
        <View style={{
            ...styles.dialogue_box,
            borderColor: colors.dialogueBorder,
            backgroundColor: colors.dialogueBG
        }}>
            <Text style={{
                ...styles.title,
                color: colors.text,
                fontFamily: isDyslexic ? 'Lexend-Bold': 'Poppins-Bold'
            }}>{title}</Text>
            <Text style={{
                ...styles.desc,
                color: colors.text,
                fontFamily: isDyslexic ? 'Lexend-Regular': 'Poppins-Regular'
            }}>{desc}</Text>
            <Text style={{
                ...styles.instuction,
                color: colors.fadedText,
                fontFamily: isDyslexic ? 'Lexend-Regular': 'Poppins-Regular'
            }}>{instuction}</Text>
        </View>
    )
    }
    const styles = StyleSheet.create({
        dialogue_box:{
            width: 315,
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderTopRightRadius: 20,
            borderWidth: 2,
            padding: 15,
            shadowColor: '#171717',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
        },
        title: {
            fontSize: 22,
            margin: 0
        },
        desc: {
            fontSize: 18,
        },
        instuction: {
            fontSize: 16,
            color: '#696969',
            marginTop: 15
        }
    })
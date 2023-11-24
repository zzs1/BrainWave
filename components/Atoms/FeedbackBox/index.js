import React from 'react';

import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useTheme } from "@react-navigation/native";

import WimmyThinking from '../WimmyThinking/index.js';

import { AppContext } from '../../../context/AppContext.js'

export default function FeedbackBox({
    text,
    loading = false
}) {
    const { isDyslexic } = React.useContext(AppContext);
    const { colors } = useTheme();

    return (
        <ScrollView style={{
            ...styles.box,
            backgroundColor: colors.dialogueBG,
            borderColor: colors.dialogueBorder,
        }}>
            {
                loading ? <WimmyThinking /> :
                    <Text style={{
                        color: colors.text,
                        fontSize: 18,
                        paddingBottom: 30,
                        fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                    }}>
                        {text}
                    </Text>
            }
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    box: {
        minHeight: 70,
        maxHeight: 280,
        width: 315,
        borderRadius: 10,
        borderWidth: 3,
        padding: 10
    }
})
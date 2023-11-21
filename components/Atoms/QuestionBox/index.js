import React from 'react';

import { StyleSheet, View, Text} from 'react-native';
import { useTheme } from "@react-navigation/native";

import { AppContext } from '../../../context/AppContext.js'

export default function QuestionBox({ text }) {
    const { isDyslexic } = React.useContext(AppContext);
    const { colors } = useTheme();

    return (
        <View style={{
            ...styles.box,
            backgroundColor: colors.dialogueBG,
            borderColor: colors.dialogueBorder,
        }}>
            <Text style={{
                color: colors.text,
                fontSize: 16,
                fontFamily: isDyslexic ? 'Lexend-Regular': 'Poppins-Regular'
            }}>
                {text}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    box: {
        minHeight: 70,
        maxHeight: 350,
        width: 315,
        borderRadius: 10,
        borderWidth: 3,
        padding: 10
    }
})
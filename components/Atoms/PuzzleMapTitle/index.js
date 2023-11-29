import React from 'react'
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@react-navigation/native';

import { AppContext } from '../../../context/AppContext.js'

const screenWidth = Dimensions.get("window").width;

export default function PuzzleMapTitle({
    title='',
}) {
    const { isDyslexic } = React.useContext(AppContext);
    const { colors } = useTheme();

  return (
        <Text style={{
            ...styles.title,
            color: colors.text,
            backgroundColor: colors.background,
            paddingTop: 50,
            width: screenWidth,
            fontFamily: isDyslexic ? 'Lexend-Bold': 'Poppins-Bold'
        }}>{title.toUpperCase()}</Text>
  )
}

const styles = StyleSheet.create({
    container: {
        width: screenWidth,
        height: 200,
    },
    title: {
        fontSize: 24,
        paddingLeft: 30,
        paddingBottom: 10,
    }
})
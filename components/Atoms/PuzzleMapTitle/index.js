import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@react-navigation/native';

import { AppContext } from '../../../context/AppContext.js'

export default function PuzzleMapTitle({
    title='',
}) {
    const { isDyslexic } = React.useContext(AppContext);
    const { colors } = useTheme();

  return (
    <LinearGradient colors={[colors.background,'transparent']} style={{
        ...styles.container,
    }}>
        <Text style={{
            ...styles.title,
            color: colors.text,
            fontFamily: isDyslexic ? 'Lexend-Bold': 'Poppins-Bold'
        }}>{title.toUpperCase()}</Text>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 400,
        height: 350
    },
    title: {
        fontSize: 28,
        marginLeft: 30
    }
})
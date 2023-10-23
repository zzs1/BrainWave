import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';

import Lock from '../../../assets/Illustrations/Lock/Lock_white.png'
import Island from '../../../assets/Illustrations/Island1.png'

export default function PuzzleMapTitle({
    title='',
    theme=''
}) {
  return (
    <LinearGradient colors={theme === 'dark' ? ['#1E1E1E','transparent'] : ['rgba(255,255,255,1)','transparent']} style={{
        ...styles.container,
    }}>
        <Text style={styles.title}>{title}</Text>
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
        fontWeight: 'bold',
        marginLeft: 30
    }
})
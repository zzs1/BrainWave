import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function PuzzleMapTitle({
    title='',
    theme=''
}) {
  return (
    <LinearGradient colors={theme === 'dark' ? ['#1E1E1E','transparent'] : ['rgba(255,255,255,1)','transparent']} style={{
        ...styles.container,
    }}>
        <Text style={{
            ...styles.title,
            color: '#1E1E1E'
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
        fontWeight: 'bold',
        marginLeft: 30
    }
})
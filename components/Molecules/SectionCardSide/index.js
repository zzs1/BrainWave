import React from 'react'

import { StyleSheet, Text, View, Button} from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@react-navigation/native';

export default function SectionCardSide({
    image='',
    title='',
}) {
  const { colors } = useTheme();

  return (
    <LinearGradient colors={[colors.cardBGTwo, colors.cardBGOne]} style={{
      ...styles.container,
      borderColor: colors.cardBorder, 
      backgroundColor: colors.cardBorder
    }}>
        <Text style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: colors.text
        }}>{title}</Text>
        <Image source={image} contentFit='contain' style={{
          width: 100,
          height: 100
        }}/>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 245,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,
    borderWidth: 3
  }
})
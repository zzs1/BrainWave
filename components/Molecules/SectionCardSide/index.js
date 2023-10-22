import React from 'react'

import { StyleSheet, Text, View, Button} from 'react-native';
import { Image } from 'expo-image';

export default function SectionCardSide({
    color='',
    border='',
    theme='',
    image='',
    title='',
}) {
  return (
    <View style={{
      ...styles.container,
      border: `3px solid ${border}`, 
      backgroundColor: theme === 'dark' ? color : `linear-gradient(white, ${color})`,
    }}>
        <Text style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: theme === 'dark' ? 'white' : '#1E1E1E'
        }}>{title}</Text>
        <Image source={image} contentFit='contain' style={{
          width: 100,
          height: 100
        }}/>
    </View>
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
    borderRadius: 10
  }
})
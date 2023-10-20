import React from 'react'

import { StyleSheet, Text, View, Button} from 'react-native';
import { Image } from 'expo-image';

import ProgressBar from '../../Atoms/ProgressBar-level';

export default function SectionCardSide({
    color=[],
    theme='',
    image='',
    title='',
}) {
  return (
    <View style={{
      border: `3px solid ${color[1]}`, 
      backgroundColor: theme === 'dark' ? color[0] : `linear-gradient(white, ${color[1]})`,
      width: 170,
      height: 245,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
        <Text style={{
          fontSize: 16,
        }}>{title}</Text>
        <Image source={image} style={{
          width: 100,
          height: 100
        }}/>
    </View>
  )
}
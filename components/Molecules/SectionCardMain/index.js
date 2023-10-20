import React from 'react'

import { StyleSheet, Text, View, Button} from 'react-native';
import { Image } from 'expo-image';

import ProgressBar from '../../Atoms/ProgressBar-level';

export default function SectionCardMain({
    color=[],
    theme='',
    image='',
    title='',
    prog=0
}) {
  return (
    <View style={{
      border: `3px solid ${color[1]}`, 
      backgroundColor: theme === 'dark' ? color[0] : `linear-gradient(white, ${color[1]})`,
      width: 230,
      height: 325,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold'
        }}>{title}</Text>
        <Image source={image} style={{
          width: 150,
          height: 150
        }}/>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: 200
        }}>
          <ProgressBar 
            fill={prog}
            color={color[0]}
            theme={theme}
          />
          <Text style={{
            fontSize: 16,
            color: theme === 'dark' ? '#CDDDEC' : '#343434'
          }}>{prog}%</Text>
        </View>
    </View>
  )
}
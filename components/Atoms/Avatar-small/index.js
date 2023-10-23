import React from 'react'

import { StyleSheet, Text, View, Button} from 'react-native';
import { Image } from 'expo-image';

export default function AvatarSmall({
    frameColor='',
    image=''
}) {
  return (
    <View style={{
        ...styles.container,
        border: `4px solid ${frameColor}`
    }}>
        <Image style={{
            width: '100%',
            height: '100%'
        }}source={image} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 75,
    height: 75,
    borderRadius: 15
  }
})
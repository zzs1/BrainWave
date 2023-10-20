import React from 'react'

import { StyleSheet, Text, View, Button} from 'react-native';
import { Image } from 'expo-image';

export default function AvatarSmall({
    frameColor='',
    image=''
}) {
  return (
    <View style={{
        width: 75,
        height: 75,
        borderRadius: 15,
        border: `4px solid ${frameColor}`
    }}>
        <Image style={{
            width: '100%',
            height: '100%'
        }}source={image} />
    </View>
  )
}
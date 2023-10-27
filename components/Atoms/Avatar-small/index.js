import React from 'react'

import { StyleSheet, Text, View, Button} from 'react-native';
import { Image } from 'expo-image';
import { useTheme } from '@react-navigation/native';

export default function AvatarSmall({
    image=''
}) {
  const { colors } = useTheme();

  return (
    <View style={{
        ...styles.container,
        borderWidth: 4,
        borderColor: colors.text
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
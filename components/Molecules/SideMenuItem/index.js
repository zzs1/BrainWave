import React from 'react'

import { StyleSheet, Text, View, Button} from 'react-native';
import { Image } from 'expo-image';

export default function SideMenuItem({
  image='',
  item='',
  color=''
}) {
  return (
    <View style={styles.container}>
        <Image source={image} style={{
          height: 30,
          width: 'auto' 
        }}/>
        <Text style={{
          color: color,
          fontSize: 20,
          marginLeft: 50
        }}>{item}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  }
})
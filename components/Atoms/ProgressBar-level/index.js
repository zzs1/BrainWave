import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native';

export default function ProgressBar({
    fill=0,
    theme='',
    color=''
}) {
  return (
    <View style={{
      ...styles.container,
      backgroundColor: theme === 'dark' ? color : '#CDDDEC'
    }}>
        <View style={{
            width:`${fill}%`,
            height:'100%',
            backgroundColor: theme === 'dark' ? '#CDDDEC' : color,
            borderRadius: 10
        }}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 10,
    width: 150,
    borderRadius: 10
  }
})
import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native';

export default function ProgressBar({
    fill=0,
    bgColor='',
    fillColor=''
}) {
  return (
    <View style={{
        height: 10,
        width: 150,
        borderRadius: 10,
        backgroundColor: bgColor
    }}>
        <View style={{
            width:`${fill}%`,
            height:'100%',
            backgroundColor: fillColor
        }}></View>
    </View>
  )
}